import React from "react";
import CaseStudyCard from "./CaseStudyCard";

function CaseStudyList({ caseStudies }) {
  return (
    <section className="case-study-list">
      <div className="container case-study-list__container">
        {caseStudies.map((caseStudy) => (
          // <CaseStudyCard key={caseStudy.sys.id} caseStudy={caseStudy} />
          <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} />
        ))}
      </div>
    </section>
  );
}
export default CaseStudyList;
