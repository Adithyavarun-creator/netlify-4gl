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

  return (
    <NavbarContainer>
      <div>
        <Link to="/" className="toLink">
          <li>Home</li>
        </Link>
      </div>
      <div>
        <Link to="/qr-code" className="toLink">
          <li>QrCode Page</li>
        </Link>
      </div>
      <div>
        <select className="langSelect" value={select} onChange={selectedOption}>
          <option className="langOption" id="en" value="en">
            English
          </option>
          <option className="langOption" id="es" value="es">
            Spanish
          </option>
          <option className="langOption" id="de" value="de">
            German
          </option>
          <option className="langOption" id="fr" value="fr">
            French
          </option>
          <option className="langOption" id="it" value="it">
            Italian
          </option>
          <option className="langOption" id="pt" value="pt">
            Portugese
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
