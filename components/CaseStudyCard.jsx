import React from "react";
import Link from "next/link";
import Chips from "./Chips";
import Button from "./Button";
import Image from "next/image";

function CaseStudyCard({ caseStudy }) {
  const { title, tags, projectBrief, projectBanner, projectMockup, slug } =
    caseStudy.fields;

  return (
    <section className="card">
      <div className="container card__container">
        {/* Desc */}
        <div className="card__description">
          {tags.map((tag, idx) => (
            <Chips key={idx} label={tag} />
          ))}
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
            width={190}
            height={190}
            placeholder="blur"
            blurDataURL={`https:${projectMockup.fields.file.url}`}
            // fill
          />
        </div>
      </div>
    </section>
  );
}

export default CaseStudyCard;
