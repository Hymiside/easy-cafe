import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './index.css';
import App from './App';
import LoginEmployee from "./LoginEmployee";
import LoginDirector from "./LoginDirector";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path={'/'} element={<div style={{width: "940px", margin: "auto"}}><App /></div>} />
            <Route path={'/login-employee'} element={<div style={{width: "940px", margin: "auto"}}><LoginEmployee /></div>} />
            <Route path={'/login-director'} element={<div style={{width: "940px", margin: "auto"}}><LoginDirector /></div>} />
        </Routes>
    </BrowserRouter>
);

