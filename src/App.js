import React from 'react';
import './App.css';
import {Link} from "react-router-dom";

export default function App() {
    return (
        <div>
            <div className={'navbar'}><Link to={'/'} className={'logo'}>easy cafe</Link></div>

            <div className={'square'}>
                <p className={'header__text'}>Добро пожаловать!</p>
                <p className={'text'}>Выберите тип входа</p>

                <div className={'buttons first'}><Link to={'/login-employee'}><button>Войти как сотрудник</button></Link></div>
                <div className={'buttons second'}><Link to={'/login-director'}><button>Войти как директор</button></Link></div>
            </div>
        </div>
    );
}
