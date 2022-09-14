<<<<<<< HEAD
import React, { Suspense } from "react";
import { Route, Routes } from "react-router";
import Navbar from "./components/Navbar";

const Home = React.lazy(() => import("./pages/Home"));
const Teams = React.lazy(() => import("./pages/Teams"));
=======
import React from "react";
import Achievements from "./components/Achievements/Achievements";
>>>>>>> feat/achievements

const App = () => {
    return <Achievements />;
};

export default App;
