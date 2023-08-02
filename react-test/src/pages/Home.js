import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
    <div className="home">
      <ul>
        <li>
            <Link to='/home'>home</Link>
        </li>
      </ul>
    </div>
    </>
  )
}
