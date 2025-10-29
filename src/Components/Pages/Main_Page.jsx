import React, { useEffect, useState } from "react";
import DemoBlock from "../Blocks/DemoBlock/DemoBlock";
import Moduls from "../Blocks/Moduls/Moduls";

function Main_Page({ children, ...props }) {
    const [showArrow, setShowArrow] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // проверяем, прошёл ли пользователь больше 100vh
            if (window.scrollY > window.innerHeight - 200) {
                setShowArrow(true);
            } else {
                setShowArrow(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <main style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }}>
            <DemoBlock />
            <Moduls />

            <div
                className="topArrow"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                style={{
                    opacity: `${showArrow ? 1 : 0}`
                }}
            >
                <img src="top.png" alt="" />
            </div>
        </main>
    );
}

export default Main_Page;