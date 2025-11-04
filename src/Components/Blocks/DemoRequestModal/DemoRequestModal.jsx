import React, { useEffect, useRef, useState } from "react";

export default function DemoRequestModal({ open, onClose, onSubmit }) {
    const dialogRef = useRef(null);
    const [form, setForm] = useState({
        companyName: "",
        innKpp: "",
        region: "",
        services: {
            relayOrg: false, // Организация эстафеты
            fap82: false,    // Услуги ФАП 82
        },
        departmentName: "",
        specialistContacts: "",
    });

    // Закрытие по ESC
    useEffect(() => {
        const onKey = (e) => e.key === "Escape" && onClose?.();
        if (open) window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [open, onClose]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((s) => ({ ...s, [name]: value }));
    };

    const handleServiceChange = (e) => {
        const { name, checked } = e.target;
        setForm((s) => ({ ...s, services: { ...s.services, [name]: checked } }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const chosenServices = [];
        if (form.services.relayOrg) chosenServices.push("Организация эстафеты");
        if (form.services.fap82) chosenServices.push("Услуги ФАП 82");

        // Простейшая валидация
        if (!form.companyName.trim()) return alert("Укажите наименование компании (юрлицо).");
        if (!form.innKpp.trim()) return alert("Укажите ИНН/КПП.");
        if (!form.region.trim()) return alert("Укажите интересующий регион.");
        if (chosenServices.length === 0) return alert("Выберите хотя бы одну услугу.");
        if (!form.departmentName.trim()) return alert("Укажите наименование отдела.");
        if (!form.specialistContacts.trim()) return alert("Укажите контакты специалиста.");

        const payload = {
            companyName: form.companyName.trim(),
            innKpp: form.innKpp.trim(),
            region: form.region.trim(),
            services: chosenServices,
            departmentName: form.departmentName.trim(),
            specialistContacts: form.specialistContacts.trim(),
        };

        onSubmit?.(payload);
        onClose?.();
        // опционально: очистка формы
        setForm({
            companyName: "",
            innKpp: "",
            region: "",
            services: { relayOrg: false, fap82: false },
            departmentName: "",
            specialistContacts: "",
        });
    };

    if (!open) return null;

    return (
        <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="demo-modal-title"
            ref={dialogRef}
            onClick={(e) => {
                // клик по подложке закрывает
                if (e.target === e.currentTarget) onClose?.();
            }}
            style={styles.backdrop}
        >
            <div style={styles.modal}>
                <div style={styles.header}>
                    <h3 id="demo-modal-title" style={{ margin: 0 }}>Запрос демо-версии</h3>
                    <button type="button" onClick={onClose} style={styles.closeBtn} aria-label="Закрыть">×</button>
                </div>

                <form onSubmit={handleSubmit} style={styles.form}>
                    <label style={styles.label}>
                        Наименование компании (юрлицо)
                        <input
                            name="companyName"
                            value={form.companyName}
                            onChange={handleChange}
                            placeholder="ООО «Пример»"
                            style={styles.input}
                        />
                    </label>

                    <label style={styles.label}>
                        ИНН/КПП
                        <input
                            name="innKpp"
                            value={form.innKpp}
                            onChange={handleChange}
                            placeholder="ИНН/КПП"
                            style={styles.input}
                        />
                    </label>

                    <label style={styles.label}>
                        Интересующий регион
                        <input
                            name="region"
                            value={form.region}
                            onChange={handleChange}
                            placeholder="Например: Москва, ЮФО и т.п."
                            style={styles.input}
                        />
                    </label>

                    <fieldset style={styles.fieldset}>
                        <legend style={styles.legend}>Услуги</legend>
                        <label style={styles.checkboxRow}>
                            <input
                                type="checkbox"
                                name="relayOrg"
                                checked={form.services.relayOrg}
                                onChange={handleServiceChange}
                            />
                            <span>Организация эстафеты</span>
                        </label>
                        <label style={styles.checkboxRow}>
                            <input
                                type="checkbox"
                                name="fap82"
                                checked={form.services.fap82}
                                onChange={handleServiceChange}
                            />
                            <span>Услуги ФАП 82</span>
                        </label>
                    </fieldset>

                    <label style={styles.label}>
                        Наименование отдела, который формирует запрос
                        <input
                            name="departmentName"
                            value={form.departmentName}
                            onChange={handleChange}
                            placeholder="Напр.: Отдел закупок / ИТ-департамент"
                            style={styles.input}
                        />
                    </label>

                    <label style={styles.label}>
                        Контакты специалиста (телефон и/или email)
                        <input
                            name="specialistContacts"
                            value={form.specialistContacts}
                            onChange={handleChange}
                            placeholder="+7..., name@company.ru"
                            style={styles.input}
                        />
                    </label>

                    <input
                        type="text"
                        name="website"
                        autoComplete="off"
                        tabIndex="-1"
                        style={{ position: "absolute", left: "-9999px", opacity: 0 }}
                        aria-hidden="true"
                    />
                    <div style={styles.actions}>
                        <button type="button" onClick={onClose} style={styles.secondaryBtn}>Отмена</button>
                        <button type="submit" style={styles.primaryBtn}>Отправить заявку</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

const styles = {
    backdrop: {
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.45)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 16,
        zIndex: 9999,
    },
    modal: {
        width: "100%",
        maxWidth: 660,
        background: "#fff",
        borderRadius: 12,
        boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
        overflow: "hidden",
    },
    header: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "20px",
        borderBottom: "1px solid #eee",
    },
    closeBtn: {
        border: "none",
        background: "transparent",
        fontSize: 24,
        lineHeight: 1,
        cursor: "pointer",
    },
    form: { padding: 20, display: "grid", gap: 20 },
    label: { display: "grid", gap: 6, fontSize: 14 },
    input: {
        height: 40,
        padding: "8px 12px",
        borderRadius: 8,
        border: "1px solid #ddd",
        outline: "none",
    },
    fieldset: {
        border: "1px solid #eee",
        borderRadius: 8,
        padding: 12,
    },
    legend: { padding: "0 6px", fontWeight: 600 },
    checkboxRow: { display: "flex", alignItems: "center", gap: 8, marginTop: 6 },
    actions: {
        display: "flex",
        justifyContent: "flex-end",
        gap: 8,
        marginTop: 4,
    },
    primaryBtn: {
        padding: "10px 14px",
        borderRadius: 8,
        border: "none",
        background: "#0057C3",
        color: "#fff",
        cursor: "pointer",
    },
    secondaryBtn: {
        padding: "10px 14px",
        borderRadius: 8,
        border: "1px solid #ddd",
        background: "#fff",
        cursor: "pointer",
    },
};
