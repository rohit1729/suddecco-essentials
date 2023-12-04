import React from "react";
import logo from "./logo.svg";

import style from "./App.module.css";
import Header from "./components/Header";
import { Routes, Route, Link, Navigate, useLocation } from "react-router-dom";
import Project from "./pages/project";
import Area from './pages/area'
import Dashboard from "./pages/dashboard";
import Team from "./pages/team";
import Standard from "./pages/standard";
import BuildType from "./pages/buildtype";
import AreaSelection from "./pages/areaselection";


function App() {
  return (
    <div className={style.App}>
      <Routes>
        <Route index element={<Navigate to="/project" />} />
        <Route path="/project" element={<Project />} />
        <Route path="/areas" element={<Area />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/team" element={<Team />} />
        <Route path="/standard" element={<Standard/>} />
        <Route path="/buildtype" element={<BuildType/>} />
        <Route path="/selectarea" element={<AreaSelection/>} />
      </Routes>
    </div>
  );
}

export default App;