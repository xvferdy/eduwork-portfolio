import React, { useState } from "react";
import Link from "next/link";

// react-icons
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { RiComputerLine } from "react-icons/ri";
import { VscFolderOpened } from "react-icons/vsc";
import { RiMessage2Line } from "react-icons/ri";

function Nav({
  introActive,
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
            className={introActive ? "menu menu--active" : "menu"}
            href="#intro"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              fill="currentColor"
            >
              <path d="M96 0C43 0 0 43 0 96V416c0 53 43 96 96 96H384h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V384c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32H384 96zm0 384H352v64H96c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16zm16 48H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16s7.2-16 16-16z" />
            </svg>
            <span>Brief</span>
          </a>
        </li>
        <li>
          <a
            className={empathizeActive ? "menu menu--active" : "menu"}
            href="#empathize"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              fill="currentColor"
            >
              <path d="M32 0C49.7 0 64 14.3 64 32V48l69-17.2c38.1-9.5 78.3-5.1 113.5 12.5c46.3 23.2 100.8 23.2 147.1 0l9.6-4.8C423.8 28.1 448 43.1 448 66.1V345.8c0 13.3-8.3 25.3-20.8 30l-34.7 13c-46.2 17.3-97.6 14.6-141.7-7.4c-37.9-19-81.3-23.7-122.5-13.4L64 384v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V400 334 64 32C0 14.3 14.3 0 32 0zM64 187.1l64-13.9v65.5L64 252.6V318l48.8-12.2c5.1-1.3 10.1-2.4 15.2-3.3V238.7l38.9-8.4c8.3-1.8 16.7-2.5 25.1-2.1l0-64c13.6 .4 27.2 2.6 40.4 6.4l23.6 6.9v66.7l-41.7-12.3c-7.3-2.1-14.8-3.4-22.3-3.8v71.4c21.8 1.9 43.3 6.7 64 14.4V244.2l22.7 6.7c13.5 4 27.3 6.4 41.3 7.4V194c-7.8-.8-15.6-2.3-23.2-4.5l-40.8-12v-62c-13-3.8-25.8-8.8-38.2-15c-8.2-4.1-16.9-7-25.8-8.8v72.4c-13-.4-26 .8-38.7 3.6L128 173.2V98L64 114v73.1zM320 335.7c16.8 1.5 33.9-.7 50-6.8l14-5.2V251.9l-7.9 1.8c-18.4 4.3-37.3 5.7-56.1 4.5v77.4zm64-149.4V115.4c-20.9 6.1-42.4 9.1-64 9.1V194c13.9 1.4 28 .5 41.7-2.6l22.3-5.2z" />
            </svg>
            <span>Discover</span>
          </a>
        </li>
        <li>
          <a
            className={defineActive ? "menu menu--active" : "menu"}
            href="#define"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              fill="currentColor"
            >
              <path d="M448 256A192 192 0 1 0 64 256a192 192 0 1 0 384 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 80a80 80 0 1 0 0-160 80 80 0 1 0 0 160zm0-224a144 144 0 1 1 0 288 144 144 0 1 1 0-288zM224 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
            </svg>
            <span>Define</span>
          </a>
        </li>
        <li>
          <a
            className={ideateActive ? "menu menu--active" : "menu"}
            href="#ideate"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              fill="currentColor"
            >
              <path d="M0 224.2C0 100.6 100.2 0 224 0h24c95.2 0 181.2 69.3 197.3 160.2c2.3 13 6.8 25.7 15.1 36l42 52.6c6.2 7.8 9.6 17.4 9.6 27.4c0 24.2-19.6 43.8-43.8 43.8H448v64c0 35.3-28.7 64-64 64H320v32c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V407.3c0-16.7-6.9-32.5-17.1-45.8C16.6 322.4 0 274.1 0 224.2zM224 64c-8.8 0-16 7.2-16 16c0 33-39.9 49.5-63.2 26.2c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6C145.5 152.1 129 192 96 192c-8.8 0-16 7.2-16 16s7.2 16 16 16c33 0 49.5 39.9 26.2 63.2c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0C168.1 286.5 208 303 208 336c0 8.8 7.2 16 16 16s16-7.2 16-16c0-33 39.9-49.5 63.2-26.2c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6C302.5 263.9 319 224 352 224c8.8 0 16-7.2 16-16s-7.2-16-16-16c-33 0-49.5-39.9-26.2-63.2c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0C279.9 129.5 240 113 240 80c0-8.8-7.2-16-16-16zm-24 96a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm40 80a16 16 0 1 1 32 0 16 16 0 1 1 -32 0z" />
            </svg>
            <span>Ideate</span>
          </a>
        </li>
        <li>
          <a
            className={prototypeActive ? "menu menu--active" : "menu"}
            href="#prototype"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              fill="currentColor"
            >
              <path d="M512 256c0 .9 0 1.8 0 2.7c-.4 36.5-33.6 61.3-70.1 61.3H344c-26.5 0-48 21.5-48 48c0 3.4 .4 6.7 1 9.9c2.1 10.2 6.5 20 10.8 29.9c6.1 13.8 12.1 27.5 12.1 42c0 31.8-21.6 60.7-53.4 62c-3.5 .1-7 .2-10.6 .2C114.6 512 0 397.4 0 256S114.6 0 256 0S512 114.6 512 256zM128 288a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm0-96a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM288 96a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm96 96a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" />
            </svg>
            <span>Design</span>
          </a>
        </li>
        <li>
          <a className={testActive ? "menu menu--active" : "menu"} href="#test">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
              fill="currentColor"
            >
              <path d="M192 0c-41.8 0-77.4 26.7-90.5 64H64C28.7 64 0 92.7 0 128V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H282.5C269.4 26.7 233.8 0 192 0zm0 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM305 273L177 401c-9.4 9.4-24.6 9.4-33.9 0L79 337c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L271 239c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
            </svg>
            <span>Test</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;