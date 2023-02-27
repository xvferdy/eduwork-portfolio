import React from "react";
import Image from "next/image";
import { BsTelephone } from "react-icons/bs";
import { MdAlternateEmail } from "react-icons/md";
import Link from "next/link";

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
              In this website you will find my journey exploring digital
              technology in 2023.
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
            <p>So grateful to be sharing my world with you.</p>
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
            <Link href="https://www.google.com/" title="Linkedin">
              <Image src="/assets/linkedin-logo2.png" width={24} height={24} />
            </Link>
            <Link
              href="https://www.blogger.com/profile/16732934081090438699"
              title="Blogspot"
            >
              <Image src="/assets/bloger-logo.png" width={24} height={24} />
            </Link>
            <Link href="https://medium.com/@berlianto.dev" title="Medium">
              <Image src="/assets/medium-logo.png" width={24} height={24} />
            </Link>
            <Link
              href="https://www.frontendmentor.io/profile/xvferdy"
              title="Frontend Mentor"
            >
              <Image src="/assets/fem-logo.png" width={24} height={24} />
            </Link>
            <Link href="https://github.com/xvferdy" title="Github">
              <Image src="/assets/github-logo.png" width={24} height={24} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SideProfile;
