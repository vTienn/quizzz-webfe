import { Link, NavLink, Outlet } from "react-router-dom";
import "./LayoutDefault.scss";
import { getCookie } from "../../helpers/cookie";
import { useSelector } from "react-redux";
import logo from "./image/4712109.png";
import app from "./image/appstore.png";
import gg from "./image/gg.png";
import {
    SignatureOutlined,
    LogoutOutlined,
    LoginOutlined,
    UserOutlined,
    InstagramOutlined,
    FacebookOutlined,
    TwitterOutlined,
    TwitchOutlined,

} from "@ant-design/icons";

function LayoutDefault() {
    const token = getCookie("token");
    const isLogin = useSelector((state) => state.loginReducer);
    const fullname = getCookie("fullname");

    return ( <
        div className = "layout-default" >
        <
        header className = "header" >
        <
        div className = "container" >
        <
        div className = "layout-default__logo" >
        <
        img src = { logo }
        alt = "Quiz Logo"
        width = "40" / >
        <
        h2 > QuiNo < /h2>{" "} <
        /div>{" "} <
        div className = "Menu" >
        <
        ul > { " " } {
            token && ( <
                >
                <
                li > { " " } <
                NavLink className = "Link-to"
                to = "/home" > { " " }
                Home { " " } <
                /NavLink>{" "} <
                /li>{" "} <
                li > { " " } <
                NavLink className = "Link-to"
                to = "/topic" > { " " }
                Topic { " " } <
                /NavLink>{" "} <
                /li>{" "} <
                li > { " " } <
                NavLink className = "Link-to"
                to = "/answers" > { " " }
                Answers { " " } <
                /NavLink>{" "} <
                /li>{" "} <
                />
            )
        } { " " } <
        /ul>{" "} <
        /div>{" "} <
        div className = "layout-default__accounts" > { " " } {
            token ? ( <
                div className = "box-info" >
                <
                NavLink className = "button-logout"
                to = "/logout" >
                <
                span > { " " } <
                LogoutOutlined / > { " " } <
                /span>
                Log Out { " " } <
                /NavLink>{" "} <
                p className = "user-name" >
                <
                UserOutlined / > { fullname }: dashboard { " " } <
                /p>{" "} <
                /div>
            ) : ( <
                >
                <
                NavLink className = "button-login"
                to = "/login" > { " " } <
                LoginOutlined / >
                Login { " " } <
                /NavLink>{" "} <
                NavLink className = "button-register"
                to = "/register" > { " " } <
                SignatureOutlined / >
                Register { " " } <
                /NavLink>{" "} <
                />
            )
        } { " " } <
        /div>{" "} <
        /div>{" "} <
        /header>{" "} <
        main className = "layout-default__main" >
        <
        Outlet / >
        <
        /main>{" "} <
        footer className = "layout-default__footer" >
        <
        div className = "footer-container" >
        <
        div className = "footer-left-exten" >
        <
        a > Đường dẫn nhanh < /a> <
        a > Giới thiệu chung < /a> <
        a > Tóm Tắt < /a> <
        a > Tiểu sử < /a>

        <
        /div> <
        div className = "footer-right-social" >
        <
        div className = "footer-rigt-detail" >
        <
        a href = "https://www.facebook.com/" > < FacebookOutlined / > < /a> <
        a href = "https://www.instagram.com/" > < InstagramOutlined / > < /a> <
        a href = "https://www.youtube.com/" > < TwitchOutlined / > < /a> <
        div className = "footer-right-img" >
        <
        a > < img src = { app }
        /></a >
        <
        a > < img src = { gg }
        /></a >

        <
        /div> <
        /div> <
        /div> <
        /div> <
        /footer>{" "} <
        /div>
    );
}

export default LayoutDefault;