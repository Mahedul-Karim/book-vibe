import React from "react";

const Container = ({ className = "", children }) => {
  return (
    <section className={`${className} max-w-7xl mx-auto w-11/12`}>
      {children}
    </section>
  );
};

export default Container;
