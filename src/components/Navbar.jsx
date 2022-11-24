import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { NavbarContainer } from "../styles/NavbarStyles";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [select, setSelect] = useState("en");

  const selectedOption = (e) => {
    const selected = e.target.value;
    return i18n.changeLanguage(selected);
  };

  // const handleChangeLanguage = (lng) => {
  //   return i18n.changeLanguage(lng);
  //   localStorage.setItem("lng", lng);
  // };

  return (
    <NavbarContainer>
      <div>
        <Link to="/qr-code">
          <li>Home</li>
        </Link>
      </div>
      <div>
        <Link to="/qr-code">
          <li>QrCode Page</li>
        </Link>
      </div>
      <div>
        <select className="langSelect" value={select} onChange={selectedOption}>
          <option className="langOption" id="en" value="en">
            EN - English
          </option>
          <option className="langOption" id="es" value="es">
            ES - Spanish
          </option>
        </select>
      </div>
    </NavbarContainer>
  );
};

export default Navbar;

/**
 <div className="languageBtn">
          <button
            className="lngButton"
            onClick={() => handleChangeLanguage("en")}
          >
            EN
          </button>
          <button
            className="lngButton"
            onClick={() => handleChangeLanguage("es")}
          >
            ES
          </button>
        </div>
 */
