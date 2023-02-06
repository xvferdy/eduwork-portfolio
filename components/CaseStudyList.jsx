import React from "react";
import CaseStudyCard from "./CaseStudyCard";

function CaseStudyList() {
  return (
    <>
      {[...Array(3)].map((caseStudy) => (
        <CaseStudyCard />
      ))}
    </>
  );
}
export default CaseStudyList;
