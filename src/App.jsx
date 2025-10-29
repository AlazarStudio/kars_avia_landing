import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import Main_Page from "./Components/Pages/Main_Page";
import Non_Found_Page from "./Components/Pages/Non_Found_Page";
import Layout from "./Components/Standart/Layout/Layout";
import InstallButton from "./Components/Pages/InstallButton/InstallButton";
import Price from "./Components/Blocks/Price/Price";

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
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>

          <Route index element={<Main_Page />} />
          <Route path="/price" element={<Price />} />
          <Route path="*" element={<Non_Found_Page />} />
        </Route>
      </Routes>

      {/* Кнопка установки */}
      {/* <InstallButton /> */}
    </>
  )
}

export default App
