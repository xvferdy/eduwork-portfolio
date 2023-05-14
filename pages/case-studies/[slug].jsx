import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import Chip from "@/components/Chip";
import Divider from "@/components/Divider";
import { createClient } from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { AiFillHome } from "react-icons/ai";
import { motion, useScroll } from "framer-motion";
import Nav from "@/components/Nav";
import { useInView } from "react-intersection-observer";
import { options } from "../../utils/contentful-render";

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
    outcomes,
    learnings,
  } = caseStudy.fields;

  const { scrollYProgress } = useScroll();
  const { ref: introRef, inView: introActive } = useInView();
  const { ref: empathizeRef, inView: empathizeActive } = useInView();
  const { ref: defineRef, inView: defineActive } = useInView();
  const { ref: ideateRef, inView: ideateActive } = useInView();
  const { ref: prototypeRef, inView: prototypeActive } = useInView();
  const { ref: testRef, inView: testActive } = useInView();
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Case Study Article" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/book.png" />
      </Head>
      <main className="case-study-main">
        {/* Scroll progress */}
        <motion.div
          className="progress-bar"
          style={{ scaleX: scrollYProgress }}
        />

        {/* Nav */}
        <Nav
          introActive={introActive}
          empathizeActive={empathizeActive}
          defineActive={defineActive}
          ideateActive={ideateActive}
          prototypeActive={prototypeActive}
          testActive={testActive}
        />

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
                alt={projectBanner.fields.file.fileName}
              />
            </div>

            <div className="banner__mockup">
              <Image
                src={`https:${projectMockup.fields.file.url}`}
                height={480}
                width={480}
                // priority
                // fill
                // alt="food"
                // placeholder="blur"
                // blurDataURL={menuItem.img}
                alt={projectMockup.fields.file.fileName}
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
        <section id="intro" ref={introRef} className="intro">
          <div className="container intro__container">
            <h2>Introduction</h2>
            <div className="intro__brief">
              <h3>Project Brief</h3>
              {documentToReactComponents(projectBrief, options)}
            </div>
            <div className="intro__goals">
              <h3>Project Goals</h3>
              {documentToReactComponents(projectGoals, options)}
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
                <div className="intro__duration">
                  <h3>Project Duration</h3>
                  <p>{projectDuration}</p>
                </div>
              </div>
              <div className="right">
                <div className="intro__role">
                  <h3>Role</h3>
                  <p>{role}</p>
                </div>
                <div className="intro__type">
                  <h3>Project Type</h3>
                  <p>{projectType}</p>
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
                alt={projectWorkflow.fields.file.fileName}
              />
            </div>
          </div>
          <div ref={empathizeRef} id="empathize" style={{ height: "1px" }} />
        </section>

        <Divider />

        {/* EMPATHY */}
        <section className="empathize">
          <div className="container empathize__container">
            <motion.div
              className="phase"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{
                opacity: 1,
                y: 0,
                rotate: -1,
              }}
              transition={{ type: "spring", bounce: 0.4, duration: 0.8 }}
              viewport={{ once: true }}
            >
              Understand The Problem
            </motion.div>
            {documentToReactComponents(empathizeContent, options)}
          </div>
          <div ref={defineRef} id="define" style={{ height: "1px" }} />
        </section>

        {/* DEFINE */}
        <section id="define" className="define">
          <div className="container define__container">
            <motion.div
              className="phase"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{
                opacity: 1,
                y: 0,
                rotate: -1,
              }}
              transition={{ type: "spring", bounce: 0.4, duration: 0.8 }}
              viewport={{ once: true }}
            >
              Defining The Problem
            </motion.div>
            {documentToReactComponents(defineContent, options)}
          </div>
          <div ref={ideateRef} id="ideate" style={{ height: "1px" }} />
        </section>

        {/* IDEATE */}
        <section className="ideate">
          <div className="container ideate__container">
            <motion.div
              className="phase"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{
                opacity: 1,
                y: 0,
                rotate: -1,
              }}
              transition={{ type: "spring", bounce: 0.4, duration: 0.8 }}
              viewport={{ once: true }}
            >
              Ideation
            </motion.div>
            {documentToReactComponents(ideateContent, options)}
          </div>
          <div ref={prototypeRef} id="prototype" style={{ height: "1px" }} />
        </section>

        {/* PROTOTYPE */}
        <section className="prototype">
          <div className="container prototype__container">
            <motion.div
              className="phase"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{
                opacity: 1,
                y: 0,
                rotate: -1,
              }}
              transition={{ type: "spring", bounce: 0.4, duration: 0.8 }}
              viewport={{ once: true }}
            >
              Design
            </motion.div>
            {documentToReactComponents(prototypeContent, options)}
          </div>
          <div ref={testRef} id="test" style={{ height: "1px" }} />
        </section>

        {/* TEST */}
        <section className="test">
          <div className="container test__container">
            <motion.div
              className="phase"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{
                opacity: 1,
                y: 0,
                rotate: -1,
              }}
              transition={{ type: "spring", bounce: 0.4, duration: 0.8 }}
              viewport={{ once: true }}
            >
              Test
            </motion.div>
            {documentToReactComponents(testContent, options)}
          </div>
        </section>

        <Divider />

        {/* OUTCOMES */}
        <section className="outcomes">
          <div className="container outcomes__container">
            <h2>Outcomes 🎉</h2>
            <div className="outcomes__content">
              {documentToReactComponents(outcomes, options)}
            </div>
          </div>
        </section>

        {/* LEARNINGS */}
        <section className="learnings">
          <div className="container learnings__container">
            <h2>Learnings</h2>
            <div className="learnings__content">
              {documentToReactComponents(learnings, options)}
            </div>
          </div>
        </section>

        <Divider />
      </main>

      {/* FOOTER */}
      <footer>
        <div className="container">
          <p>
            Thank you for reading! I'd love to hear of any feedback from you for
            this article. Say hi to me at{" "}
            <a className="email" href="mailto:xv.ferdy@gmail.com">
              xv.ferdy@gmail.com
            </a>
          </p>
          <Link className="btn btn--primary" href={`/`} scroll={false}>
            Back to Homepage
            <AiFillHome />
          </Link>
        </div>
      </footer>
    </>
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
