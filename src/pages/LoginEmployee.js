import React from "react";
import {Link, Navigate} from "react-router-dom";

import { ButtonInput, InputLogin, FormLogin, HeaderText, Text, NavBar, Logo } from "../styles/StyleLogin";



class LoginDirector extends React.Component {
    constructor(props) {
        super(props);
        this.state = {login: '', password: '', status: false};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        let {name, value} = event.target
        this.setState({[name]: value});
    }

    handleSubmit(event) {
        if (this.state.login !== '' && this.state.password !== '') {
            // Отправляем запрос на проверку данных и получаем ответ
            this.setState({'status': true})
        } else {
            alert('Введите корректные данные!')
        }
        event.preventDefault();
    }


    render() {
        if (this.state.status) {
            return (
                <div><Navigate to="/orders" /></div>
            );
        }

        return (
            <div style={{fontFamily: "'Montserrat', sans-serif"}}>
                <NavBar><Link to={'/'} style={{ textDecoration: 'none' }}><Logo>easy cafe</Logo></Link></NavBar>

                <div style={{marginTop: "170px"}}>
                    <HeaderText>Добро пожаловать!</HeaderText>
                    <Text>Введите данные сотрудника</Text>

                    <FormLogin onSubmit={this.handleSubmit}>
                        <label>
                            <div><InputLogin indent className={'input'} type="text" name="login" placeholder='Логин' value={this.state.login} onChange={this.handleChange} /></div>
                            <div><InputLogin className={'input'} type="password" name="password" placeholder='Пароль' value={this.state.password} onChange={this.handleChange}/></div>
                        </label>

                        <div><ButtonInput type="submit" value="Войти" /></div>
                    </FormLogin>
                </div>
            </div>
        );
    }
}

export default LoginDirector;