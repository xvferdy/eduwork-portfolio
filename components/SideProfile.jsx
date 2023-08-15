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
            src="/Assets/pp02.png"
            // fill
            // width={1199}
            // height={615}
            width={969}
            height={497}
            alt="Profile Pict"
            // priority
          />
        </div>
        <div className="side-profile__info">
          <div className="side-profile__info-name">
            <h1>Ferdy 🎨</h1>
          </div>
          <div className="side-profile__info-bio">
            <p>
              HEYLLOW folks!.... this is my journey exploring digital technology
              in 2023, very grateful to be sharing my world with you.
              {/* I'm currently focused on conquering my self. */}
            </p>
            <p>UX Research ◉ UX Design ◉ UI Design</p>
          </div>
          <div className="side-profile__info-phone">
            {/* <p>
              <BsTelephone /> +82292685156
            </p> */}
            <Link
              href="https://api.whatsapp.com/send?phone=6282292685156"
              target="_blank"
            >
              <BsTelephone /> +82292685156
            </Link>
          </div>
          <div className="side-profile__info-email">
            {/* <p>
              <MdAlternateEmail /> xv.ferdy@gmail.com
            </p> */}
            <Link href="mailto:berlianto.jobs@gmail.com" target="_blank">
              <MdAlternateEmail /> berlianto.jobs@gmail.com
            </Link>
          </div>
          <div className="side-profile__info-links">
            <Link
              href="https://www.linkedin.com/in/berlianto-ferdynand-pongbubun/"
              title="Linkedin"
            >
              <Image
                src="/Assets/linkedin-logo2.png"
                width={24}
                height={24}
                alt="Linkedin"
              />
            </Link>
            <Link href="https://medium.com/@berlianto.dev" title="Medium">
              <Image
                src="/Assets/medium-logo.png"
                width={24}
                height={24}
                alt="Medium"
              />
            </Link>
            <Link href="https://www.behance.net/berliantoferdy" title="Behance">
              <Image
                src="/Assets/behance.png"
                width={24}
                height={24}
                alt="Behance"
              />
            </Link>
            <Link href="https://dribbble.com/xvferdy" title="Dribbble">
              <Image
                src="/Assets/dribbble.png"
                width={24}
                height={24}
                alt="Dribbble"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SideProfile;
