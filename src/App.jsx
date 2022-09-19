import React, { Suspense } from "react";
import { Route, Routes } from "react-router";
import Navbar from "./components/Navbar";

const Home = React.lazy(() => import("./pages/Home"));

const App = () => {
    return (
        <>
            {/* TODO complete the links once all designs are finished */}
            <Navbar
                links={[
                    { href: "/#root", title: "Beranda" },
                    { href: "/#about", title: "Tentang Kami" },
                    { href: "/#dikata-magazine", title: "Dikata Menyapa" },
                    { href: "/#team", title: "Tim Kami" },
                ]}
            />

            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route
                        index
                        element={<Home />}
                    />
                </Routes>
            </Suspense>
        </>
    );
};

export default App;
