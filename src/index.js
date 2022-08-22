import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path={'/'} element={<div style={{width: "940px", margin: "auto"}}><App /></div>} />
        </Routes>
    </BrowserRouter>
);

