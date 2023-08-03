import React from 'react'
import { Link } from 'react-router-dom';

function LoginPage() {
    return (
        <div>
          <ul>
            <h1><Link to="/">되돌아가기</Link></h1>
            <h2>1. 추출한 글 번역</h2>
            <li>언어 감지는 papago API 사용</li>
            <li>언어 번역 오픈소스</li>
            <h2>2. 글 요약</h2>
            <li>NLP</li>
            <li>사용자가 원하는 만큼 요약</li>
            <h2>3. 영상데이터 음성데이터 구현</h2>
            <li>youtube에서 영상만 추출</li>
          </ul>
        </div>
      )
}

export default LoginPage
