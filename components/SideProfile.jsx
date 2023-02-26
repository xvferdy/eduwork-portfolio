import React from "react";
import Image from "next/image";

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
          <p>info</p>
        </div>
      </div>
    </section>
  );
}

export default SideProfile;
