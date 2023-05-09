import React from "react";
import Link from "next/link";
import Image from "next/image";
import Chip from "@/components/Chip";
import { FaLocationArrow } from "react-icons/fa";
import ReactMarkdown from "react-markdown";

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
  } = caseStudy;

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
            alt="Banner BG"
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
          {/* <p className="card__brief">{thumbBrief}</p> */}
          <div className="card__brief">
            <ReactMarkdown>{thumbBrief}</ReactMarkdown>
          </div>

          <Link
            className="btn btn--primary"
            href={`/case-studies/${slug}`}
            scroll={false}
          >
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
            alt="Preview"
            // placeholder="blur"
            // blurDataURL={menuItem.img}
          />
        </div>
      </div>
    </section>
  );
}

export default CaseStudyCard;
