import Head from "next/head";
import Image from "next/image";
import SideProfile from "@/components/SideProfile";
import CaseStudyList from "@/components/CaseStudyList";
import { createClient } from "contentful";

export default function Home({ caseStudies }) {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="List of Case Study" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon00.ico" />
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
  const data = res.items;

  return {
    props: {
      caseStudies: data,
    },
    revalidate: 1,
  };
}
