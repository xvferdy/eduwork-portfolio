import React from "react";
import { createClient } from "contentful";
import ReactMarkdown from "react-markdown";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import Image from "next/image";
import Chip from "@/components/Chip";

// const contentfulLoader = ({ src }) => {
//   return src;
// };

const options = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      // console.log(node.data.target.fields.file.url);
      return (
        <Image
          src={`https:${node.data.target.fields.file.url}`}
          // src={node.data.target.fields.file.url}
          // height={node.data.target.fields.file.details.image.height}
          // width={node.data.target.fields.file.details.image.width}
          height={540}
          width={960}
          alt={node.data.target.fields.title}
        />
      );
    },
  },
};

function CaseStudy({ caseStudy }) {
  const {
    slug,
    projectBanner,
    projectMockup,
    title,
    tags,
    projectBrief,
    projectGoals,
    team,
    role,
    projectDuration,
    projectType,
    projectWorkflow,
    empathizeContent,
    defineContent,
    ideateContent,
    prototypeContent,
    testContent,
    takeaways,
    learning,
  } = caseStudy.fields;

  return (
    <main className="case-study-main">
      {/* BANNER */}
      <section
        className="banner"
        // style={{
        //   // backgroundImage: `url("https:${projectBanner.fields.file.url}")`,
        //   background: `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(16, 13, 13, 0.82) 44.27%, rgba(21, 17, 17, 0.9424) 71.87%, #191414 100%), url(https:${projectBanner.fields.file.url})`,
        //   // backgroundColor: "#191414",
        //   backgroundPosition: "center",
        //   backgroundSize: "cover",
        //   backgroundRepeat: "no-repeat",
        //   // backgroundAttachment: "fixed",
        // }}
      >
        <div className="container banner__container">
          <div
            className="banner__bg"
            // style={{ width: "1000px", height: "1000px", position: "relative" }}
          >
            <Image
              src={`https:${projectBanner.fields.file.url}`}
              // fill
              // width={1199}
              // height={615}
              width={969}
              height={497}
              priority
            />
          </div>

          <div className="banner__mockup">
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

      {/* TITLE */}
      <section className="title">
        <div className="container title__container">
          <h1 className="title__title">{title}</h1>
          <div className="title__chips">
            {tags.map((tag, idx) => (
              <Chip key={idx} label={tag} />
            ))}
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="intro">
        <div className="container intro__container">
          <h2>Introduction</h2>
          <div className="intro__brief">
            <h3>Project Brief</h3>
            <ReactMarkdown>{projectBrief}</ReactMarkdown>
          </div>
          <div className="intro__goals">
            <h3>Project Goals</h3>
            <ReactMarkdown>{projectGoals}</ReactMarkdown>
          </div>
          <div className="bottom">
            <div className="left">
              <div className="intro__team">
                <h3>Team</h3>
                {team.map((person, idx) => (
                  <p style={{ display: "inline" }} key={idx}>
                    {person}
                    {idx < team.length - 1 && ", "}
                  </p>
                ))}
              </div>
              <div className="intro__role">
                <h3>Role</h3>
                <ReactMarkdown>{role}</ReactMarkdown>
              </div>
            </div>
            <div className="right">
              <div className="intro__duration">
                <h3>Project Duration</h3>
                <ReactMarkdown>{projectDuration}</ReactMarkdown>
              </div>
              <div className="intro__type">
                <h3>Project Type</h3>
                <ReactMarkdown>{projectType}</ReactMarkdown>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WORKFLOW */}
      <section className="workflow">
        <div className="container workflow__container">
          <h2>Project Workflow</h2>
          <div className="workflow__image">
            <Image
              src={`https:${projectWorkflow.fields.file.url}`}
              height={410}
              width={930}
              // fill
              // alt="food"
              // placeholder="blur"
              // blurDataURL={menuItem.img}
            />
          </div>
        </div>
      </section>

      {/* <hr /> */}

      {/* EMPATHY */}
      <section className="empathize">
        <div className="container empathize__container">
          <div className="phase">Understand The Problem</div>
          {documentToReactComponents(empathizeContent, options)}
        </div>
      </section>

      <section className="define">
        <div className="container define__container">
          <div className="phase">Defining The Problem</div>
          {documentToReactComponents(defineContent, options)}
        </div>
      </section>

      <section className="ideate">
        <div className="container ideate__container">
          <div className="phase">Ideation</div>
          {documentToReactComponents(ideateContent, options)}
        </div>
      </section>

      <section className="prototype">
        <div className="container prototype__container">
          <div className="phase">Design</div>
          {documentToReactComponents(prototypeContent, options)}
        </div>
      </section>

      <section className="test">
        <div className="container test__container">
          <div className="phase">Test</div>
          {documentToReactComponents(testContent, options)}
        </div>
      </section>

      <hr />

      <section className="outcomes">
        <div className="container outcomes__container">outcomes content</div>
      </section>

      <section className="learning">
        <div className="container learning__container">learning content</div>
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
