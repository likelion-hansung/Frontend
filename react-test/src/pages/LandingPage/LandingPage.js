import React from 'react'
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div>
      <ul>
        <h1>해야할일</h1>
        <li><Link to="/login">공경진 준비하기</Link></li>
        <li><Link to="/register">해커톤 준비하기</Link></li>
        
      </ul>
    </div>
  )
}

export default LandingPage

