import React from "react";
import Error404 from "../components/ErrorPage";
import Footer from "../components/Footer";
import Header from "../components/Header";

const NoPage = () => {
  return (
    <>
      <div className="NoPage">
        <Header />
        <main>
          <Error404 />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default NoPage;
