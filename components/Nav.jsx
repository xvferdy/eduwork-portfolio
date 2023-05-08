import React, { useState } from "react";
import Link from "next/link";

// react-icons
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { RiComputerLine } from "react-icons/ri";
import { VscFolderOpened } from "react-icons/vsc";
import { RiMessage2Line } from "react-icons/ri";

function Nav({
  empathizeActive,
  defineActive,
  ideateActive,
  prototypeActive,
  testActive,
}) {
  const [activeNav, setActiveNav] = useState("#");
  const [tooltip, setTooltip] = useState(true);
  const handleActiveNav = (urlFragment) => {
    setActiveNav(urlFragment);
  };

  return (
    // <nav className="nav">
    //   {/* header */}
    //   <a
    //     className={headerActive ? "active" : ""}
    //     href="#empathize"
    //     onMouseEnter={() => setTooltip(!tooltip)}
    //     onMouseLeave={() => setTooltip(!tooltip)}
    //   >
    //     {tooltip ? (
    //       <span className="tooltip tooltip--hide">Empathize</span>
    //     ) : (
    //       <span className="tooltip tooltip--show">Empathize</span>
    //     )}
    //     <AiOutlineHome />
    //   </a>

    //   {/* about */}
    //   <a className={aboutActive ? "active" : ""} href="#define">
    //     <AiOutlineUser />
    //   </a>

    //   {/* experience */}
    //   <a className={experienceActive ? "active" : ""} href="#ideate">
    //     <RiComputerLine />
    //   </a>

    //   {/* portfoliio */}
    //   <a className={portfolioActive ? "active" : ""} href="#prototype">
    //     <VscFolderOpened />
    //   </a>

    //   {/* contact */}
    //   <a className={contactActive ? "active" : ""} href="#test">
    //     <RiMessage2Line />
    //   </a>

    //   {/* <Link className="custom" href="#contact2" passHref>
    //     {tooltip ? (
    //       <p className="tooltip tooltip--hide">tooltip</p>
    //     ) : (
    //       <p className="tooltip tooltip--show">tooltip</p>
    //     )}

    //     <a
    //       className={contactActive ? "active" : ""}
    //       onClick={() => setTooltip(!tooltip)}
    //     >
    //       <RiMessage2Line />
    //     </a>
    //   </Link> */}
    // </nav>

    <nav id="menuBar">
      <ul>
        <li>
          <a
            className={empathizeActive ? "menu menu--active" : "menu"}
            href="#empathize"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              />
            </svg>
            <span>Menu</span>
          </a>
        </li>
        <li>
          <a
            className={defineActive ? "menu menu--active" : "menu"}
            href="#define"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg>
            <span>Dashboard</span>
          </a>
        </li>
        <li>
          <a
            className={ideateActive ? "menu menu--active" : "menu"}
            href="#ideate"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
            </svg>
            <span>Customer</span>
          </a>
        </li>
        <li>
          <a
            className={prototypeActive ? "menu menu--active" : "menu"}
            href="#prototype"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M5 2a2 2 0 00-2 2v14l3.5-2 3.5 2 3.5-2 3.5 2V4a2 2 0 00-2-2H5zm2.5 3a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm6.207.293a1 1 0 00-1.414 0l-6 6a1 1 0 101.414 1.414l6-6a1 1 0 000-1.414zM12.5 10a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"
                clip-rule="evenodd"
              />
            </svg>
            <span>Order</span>
          </a>
        </li>
        <li>
          <a className={testActive ? "menu menu--active" : "menu"} href="#test">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
            </svg>
            <span>Analysis</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
