import React from "react";
import {Link} from "react-router-dom";

import "./LoginDirector.css"


class LoginDirector extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert(this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <div className={'navbar'}><Link to={'/'} className={'logo'}>easy cafe</Link></div>

                <div className={'square'}>
                    <p className={'header__text'}>Добро пожаловать!</p>
                    <p className={'text'}>Введите данные директора</p>

                    <form onSubmit={this.handleSubmit}>
                        <label>
                            <div className={'first'}><input className={'input'} type="text" placeholder='Логин' value={this.state.value} onChange={this.handleChange} /></div>
                            <div className={'second'}><input className={'input'} type="password" placeholder='Пароль' value={this.state.value} onChange={this.handleChange} /></div>
                        </label>

                        <div className={'button__submit'}><input type="submit" value="Войти" /></div>
                    </form>
                </div>
            </div>
        );
    }
}

export default LoginDirector;