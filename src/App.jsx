import React, { Suspense } from "react";
import { Route, Routes } from "react-router";

const Home = React.lazy(() => import("./pages/Home"));

const App = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route
                    index
                    element={<Home />}
                />
            </Routes>
        </Suspense>
    );
};

export default App;
