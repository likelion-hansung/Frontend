import React from 'react'
import { Link } from "react-router-dom";

function About() {
    const aboutStyle = {
        background: 'linear-gradient(45deg, #43CBFF, #9708CC)',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '100vh',
    };

    return (
        <div class="about" style={aboutStyle}>
            <div class="liContainer">
                <li id="li1"><Link to="/">Home</Link></li>
                <li id="li2"><Link to="/Detail">Detail</Link></li>
                <li id="li3"><Link to="/About">About</Link></li>
            </div>
            <div class="experiencetitle">
                <p>[2021.11.01 ~ 2021.12.30] 제2회 상상독서 청년제안프로젝트</p>
                <p>[2021.12.20 ~ 2022.01.11] 문제해결을 위한 코딩 첫걸음 프로그램 자율 공모전</p>
                <p>[2022.09.07 ~ 2022.12.16] 멋쟁이사자처럼X넥슨 Maple Story World</p>
                <p>[2022.09.14 ~ 2022.09.14] 멋쟁이사자처럼X컴퓨터공학부 웹개발 해커톤</p>
                <p>[2022.11.14 ~ 2023.01.18] 제3회 상상독서 청년제안프로젝트</p>
                <p>[2023.01.09 ~ 2023.01.12] 2022 컴퓨터공학부 동계 프로그래밍 캠프</p>
                <p>[2023.06.23 ~ 2023.07.14] 멋쟁이사자처럼 교내 부기톤</p>
            </div>
        </div>
    )
}

export default About
