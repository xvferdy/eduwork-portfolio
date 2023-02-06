import React from "react";
import Link from "next/link";

function CaseStudyCard() {
  return (
    <>
      <div>CaseStudyCard</div>
      <Link href={`/case-studies/${"unique"}`}> see</Link>
    </>
  );
}

export default CaseStudyCard;
