import React from "react";
import {Link} from "react-router-dom";

import { NavBar, Logo } from "../styles/StyleLogin";
import {ButtonCabinet, OrderSquare, OrderNumber, ProductsList, NameClient, ButtonReady} from "../styles/StyleOrders";


class Orders extends React.Component {
    render() {
        return (
            <div style={{fontFamily: "'Montserrat', sans-serif"}}>
                <NavBar>
                    <Link to={'/'} style={{ textDecoration: 'none' }}><Logo>easy cafe</Logo></Link>
                    <Link to={'/personal-cabinet'}><ButtonCabinet>Личный кабинет</ButtonCabinet></Link>
                </NavBar>

                <div style={{margin: "50px 0 0 0"}}>
                    <div style={{display: "flex", justifyContent: "space-evenly", background: "#5200FF", width: "282px", height: "62px", alignItems: "center", borderRadius: "8px"}}>
                        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="11" width="4" height="26" rx="2" fill="white"/>
                            <rect y="15" width="4" height="26" rx="2" transform="rotate(-90 0 15)" fill="white"/>
                        </svg>
                        <p style={{margin: "0", fontSize: "20px", fontWeight: "700", color: "#FFF"}}>СОЗДАТЬ ЗАКАЗ</p>
                    </div>
                </div>

                <div style={{margin: "40px 0 0 0"}}>
                    <p style={{fontWeight: "600", fontSize: "22px", margin: "0"}}>В процессе</p>
                </div>

                <div style={{marginTop: "5px", display: "flex", justifyContent: "space-between", flexWrap: "wrap"}}>
                    <OrderSquare>
                        <OrderNumber>Заказ №1</OrderNumber>
                        <ProductsList type="disc">
                            <li>Айс Латте 300мл</li>
                            <li>Круасан с бананом и шоколадом</li>
                            <li>Вода 300мл</li>
                        </ProductsList>

                        <div style={{paddingTop: "12px"}}>
                            <NameClient>Имя:⠀<p1 style={{fontWeight: "400", fontSize: "20px"}}>Кристина</p1></NameClient>
                            <NameClient>Стоимость:⠀<p1 style={{fontWeight: "400", fontSize: "20px"}}>560 рублей</p1></NameClient>
                        </div>

                        <div style={{textAlign: "center"}}><ButtonReady>Готово</ButtonReady></div>
                    </OrderSquare>

                    <OrderSquare></OrderSquare>
                </div>
            </div>
        );
    }
}

export default Orders;