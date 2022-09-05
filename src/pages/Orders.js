import React from "react";
import {Link} from "react-router-dom";

import { NavBar, Logo } from "../styles/StyleLogin";
import {ButtonCabinet} from "../styles/StyleOrders";


class Orders extends React.Component {
    render() {
        return (
            <div style={{fontFamily: "'Montserrat', sans-serif"}}>
                <NavBar>
                    <Link to={'/'} style={{ textDecoration: 'none' }}><Logo>easy cafe</Logo></Link>
                    <Link to={'/personal-cabinet'}><ButtonCabinet>Личный кабинет</ButtonCabinet></Link>
                </NavBar>

                <div style={{marginTop: "170px"}}>
                </div>
            </div>
        );
    }
}

export default Orders;