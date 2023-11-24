import React from 'react'
import { Link } from "react-router-dom";
import Image from "../images/home.jpg";

const Home = (props) => {
    const homeStyle = {
        background: 'linear-gradient(45deg, #F97794, #623AA2)',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '100vh',
    };

    return (
        <div class="home" style={homeStyle}>
            <div class="liContainer">
                <li id="li1"><Link to="/">{props.li1}</Link></li>
                <li id="li2"><Link to="/Detail">{props.li2}</Link></li>
                <li id="li3"><Link to="/About">{props.li3}</Link></li>
            </div>
            <img src={Image} alt="home" />
            <p>{props.bottomTitle}</p>
        </div>
    )
}

export default Home