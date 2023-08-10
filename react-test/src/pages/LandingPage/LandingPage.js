import React from 'react'
import { Link } from 'react-router-dom';

function LandingPage(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <ul>
        {props.tasks.map((task, index) => (
          <li key={index}><Link to={task.path}>{task.name}</Link></li>
        ))}
      </ul>
    </div>
  );
}



export default LandingPage

