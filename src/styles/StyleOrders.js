import styled from 'styled-components';

//Кнопка для выбора типа входа
export const ButtonCabinet = styled.button `
  width: 176px;
  height: 42px;
  background: #5200FF;
  border: none;
  border-radius: 8px;

  font-size: 15px;
  font-weight: 600;
  font-family: 'Montserrat', sans-serif;
  color: #FFF;
`

// Плашка для заказа
export const OrderSquare = styled.div `
  width: 460px;
  background: #F4F4F4;
  border-radius: 10px;
  margin: 20px 0 0 0;
  padding-bottom: 27px;
`

// Текст номера заказа
export const OrderNumber = styled.p `
  font-weight: 600;
  font-size: 22px;
  margin: 27px 0 0 27px;
`

// Перечисление товаров
export const ProductsList = styled.ul `
  font-weight: 400;
  font-size: 21px;
  margin: 18px 0 0 17px;
`

// Имя клиента
export const NameClient = styled.p `
  font-weight: 600;
  font-size: 21px;
  margin: 7px 0 0 27px;
`

// кнопка готово на доске заказов
export const ButtonReady = styled.button `
  width: 406px;
  height: 50px;
  border: none;
  background: #5200FF;
  border-radius: 8px;
  margin: 25px 0 0 0;

  font-weight: 600;
  font-size: 18px;
  color: #FFFFFF;
  font-family: 'Montserrat', sans-serif;
`