"use client";
import React from "react";
import Image from "next/image";
import logo from "../../../public/logo.png";
import { RiSearch2Line } from "react-icons/ri";
import { GoHeart } from "react-icons/go";
import { IoBagHandleOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa6";
import { AiOutlineMenu } from "react-icons/ai";

export default function Navbar() {
  return (
    <>
      <nav className="main-nav">
        <div className="container">
          <div className="nav-left">
            <span className="menu-burger">
              <AiOutlineMenu />
            </span>
            <Image src={logo} alt="Company Logo" className="logo" />
          </div>
          <div className="nav-center">
            <h1 className="site-title">LOGO</h1>
          </div>

          <div className="nav-right">
            <div className="icons">
              <a href="#search" aria-label="Search">
                <RiSearch2Line />
              </a>
              <a href="#favorites" aria-label="Favorites">
                <GoHeart />
              </a>
              <a href="#cart" aria-label="Cart">
                <IoBagHandleOutline />
              </a>
              <a className="nav-user" href="#account" aria-label="Account">
                <FaRegUser />
              </a>
            </div>
            <select className="language-selector" name="language" id="language">
              <option value="ENG">ENG</option>
            </select>
          </div>
        </div>

        <div className="nav-bottom">
          <ul className="menu">
            <li>
              <a href="#shop">SHOP</a>
            </li>
            <li>
              <a href="#skills">SKILLS</a>
            </li>
            <li>
              <a href="#stories">STORIES</a>
            </li>
            <li>
              <a href="#about">ABOUT</a>
            </li>
            <li>
              <a href="#contact">CONTACT US</a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="mobile-show">
        <h3>HOME</h3>
        <h3>SHOP</h3>
      </div>
    </>
  );
}
