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
            src="/Assets/placeholder-min.png"
            // src="/Assets/pp00.png"
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
            <h1>Ferdy. 🐳</h1>
          </div>
          <div className="side-profile__info-bio">
            <p>
              HEYLLOW folks!.... my name is Ferdy and I'm currently focused on
              conquering my self.
            </p>

            <p>This is my journey exploring digital technology in 2023.</p>

            <p>So grateful to be sharing my world with you.</p>
          </div>
          <div className="side-profile__info-phone">
            <p>
              <BsTelephone /> +82292685156
            </p>
          </div>
          <div className="side-profile__info-email">
            <p>
              <MdAlternateEmail /> xv.ferdy@gmail.com
            </p>
          </div>
          <div className="side-profile__info-links">
            <Link
              href="https://id.linkedin.com/in/berlianto-ferdynand-354819136?trk=public_profile_browsemap&original_referer=https%3A%2F%2Fwww.google.com%2F"
              title="Linkedin"
            >
              <Image
                src="/Assets/linkedin-logo2.png"
                width={24}
                height={24}
                alt="Linkedin"
              />
            </Link>
            <Link
              href="https://www.blogger.com/profile/16732934081090438699"
              title="Blogspot"
            >
              <Image
                src="/Assets/bloger-logo.png"
                width={24}
                height={24}
                alt="Blogspot"
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
          </div>
        </div>
      </div>
    </section>
  );
}

export default SideProfile;
