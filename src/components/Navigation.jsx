// Modules
import { Link } from "react-router-dom";

// Styles
import "./Navigation.css"
import { LogoB } from "./svg";

// Assets

import Logo from "./svg/LogoA";

export default function Navigation ({ invert }) {
  return (
    <nav className={invert ? "invert" : "" }>
      <Link to="/">
        <div className="logo">
          <LogoB style={{ width: "50px" }} />
          <div>
            <p>MeanTime</p>
            <p>Management</p>
          </div>
        </div>
      </Link>
      <div>
        <ul>
          <li>
            <Link to="/about">
              About
            </Link>
          </li>
          {/* <li>
            <Link to="/timeline" className="active">
              TimeLine 0.1
            </Link>
          </li> */}
        </ul>
      </div>
    </nav>
  )
}