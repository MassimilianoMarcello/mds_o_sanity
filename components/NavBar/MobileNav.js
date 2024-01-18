"use client";
import styled from "styled-components";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Dropdown from "./Dropdown";
import dropdownItems from "./DropItems";
// import "./NavBar.css";
import Button from "./Button";
import barsSolid from "@/public/assets/bars-solid.svg";
import xmarkSolid from "@/public/assets/xmark-solid.svg";

const MobileNav = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);

  };

  return (
    <NavMobile className="nav-mobile">
      <NavFixed className="nav-fixed">
        <li className="nav-logo-mobile">
          <Link href="/">
            <img
              src="/assets/MDS Color Logo.svg"
              alt="mds logo"
              // onClick={handleClick}
            />
          </Link>
        </li>
      </NavFixed>
      <NavMenu className={click ? "nav-menu active" : "nav-menu"}>
        <li className="nav-links nav-link-1">
          <h1>ABOUT MDS</h1>
          <Dropdown items={dropdownItems.about} />
        </li>
        <li className="nav-links">
          <h1 className="title-mobile-menu"> ADMISSIONS</h1>
          <Dropdown items={dropdownItems.admissions} />
        </li>
        <li className="nav-links">
          <h1 className="title-mobile-menu"> IN THE CLASSROOM</h1>
          <Dropdown items={dropdownItems.inTheClassroom} />
        </li>
        <li className="nav-links">
          <h1 className="title-mobile-menu"> PARENT RESOURCES</h1>
          <Dropdown items={dropdownItems.parentResources} />
        </li>
        <li className="nav-links">
          <h1 className="title-mobile-menu"> COMMUNITY RESOURCES</h1>
          <Dropdown items={dropdownItems.communityResources} />
        </li>
        <li className="nav-links">
          {" "}
          <h1 className="title-mobile-menu"> SUPPORTING MDS</h1>
          <Dropdown items={dropdownItems.supportingMDS} />
        </li>
        <li className="menu-icon" onClick={handleClick}>
          {click ? (
            <Image src={barsSolid} alt="Bars Icon" width={40} height={32} />
          ) : (
            <Image src={xmarkSolid} alt="Xmark Icon" width={40} height={30} />
          )}
        </li>
        <Button />
      </NavMenu>
    </NavMobile>
  );
};

export default MobileNav;

const NavMobile = styled.nav`
 
  margin-top: 0;
  .nav-menu.active .nav-links {
    display: none;
  }
  .nav-menu {
    font-weight: bold;
    color: #007bff;
    display: flex;
    flex-direction: column;
    margin-bottom: 2.3rem;

    a {
      text-decoration: none;
      color: var( --color-blue);
      font-size: 1rem;
      margin-left: 0rem;
    }
  }
  .menu-icon {
    position: fixed;
    right: 0;
    margin: 1.5rem 1.5rem;
    font-size: 3rem;
    top: 0;
    list-style-type: none;
    z-index: 10000;
  }
  @media screen and (min-width: 1170px) and (max-width: 15450px) {
    display: none;
  }
`;
const NavFixed = styled.ul`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #fff;
  z-index: 1000;
  height: 80px;
  padding-top: 30px;
  margin-top: 0rem;
  .nav-logo-mobile {
    text-decoration: none;
    list-style-type: none;
    margin-top: -1.5rem;
    margin-left: -1.5rem;
  }
  
`;
const NavMenu = styled.ul`
 /* font-family: var(--euclid-flex); */
  .nav-links-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .nav-links {
    /* font-family: var(--euclid-flex); */
    list-style-type: none;
    padding: 2rem;
    margin-top: -4rem;
    display: block;
    transition: color 0.3s ease;
    text-align: center;
  }
  .nav-links h1 {
    margin-left: -2rem;
  }
  .nav-link-1 {
    margin-top: 4rem;
  }
`;
