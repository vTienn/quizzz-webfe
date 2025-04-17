import React from 'react';
import { Carousel } from 'antd';
import anh1 from "./image/download.jpg";
import anh2 from "./image/quizz.jpg";
import anh3 from "./image/quizz2.jpg";
import './home.css'; // đảm bảo đúng đường dẫn

function Home() {
    return ( <
        div className = "carousel-wrapper" >
        <
        Carousel autoplay speed = { 1000 }
        autoplaySpeed = { 2000 } >
        <
        div >
        <
        img src = { anh1 }
        alt = "Slide 1" / >
        <
        /div> <
        div >
        <
        img src = { anh2 }
        alt = "Slide 2" / >
        <
        /div> <
        div >
        <
        img src = { anh3 }
        alt = "Slide 3" / >
        <
        /div> < /
        Carousel > <
        /div>
    );
}

export default Home;