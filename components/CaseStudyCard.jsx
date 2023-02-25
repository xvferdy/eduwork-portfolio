import React from "react";
import Link from "next/link";
import Button from "./Button";
import Image from "next/image";

function CaseStudyCard({ caseStudy }) {
  const {
    title,
    tags,
    projectBrief,
    projectBanner,
    projectMockup,
    slug,
    projectWorkflow,
  } = caseStudy.fields;

  // const { img } = caseStudy.fields.projectMockup.fields.file.url;

  // console.log(caseStudy.fields.projectMockup);

  return (
    <section className="card">
      <div className="container card__container">
        {/* Desc */}
        <div className="card__description">
          <h2>{title}</h2>
          <p>{projectBrief}</p>
          <Link className="btn btn--primary" href={`/case-studies/${slug}`}>
            see
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
