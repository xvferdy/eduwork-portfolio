import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import CaseStudyCard from "@/components/CaseStudyCard";
import SideProfile from "@/components/SideProfile";
import CaseStudyList from "@/components/CaseStudyList";
import { createClient } from "contentful";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ caseStudies }) {
  // console.log(caseStudies);
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="main">
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
