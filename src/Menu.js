import React, { useState } from "react";
import "./Menu.css";
import { Link } from "react-router-dom";
import useOnclickOutside from "react-cool-onclickoutside";

const countries = {
  Sweden: ["Stockholm", "Gävle", "Uppsala"],
  USA: ["New York", "Boston", "Washington"],
  Russia: ["Moscow", "Samara", "Kazan"],
};

function Menu() {
  const [currentCountry, setCurrentCountry] = useState("");
  const [showNav, setShowNav] = useState(false)
  const menuRef = useOnclickOutside(() => setShowNav(false))

  return (
    <>
      <div
        className='Menu-menu'
        onClick={() => setShowNav(!showNav)}
      >Menu</div>
      {showNav ?
        <nav className='Menu-nav' ref = {menuRef}>
          <Link className='Menu-link' to='/'>Home</Link>
          <Link className='Menu-link' to='/search'>Search</Link>
          <Link className='Menu-link' to='/albums'>Albums</Link>
          <Link className='Menu-link' to='/to-do'>To-do</Link>
        </nav> : null
      }

      <div className="Menu">
        {Object.entries(countries).map(([country, cities]) => (
          <div
            className="Country"
            onMouseEnter={() => setCurrentCountry(country)}
            onMouseLeave={() => setCurrentCountry("")}
          >
            <div className={currentCountry === country ? "selected_country" : ""}>
              {country}
            </div>
            <div
              className={currentCountry === country ? "cities" : "cities_hidden"}
            >
              {cities.map((city) => (
                <div className="city">{city}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
 
export default Menu

