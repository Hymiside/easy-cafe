import styled from 'styled-components';


//Кнопка для входа в приложение
export const ButtonInput = styled.input `
  width: 220px;
  height: 50px;
  background: #5200FF;
  border: none;
  border-radius: 15px;
  margin: 35px 0 0 0;

  font-size: 18px;
  font-weight: 600;
  color: #FFFFFF;
`

// Стили логотипа
export const Logo = styled.p `
  text-underline: none;
  text-decoration: none;
  font-weight: 600;
  color: #5200FF;
  font-size: 21px;
  margin: 0;
`

//Кнопка для выбора типа входа
export const ButtonLogin = styled.button `
  width: 310px;
  height: 55px;
  background: #5200FF;
  border: none;
  border-radius: 15px;
  margin: ${props => props.indent ? '40px 0 0 0' : '20px 0 0 0'};

  font-size: 18px;
  font-weight: 600;
  font-family: 'Montserrat', sans-serif;
  color: #FFF;
`

//Поле для ввода логина и пароля
export const InputLogin = styled.input `
  width: 310px;
  height: 55px;
  background: #F4F4F4;
  border-radius: 15px;
  border: none;
  outline: none;
  margin: ${props => props.indent ? '40px 0 0 0' : '20px 0 0 0'};

  padding: 0 0 0 30px;
  color: #303030;
  font-weight: 500;
  font-size: 15px;
`

// Форма для авторизации
export const FormLogin = styled.form `
  text-align: center;
`

// Большой текст на плашке
export const HeaderText = styled.p `
  font-size: 30px;
  font-weight: 700;
  text-align: center;
  margin: 65px 0 0 0;
`

// Маленький текст на плашке
export const Text = styled.p `
  font-size: 20px;
  font-weight: 400;
  text-align: center;
  margin: 8px 0 0 0;
`

// Блок с логотипом
export const NavBar = styled.div `
  margin: 30px 0 0 0;
  display: flex;
  justify-content: space-between;
`