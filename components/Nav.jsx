import React, { useState } from "react";
import Link from "next/link";

// react-icons
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { RiComputerLine } from "react-icons/ri";
import { VscFolderOpened } from "react-icons/vsc";
import { RiMessage2Line } from "react-icons/ri";

function Nav({
  headerActive,
  aboutActive,
  experienceActive,
  portfolioActive,
  contactActive,
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
          <a href="#empathize">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
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
          <a href="#define">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg>
            <span>Dashboard</span>
          </a>
        </li>
        <li>
          <a href="#ideate">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
            </svg>
            <span>Customer</span>
          </a>
        </li>
        <li>
          <a href="#prototype">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
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
          <a href="#test">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
            </svg>
            <span>Analysis</span>
          </a>
        </li>
        <li>
          <a href="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z"
                clip-rule="evenodd"
              />
            </svg>
            <span>Support</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
