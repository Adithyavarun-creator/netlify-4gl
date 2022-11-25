import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { NavbarContainer, MobileNavbar } from "../styles/NavbarStyles";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [toggle, setToggle] = useState(false);
  const [select, setSelect] = useState("en");

  const selectedOption = (e) => {
    const selected = e.target.value;
    const translated = i18n.changeLanguage(selected);
    setSelect(translated.value);
  };

  return (
    <>
      <NavbarContainer>
        <div>
          <Link to="/" className="toLink">
            <li>{t("home")}</li>
          </Link>
        </div>
        <div>
          <Link to="/qr-code" className="toLink">
            <li>{t("qrcode")}</li>
          </Link>
        </div>
        <div>
          <select
            className="langSelect"
            value={select}
            onChange={selectedOption}
          >
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

      <MobileNavbar>
        <div className="menuBox">
          {toggle ? (
            <span>
              <MdClose className="menuIcon" onClick={() => setToggle(false)} />
            </span>
          ) : (
            <span>
              <GiHamburgerMenu
                className="menuIcon"
                onClick={() => setToggle(true)}
              />
            </span>
          )}
        </div>
        {toggle && (
          <div className="mobileNavbox">
            <div>
              <Link to="/" className="toLink">
                <span className="linkName">{t("home")}</span>
              </Link>
            </div>

            <div>
              <Link to="/qr-code" className="toLink">
                <span className="linkName">{t("qrcode")}</span>
              </Link>
            </div>
            <div>
              <select
                className="langSelect"
                value={select}
                onChange={selectedOption}
              >
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
          </div>
        )}
      </MobileNavbar>
    </>
  );
};

export default Navbar;
