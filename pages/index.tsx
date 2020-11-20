import React from "react";
import Typical from "react-typical";

const Index = () => {
  return (
    <>
      <h1>Abdallah Abedraba</h1>
      <Typical
        loop={Infinity}
        wrapper="h2"
        steps={["Backend Developer.", 900, "Cinephile.", 900]}
      />
    </>
  );
};

export default Index;
