import { Link } from "react-router-dom";

export default function About() {
  return (
    <>
    <div className="about">
      <ul>
        <li>
            <Link to='/about'>link</Link>
        </li>
      </ul>
    </div>
    </>
  )
}
