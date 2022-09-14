import React, { Suspense } from "react";
import { Route, Routes } from "react-router";
import Navbar from "./components/Navbar";

const Home = React.lazy(() => import("./pages/Home"));
const Teams = React.lazy(() => import("./pages/Teams"));

const App = () => {
    return (
        <>
            {/* TODO complete the links once all designs are finished */}
            <Navbar
                links={[
                    { href: "/", title: "Home" },
                    { href: "/about", title: "About" },
                    { href: "/members", title: "Members" },
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
