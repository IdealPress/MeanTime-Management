// Modules
import { Link } from "react-router-dom";

// Styles
import "./Navigation.css"

// Assets
import logo from "../assets/Logo2.svg"

export default function Navigation () {
  return (
    <nav>
      <div className="logo">
        <img src={logo} style={{width: "50px"}} />
        <div>
          <p>MeanTime</p>
          <p>Management</p>
        </div>
      </div>
      <div>
        <ul>
          <li>
            <Link to="/">
              Home
            </Link>
          </li>
          <li>
            <Link to="/timeline" className="active">
              TimeLine 0.1
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}