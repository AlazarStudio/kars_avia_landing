import React from "react";
import DemoBlock from "../Blocks/DemoBlock/DemoBlock";
import Moduls from "../Blocks/Moduls/Moduls";

function Main_Page({ children, ...props }) {
    return (
        <main style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }}>
            <DemoBlock />
            <Moduls />
        </main>
    );
}

export default Main_Page;