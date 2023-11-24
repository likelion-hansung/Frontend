import React from 'react'
import { Link } from "react-router-dom";
import gitImage from "../images/github.png";
import insImage from "../images/insta.png";

const Detail = (props) => {
    const detailStyle = {
        background: 'linear-gradient(45deg, #FFF6B7, #F6416C)',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '100vh',
    };

    return (
        <div class="detail" style={detailStyle}>
            <div class="liContainer">
                <li id="li1"><Link to="/">{props.li1}</Link></li>
                <li id="li2"><Link to="/Detail">{props.li2}</Link></li>
                <li id="li3"><Link to="/About">{props.li3}</Link></li>
            </div>

            <div class="contact">
                <div class="github">
                    <a href="https://github.com/sheepyis">
                        <img src={gitImage} alt="github" id="git" />
                    </a>
                    <div class="githubtitle">
                        <p id="title1">{props.gitTitle}</p>
                        <p>{props.gitId}</p>
                    </div>
                </div>
                <div class="insta">
                    <div class="instatitle">
                        <p id="title2">{props.insTitle}</p>
                        <p>{props.insId}</p>
                    </div>
                    <a href="https://www.instagram.com/sheep_is/">
                        <img src={insImage} alt="insta" id="insta" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Detail