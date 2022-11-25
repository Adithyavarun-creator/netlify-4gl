import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { NavbarContainer, MobileNavbar } from "../styles/NavbarStyles";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [toggle, setToggle] = useState(false);
  const [select, setSelect] = useState("");
  const [name, setName] = useState("");

  const selectedOption = (e) => {
    console.log(e.target.value);
    const selected = i18n.changeLanguage(e.target.value);
    setSelect(selected);
    setToggle(false);
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
            value={select.name}
            onChange={selectedOption}
          >
            <option className="langOption" id="English" value="en">
              English
            </option>
            <option className="langOption" id="Spainsh" value="es">
              Spanish
            </option>
            <option className="langOption" id="German" value="de">
              German
            </option>
            <option className="langOption" id="French" value="fr">
              French
            </option>
            <option className="langOption" id="Italian" value="it">
              Italian
            </option>
            <option className="langOption" id="Portugese" value="pt">
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
                <span className="linkName" onClick={() => setToggle(false)}>
                  {t("home")}
                </span>
              </Link>
            </div>

            <div>
              <Link to="/qr-code" className="toLink">
                <span className="linkName" onClick={() => setToggle(false)}>
                  {t("qrcode")}
                </span>
              </Link>
            </div>
            <div>
              <select
                className="langSelect"
                value={select.name}
                onChange={selectedOption}
              >
                <option className="langOption" id="English" value="en">
                  English
                </option>
                <option className="langOption" id="Spainsh" value="es">
                  Spanish
                </option>
                <option className="langOption" id="German" value="de">
                  German
                </option>
                <option className="langOption" id="French" value="fr">
                  French
                </option>
                <option className="langOption" id="Italian" value="it">
                  Italian
                </option>
                <option className="langOption" id="Portugese" value="pt">
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
