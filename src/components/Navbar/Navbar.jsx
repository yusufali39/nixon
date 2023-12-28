import "./Navbar.css";
import { Link } from "react-router-dom";
import DarkMode from "../DarkMode/DarkMode";
import React, {useState} from "react";


export default function Navbar() {
    const [isMenuActive, setMenuActive] = useState(false);
    const [h1Opacity, setH1Opacity] = useState(1);
  
    const handleMenuClick = () => {
      setMenuActive(!isMenuActive);
      setH1Opacity(h1Opacity === 0.1 ? 1 : 0.1);
    };
  return (
    <>
      <div className="header header_bx">
        <nav className="nav">
          <Link className="logo" to="/">
            nixon
          </Link>
          <div className="menu_hum">
            <DarkMode />

            <ul id="menu">
              <li>
              <Link  to="/Faqs">FAQs</Link>
              </li>
              <li>
              <Link  to="/About">About</Link>

              </li>
              <li>
              <Link  to="/Extras">Extras</Link>

              </li>
              <li>
              <Link  to="/Contact">Contact</Link>
              </li>
            </ul>
            <div className="menu-btn" onClick={handleMenuClick}>
              {/* Bootstrap "bars" and "x" icons */}
              <i className={`bi ${isMenuActive ? 'bi-x' : 'bi-list'} bi-2x`}></i>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
