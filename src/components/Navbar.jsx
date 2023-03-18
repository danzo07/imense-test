import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { IoMdNotificationsOutline, IoMdSettings } from "react-icons/io";
import { MdPolicy } from "react-icons/md";
import { RiLogoutBoxRFill } from "react-icons/ri";
import { FiMenu } from "react-icons/fi";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

function Navbar() {
  //user menu state
  const [showMenu, setShowMenu] = useState(false);
  const handleUserClick = () => {
    setShowMenu(!showMenu);
  };
    const [showMenumobile, setShowMenumobile] = useState(false);
    const handleUserClickmobile = () => {
      setShowMenumobile(!showMenumobile);
    };

  // lang object
  const options = [
    { label: "English", value: "1", imageSrc: "./english.svg" },
    { label: "Frensh", value: "2", imageSrc: "./france.svg" },
    { label: "Nederlands", value: "3", imageSrc: "./nederlands.svg" },
    { label: "Spain", value: "4", imageSrc: "./spain.svg" },
    { label: "Germany", value: "5", imageSrc: "./germany.svg" },
  ];
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };
  //lang menu state
  const [showLang, setShowLang] = useState(false);
  const handleLangClick = () => {
    setShowLang(!showLang);
  };

  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <NavLink to={"/"}>
            <img src="/logo.svg" alt="logo" />
          </NavLink>
        </div>
        <div className="search-bar">
          <div className="search-icon">
            <FiSearch />
          </div>
          <input
            type="search"
            className="search-input"
            placeholder="Quick search"
          />
        </div>
        <ul className="nav-bar">
          <li className="nav--links">
            <NavLink to={"/Dashboard"}>Dashboard</NavLink>
          </li>

          <li className="nav--links">
            <NavLink to={"/"}>Trainings</NavLink>
          </li>

          <li className="nav--links">
            <NavLink to={"/Users"}>Users</NavLink>
          </li>

          <li className="nav--links">
            <NavLink to={"/More"}>More</NavLink>
          </li>
        </ul>
        <div className="right-nav">
          <div className="notification">
            <IoMdNotificationsOutline />
          </div>
          <div className="lang">
            <div className="dropdown__selected" onClick={handleLangClick}>
              <img src={selectedOption.imageSrc} alt={selectedOption.label} />
              {showLang && (
                <motion.div
                  className="dropdown__options"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {options.map((option) => (
                    <li
                      key={option.value}
                      className={`dropdown__option ${
                        option.value === selectedOption.value ? "selected" : ""
                      }`}
                      onClick={() => handleOptionClick(option)}
                    >
                      <img src={option.imageSrc} alt={option.label} />
                      <span>{option.label}</span>
                    </li>
                  ))}
                </motion.div>
              )}
            </div>
          </div>
          <div className="user" onClick={handleUserClick}>
            {showMenu && (
              <motion.div
                className="user-dropdown"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
              >
                <ul className="dropdown-list">
                  <li className="dl_1">
                    <p>BESIX Group</p>
                    <p>besix.group@besix.be</p>
                  </li>
                  <li className="dl_2">
                    <IoMdSettings />
                    <p>Profile settings</p>
                  </li>
                  <li className="dl_3">
                    <MdPolicy />
                    <p>Our policies</p>
                  </li>
                  <li className="dl_4">
                    <RiLogoutBoxRFill />
                    <p>Lougout</p>
                  </li>
                </ul>
              </motion.div>
            )}
            <div className="user-image">
              <img src="/profile.svg" alt="user-image" />
            </div>
            <div className="user-info">
              <p className="user-name">Blaise Defloo</p>
              <p className="user-role">Administrator</p>
            </div>
          </div>
        </div>
        <div className="menu-mobile" onClick={handleUserClickmobile}>
          <FiMenu />
          {showMenumobile && (
            <motion.div
              className="user-dropdown-mobile"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
            >
              <ul className="dropdown-list-mobile">
                <li className="dl_1">
                  <p>Dashboard</p>
                </li>
                <li className="dl_2">
                  <p>Profile settings</p>
                </li>
                <li className="dl_3">
                  <p>Our policies</p>
                </li>
                <li className="dl_4">
                  <p>Lougout</p>
                </li>
              </ul>
            </motion.div>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
