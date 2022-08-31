import React from 'react';
import {Link} from "react-router-dom";

import {ButtonLogin, HeaderText, Logo, NavBar, SquareLogin, Text} from "../styles/StylesLogin";

export default function App() {
    return (
        <div style={{fontFamily: "'Montserrat', sans-serif"}}>
            <NavBar><Link to={'/'}style={{ textDecoration: 'none' }}><Logo>easy cafe</Logo></Link></NavBar>

            <SquareLogin start>
                <HeaderText>Добро пожаловать!</HeaderText>
                <Text>Выберите тип входа</Text>

                <div style={{textAlign: "center"}}><Link to={'/login-employee'}><ButtonLogin indent>Войти как сотрудник</ButtonLogin></Link></div>
                <div style={{textAlign: "center"}}><Link to={'/login-director'}><ButtonLogin>Войти как директор</ButtonLogin></Link></div>
            </SquareLogin>
        </div>
    );
};
