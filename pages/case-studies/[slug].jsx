import React from "react";
import { createClient } from "contentful";

function CaseStudy({ caseStudy }) {
  const {
    title,
    tags,
    projectBrief,
    projectBanner,
    projectMockup,
    slug,
    nextSteps,
  } = caseStudy.fields;
  return (
    <main className="main">
      <section className="case-study">
        <div className="title">
          <h5>tag</h5>
          <h2>{title}</h2>
        </div>
        <div className="container case-study__container">
          <h3 className="case-study__header">title header</h3>
          <div>{nextSteps}</div>
        </div>
      </section>
    </main>
  );
}

export default CaseStudy;

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCES_KEY,
});

export async function getStaticPaths() {
  const res = await client.getEntries({ content_type: "caseStudyEduwork" });
  const data = res.items;
  const paths = data.map((caseStudyEduwork) => ({
    params: {
      slug: caseStudyEduwork.fields.slug,
    },
  }));
  return {
    paths: paths,
    fallback: false,
  };
}

export async function getStaticProps(ctx) {
  const { slug } = ctx.params;

  const res = await client.getEntries({
    content_type: "caseStudyEduwork",
    "fields.slug": slug,
  });

  const data = res.items;

  return {
    props: {
      caseStudy: data[0],
    },
  };
}
