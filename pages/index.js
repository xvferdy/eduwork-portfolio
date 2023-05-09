import Head from "next/head";
import Image from "next/image";
import SideProfile from "@/components/SideProfile";
import CaseStudyList from "@/components/CaseStudyList";
import { createClient } from "contentful";
import Box from "@/components/Box";
export default function Home({ caseStudies }) {
  return (
    <>
      <Head>
        <title>Ferdy UI/UX</title>
        <meta name="description" content="List of Case Study" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/favicon00.ico" /> */}
        <link rel="icon" href="/globe2.png" />
      </Head>
      <main className="homepage-main">
        <SideProfile />
        <CaseStudyList caseStudies={caseStudies} />
      </main>
    </>
  );
}

export async function getStaticProps(ctx) {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCES_KEY,
  });

  const res = await client.getEntries({ content_type: "caseStudyEduwork" });
  // const data = res.items;

  const data = res.items.map((property) => ({
    id: property.sys.id,
    title: property.fields.title,
    tags: property.fields.tags,
    projectBrief: property.fields.projectBrief,
    projectBanner: property.fields.projectBanner,
    projectMockup: property.fields.projectMockup,
    slug: property.fields.slug,
    thumbBrief: property.fields.thumbBrief,
    projectWorkflow: property.fields.projectWorkflow,
  }));
  return {
    props: {
      caseStudies: data,
    },
    revalidate: 1,
  };
}
