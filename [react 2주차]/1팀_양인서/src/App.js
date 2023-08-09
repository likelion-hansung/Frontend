import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import About from "./pages/About";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home li1="Home" li2="Detail" li3="About" bottomTitle="sheepyis_React" />} />
      <Route path="/detail" element={<Detail li1="Home" li2="Detail" li3="About" gitTitle="Github" gitId="sheepyis" insTitle="Instagram" insId="sheep_is" />} />
      <Route path="/about" element={<About li1="Home" li2="Detail" li3="About"
        experienceTitle1="[2021.11.01 ~ 2021.12.30] 제2회 상상독서 청년제안프로젝트"
        experienceTitle2="[2021.12.20 ~ 2022.01.11] 문제해결을 위한 코딩 첫걸음 프로그램 자율 공모전"
        experienceTitle3="[2022.09.07 ~ 2022.12.16] 멋쟁이사자처럼X넥슨 Maple Story World"
        experienceTitle4="[2022.09.14 ~ 2022.09.14] 멋쟁이사자처럼X컴퓨터공학부 웹개발 해커톤"
        experienceTitle5="[2022.11.14 ~ 2023.01.18] 제3회 상상독서 청년제안프로젝트"
        experienceTitle6="[2023.01.09 ~ 2023.01.12] 2022 컴퓨터공학부 동계 프로그래밍 캠프"
        experienceTitle7="[2023.06.23 ~ 2023.07.14] 멋쟁이사자처럼 교내 부기톤"
      />} />
    </Routes>
  );
}

export default App;
