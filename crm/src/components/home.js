import React from "react";
import Header from "./Header";
import FourDivsContainer from "./Header2";
import TwoDivsContainer from "./Body";
import Body2 from "./Body2";
import Body3 from "./Body3";
import ImageWithText from "./ImageWithText";
import Footer from "./Footer";

function Home() {
  return (
    <div>
      <Header />
      <ImageWithText />
      <FourDivsContainer />
      <TwoDivsContainer />
      <Body2 />
      <Body3 />

      <Footer />
    </div>
  );
}

export default Home;
