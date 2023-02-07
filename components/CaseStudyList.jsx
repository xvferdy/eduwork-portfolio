import React from "react";
import CaseStudyCard from "./CaseStudyCard";

function CaseStudyList({ caseStudies }) {
  return (
    <section>
      {caseStudies.map((caseStudy) => (
        <CaseStudyCard key={caseStudy.sys.id} caseStudy={caseStudy} />
      ))}
    </section>
  );
}
export default CaseStudyList;
