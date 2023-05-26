import React from "react";
import { FiFigma } from "react-icons/fi";
import { HiPresentationChartLine } from "react-icons/hi";
import { GiLightBulb, GiArcheryTarget } from "react-icons/gi";
import { MdTask, MdEmojiPeople } from "react-icons/md";

function Nav({
  introActive,
  empathizeActive,
  defineActive,
  ideateActive,
  prototypeActive,
  testActive,
}) {
  return (
    <nav id="menuBar">
      <ul>
        <li>
          <a
            aria-label="Brief"
            className={introActive ? "home menu menu--active" : "home menu"}
            href="#intro"
          >
            <HiPresentationChartLine />
            <span>Brief</span>
          </a>
        </li>
        <li>
          <a
            aria-label="Discover"
            className={empathizeActive ? "menu menu--active" : "menu"}
            href="#empathize"
          >
            <MdEmojiPeople />
            <span>Discover</span>
          </a>
        </li>
        <li>
          <a
            aria-label="Define"
            className={defineActive ? "menu menu--active" : "menu"}
            href="#define"
          >
            <GiArcheryTarget />
            <span>Define</span>
          </a>
        </li>
        <li>
          <a
            aria-label="Ideate"
            className={ideateActive ? "menu menu--active" : "menu"}
            href="#ideate"
          >
            <GiLightBulb />
            <span>Ideate</span>
          </a>
        </li>
        <li>
          <a
            aria-label="Design"
            className={prototypeActive ? "menu menu--active" : "menu"}
            href="#prototype"
          >
            <FiFigma />
            <span>Design</span>
          </a>
        </li>
        <li>
          <a
            aria-label="Validate"
            className={testActive ? "menu menu--active" : "menu"}
            href="#validate"
          >
            <MdTask />
            <span>Validate</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
