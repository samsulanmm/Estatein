import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const OnProgress = () => {
  return (
    <>
      <Navbar />

      <div className="on-progress text-center py-5 w-[90%] mx-auto">
        <img
          className="w-[400px] inline"
          src="./turu.svg"
          alt=""
        />

        <h3 className="text-4xl font-medium pt-4">On Progress...</h3>
      </div>

      <Footer />
    </>
  );
};

export default OnProgress;
