import React from "react";
import Link from "next/link";
import Button from "./Button";
import Image from "next/image";
import Chip from "@/components/Chip";
import { FaLocationArrow } from "react-icons/fa";

function CaseStudyCard({ caseStudy }) {
  const {
    title,
    tags,
    projectBrief,
    projectBanner,
    projectMockup,
    slug,
    thumbBrief,
    projectWorkflow,
  } = caseStudy.fields;

  // const { img } = caseStudy.fields.projectMockup.fields.file.url;

  // console.log(caseStudy.fields.projectMockup);

  return (
    <section className="card">
      <div className="container card__container">
        {/* BG */}
        <div className="card__banner">
          <Image
            src={`https:${projectBanner.fields.file.url}`}
            width={969}
            height={497}
            // width={1199}
            // height={615}
            priority
          />
        </div>

        {/* Desc */}
        <div className="card__description">
          <div className="card__description-chips">
            {tags.map((tag, idx) => (
              <Chip key={idx} label={tag} />
            ))}
          </div>
          <h2 className="card__title">{title}</h2>
          <p className="card__brief">{thumbBrief}</p>
          <Link className="btn btn--primary" href={`/case-studies/${slug}`}>
            View Project <FaLocationArrow />
          </Link>
        </div>

        {/* Mockup */}
        <div className="card__mockup">
          <Image
            src={`https:${projectMockup.fields.file.url}`}
            height={568}
            width={285}
            // priority
            // fill
            // alt="food"
            // placeholder="blur"
            // blurDataURL={menuItem.img}
          />
        </div>
      </div>
    </section>
  );
}

export default CaseStudyCard;
