import React from "react";

const SectionWraper = ({ className, children }) => {
  return (
    <section className={`${className} container mx-auto px-3`}>
      {children}
    </section>
  );
};

export default SectionWraper;
