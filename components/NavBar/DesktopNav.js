"use client";
import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/link";
// import "./NavBar.css";
import Dropdown from "./Dropdown";
import dropdownItems from "./DropItems";
import Button from "./Button";

const DesktopNav = () => {
  const [click, setClick] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleClick = () => {
    setClick(!click);
    setOpenDropdown(null);
  };

  const handleDropdownEnter = (dropdownName) => {
    setOpenDropdown(dropdownName);
  };

  const handleDropdownLeave = () => {
    setOpenDropdown(null);
  };
  return (
    <NavDesktop className="nav-desktop">
      <NavMenu className="nav-menu">
        <li className="nav-logo-desktop">
          <Link href="/">
            <img
              src="/assets/MDS Color Logo.svg"
              alt="mds logo"
              // onClick={handleClick}
            />
          </Link>
        </li>
        <li
          className={`nav-links ${openDropdown === "about" && "active"}`}
          onMouseEnter={() => handleDropdownEnter("about")}
          onMouseLeave={handleDropdownLeave}
        >
          <Link href="#">ABOUT MDS</Link>
          {openDropdown === "about" && <Dropdown items={dropdownItems.about} />}
        </li>
        <li
          className={`nav-links ${openDropdown === "admissions" && "active"}`}
          onMouseEnter={() => handleDropdownEnter("admissions")}
          onMouseLeave={handleDropdownLeave}
        >
          <Link href="#">ADMISSIONS</Link>
          {openDropdown === "admissions" && (
            <Dropdown items={dropdownItems.admissions} />
          )}
        </li>

        <li
          className={`nav-links ${
            openDropdown === "inTheClassroom" && "active"
          }`}
          onMouseEnter={() => handleDropdownEnter("inTheClassroom")}
          onMouseLeave={handleDropdownLeave}
        >
          <Link href="#">IN THE CLASSROOM</Link>
          {openDropdown === "inTheClassroom" && (
            <Dropdown items={dropdownItems.inTheClassroom} />
          )}
        </li>
        <li
          className={`nav-links ${
            openDropdown === "parentResources" && "active"
          }`}
          onMouseEnter={() => handleDropdownEnter("parentResources")}
          onMouseLeave={handleDropdownLeave}
        >
          <Link href="#">PARENT RESOURCES</Link>
          {openDropdown === "parentResources" && (
            <Dropdown items={dropdownItems.parentResources} />
          )}
        </li>
        <li
          className={`nav-links ${
            openDropdown === "communityResources" && "active"
          }`}
          onMouseEnter={() => handleDropdownEnter("communityResources")}
          onMouseLeave={handleDropdownLeave}
        >
          <Link href="#">COMMUNITY RESOURCES</Link>
          {openDropdown === "communityResources" && (
            <Dropdown items={dropdownItems.communityResources} />
          )}
        </li>
        <li
          className={`nav-links ${
            openDropdown === "supportingMDS" && "active"
          }`}
          onMouseEnter={() => handleDropdownEnter("supportingMDS")}
          onMouseLeave={handleDropdownLeave}
        >
          <Link href="#">SUPPORTING MDS</Link>
          {openDropdown === "supportingMDS" && (
            <Dropdown items={dropdownItems.supportingMDS} />
          )}
        </li>

        <Button />
      </NavMenu>
    </NavDesktop>
  );
};

export default DesktopNav;

const NavDesktop = styled.nav`
  @media screen and (max-width: 1170px) {
    display: none;
  }
  @media screen and (min-width: 1170px) and (max-width: 1450px) {
    position: fixed;
    width: 100%;
    top: 0;
    background-color: aqua;
    z-index: 1000;
    background-color: #fff;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  /* ======= */
  display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: center;
   
    background-color: #fff;
    top: 0;
    margin: 0;
    padding: 0;
    height: 80px;
}
@media screen and (min-width: 1451px) {
    
}

`;

const NavMenu = styled.ul`
  @media screen and (min-width: 1170px) and (max-width: 1450px) {
    font-family: var(--euclid-flex);
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
    height: 80px;
    margin-bottom: 0rem;

    & a {
      text-decoration: none;
      color: #1b61d8;
      padding: 10px 10px ;
      display: block;
      font-size: 1rem;
      transition: color 0.3s ease;
    }
    .nav-links {
    list-style-type: none;
    display: inline-block;
    margin-right: 1rem;
    margin-top: 0;
    padding: 0;
  }
  .nav-logo-desktop {

margin-left: 1rem ;
text-decoration: none;
list-style: none;

}
  }
`;

