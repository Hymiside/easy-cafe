import React from 'react';
import './App.css';
import {Link} from "react-router-dom";

export default function App() {
    return (
        <div className={'navbar'}><Link to={'/'} className={'logo'}>easy cafe</Link></div>
    );
}
