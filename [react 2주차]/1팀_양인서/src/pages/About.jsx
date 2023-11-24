import React from 'react'
import { Link } from "react-router-dom";

const About = (props) => {
    const aboutStyle = {
        background: 'linear-gradient(45deg, #43CBFF, #9708CC)',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '100vh',
    };

    return (
        <div class="about" style={aboutStyle}>
            <div class="liContainer">
                <li id="li1"><Link to="/">{props.li1}</Link></li>
                <li id="li2"><Link to="/Detail">{props.li2}</Link></li>
                <li id="li3"><Link to="/About">{props.li3}</Link></li>
            </div>
            <div class="experiencetitle">
                <p>{props.experienceTitle1}</p>
                <p>{props.experienceTitle2}</p>
                <p>{props.experienceTitle3}</p>
                <p>{props.experienceTitle4}</p>
                <p>{props.experienceTitle5}</p>
                <p>{props.experienceTitle6}</p>
                <p>{props.experienceTitle7}</p>
            </div>
        </div>
    )
}

export default About