import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import Main_Page from "./Components/Pages/Main_Page";
import Non_Found_Page from "./Components/Pages/Non_Found_Page";
import Layout from "./Components/Standart/Layout/Layout";
import InstallButton from "./Components/Pages/InstallButton/InstallButton";
import Price from "./Components/Blocks/Price/Price";
import DemoRequestModal from "./Components/Blocks/DemoRequestModal/DemoRequestModal";

function useSmartHashScroll() {
  useEffect(() => {
    const getOffset = () =>
      (document.querySelector("header")?.offsetHeight || 0) + 8; // запас 8px

    const performScroll = (id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const top =
        el.getBoundingClientRect().top + window.pageYOffset - getOffset();
      window.scrollTo({ top, behavior: "smooth" });
    };

    // Ждём «стабильной» высоты документа N кадров подряд
    const waitForStableLayoutThenScroll = (id) => {
      let raf;
      let stableFrames = 0;
      let lastH = 0;

      const tick = () => {
        const h = document.body.scrollHeight;
        stableFrames = h === lastH ? stableFrames + 1 : 0;
        lastH = h;

        // 8 подряд стабильных кадров (~130–150 мс) — считаем, что верстка устаканилась
        if (stableFrames >= 8) {
          performScroll(id);
        } else {
          raf = requestAnimationFrame(tick);
        }
      };

      raf = requestAnimationFrame(tick);
      return () => cancelAnimationFrame(raf);
    };

    const handleScrollToHash = () => {
      const id = decodeURIComponent(window.location.hash.replace("#", ""));
      if (!id) return;

      // если уже всё загрузилось — сразу в «ожидание стабильности»
      if (document.readyState === "complete") {
        waitForStableLayoutThenScroll(id);
      } else {
        // иначе дождёмся window.load и только потом
        const onLoad = () => waitForStableLayoutThenScroll(id);
        window.addEventListener("load", onLoad, { once: true });
      }
    };

    // при первом заходе и при смене хеша
    handleScrollToHash();
    window.addEventListener("hashchange", handleScrollToHash);

    // на всякий — если после первых рендеров что-то дорисуется (картинки), попробуем ещё раз
    const onResize = () => handleScrollToHash();
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("hashchange", handleScrollToHash);
      window.removeEventListener("resize", onResize);
    };
  }, []);
}

function App() {
  useSmartHashScroll();

  const [demoOpen, setDemoOpen] = useState(false);
  const [toast, setToast] = useState(null);

  const handleSubmitDemo = async (payload) => {
  try {
    // Соберём услуги в строку (на сервер идёт одна строка)
    const services = (payload.services || [])
      .filter(Boolean)
      .join(', ');

    const res = await fetch("/php/send_mail.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
      },
      body: new URLSearchParams({
        companyName: payload.companyName,
        innKpp: payload.innKpp,
        region: payload.region,
        services, // "Организация эстафеты, Услуги ФАП 82"
        departmentName: payload.departmentName,
        specialistContacts: payload.specialistContacts,
        source: window.location.href,
        website: "" // honeypot (оставляем пустым)
      }),
    });

    const text = await res.text();

    if (res.ok && text.trim() === "Success") {
      setToast({
        type: "success",
        message: "Заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.",
      });
    } else {
      throw new Error(text || "Ошибка при отправке");
    }
  } catch (e) {
    setToast({
      type: "error",
      message: "Не удалось отправить заявку. Попробуйте позже.",
    });
    console.error(e);
  } finally {
    setTimeout(() => setToast(null), 5000);
  }
};

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout setDemoOpen={setDemoOpen} />}>
          <Route index element={<Main_Page setDemoOpen={setDemoOpen} />} />
          <Route path="/price" element={<Price />} />
          <Route path="*" element={<Non_Found_Page />} />
        </Route>
      </Routes>

      <DemoRequestModal
        open={demoOpen}
        onClose={() => setDemoOpen(false)}
        onSubmit={handleSubmitDemo}
      />

      {/* Всплывающее уведомление */}
      {toast && (
        <div
          style={{
            position: "fixed",
            bottom: 30,
            right: 30,
            background:
              toast.type === "success"
                ? "linear-gradient(90deg,#0057C3,#0057C3)"
                : "linear-gradient(90deg,#e74c3c,#c0392b)",
            color: "#fff",
            padding: "14px 20px",
            borderRadius: 10,
            boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
            fontSize: 15,
            zIndex: 10000,
            animation: "fadeIn 0.3s ease",
          }}
        >
          {toast.message}
        </div>
      )}

      {/* Кнопка установки */}
      {/* <InstallButton /> */}
    </>
  )
}

export default App
