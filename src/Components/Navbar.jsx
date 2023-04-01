
import React from "react";
import mobile from "../responsive";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = ()=>{
    const navigate = useNavigate();
    const handelclick = ()=>{
        navigate("/register");
    }
    const handelcl = ()=>{
        navigate("/login");
    }

    return <div className="container">
        <div className="wrapper">
            <div className="left">
                <div className="lan">EN</div>
                <div className="input">
                    <input type="text" placeholder="Language"></input>
                    <i class=" im fa-solid fa-magnifying-glass"></i>
                </div>
            </div>
            <div className="center">
                <h1 className="heading">ॐ</h1>
            </div>

            <div className="right">
            <Link to="/cart">
            <i  class="shop fa-solid fa-cart-shopping"></i></Link>
                <div className="register" onClick={handelclick}>Register</div>
                <div className="login" onClick={handelcl}>Login</div>
            </div>
        </div>
    </div>
}
export default Navbar;