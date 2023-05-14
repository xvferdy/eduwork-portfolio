import React from "react";
import Link from "next/link";
import Image from "next/image";
import Chip from "@/components/Chip";
import { FaLocationArrow } from "react-icons/fa";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { options } from "../utils/contentful-render";

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
          <div className="card__brief">
            {documentToReactComponents(thumbBrief, options)}
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
            height={480}
            width={640}
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
