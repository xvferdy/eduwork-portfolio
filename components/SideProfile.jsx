import React from "react";
import Image from "next/image";
import { BsTelephone } from "react-icons/bs";
import { MdAlternateEmail } from "react-icons/md";

function SideProfile() {
  return (
    <section className="side-profile">
      <div className="container side-profile__container">
        <div className="side-profile__img">
          <Image
            src="/assets/pp00.png"
            // fill
            // width={1199}
            // height={615}
            width={969}
            height={497}
            // priority
          />
        </div>
        <div className="side-profile__info">
          <div className="side-profile__info-name">
            <h1>Ferdy. 🐳</h1>
          </div>
          <div className="side-profile__info-bio">
            <p> Hello, my name is Berlianto, I was born on June 12, 1996.</p>
            {/* <br /> */}
            <p>
              In this website you will my journey exploring digital technology
              in 2023.
            </p>
            {/* <p>
              In this website you will my journey exploring digital technology
              in 2023.
            </p>
            <p>
              In this website you will my journey exploring digital technology
              in 2023.
            </p>
            <p>
              In this website you will my journey exploring digital technology
              in 2023.
            </p> */}
            {/* <br /> */}
            <p>
              My primary goal is to create something beautiful with cool people.
            </p>
          </div>
          <div className="side-profile__info-phone">
            <p>
              <BsTelephone /> +123456789
            </p>
          </div>
          <div className="side-profile__info-email">
            <p>
              <MdAlternateEmail /> xv.ferdy@gmail.com
            </p>
          </div>
          <div className="side-profile__info-links">
            <Image src="/assets/linkedin-logo2.png" width={24} height={24} />
            <Image src="/assets/bloger-logo.png" width={24} height={24} />
            <Image src="/assets/medium-logo.png" width={24} height={24} />
            <Image src="/assets/fem-logo.png" width={24} height={24} />
            <Image src="/assets/github-logo.png" width={24} height={24} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SideProfile;
