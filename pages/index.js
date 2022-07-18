import * as React from "react";
import AppAppBar from "../views/AppAppBar";
import Footer from "../views/Footer";
import Hero from "../views/Hero";
import HowItWorks from "../views/HowItWorks";
import KnowMore from "../views/KnowMore";

export default function Index() {
  const [ContactUsModal, setContactUsModal] = React.useState(false);

  return (
    <React.Fragment>
      <AppAppBar setContactUsModal={setContactUsModal} />
      <Hero />
      <HowItWorks />
      <KnowMore />
      <Footer />
      {/* 
      <ProductValues />
      <ProductCategories />
      <ProductHowItWorks />
      <ProductCTA />
      <ProductSmokingHero />
      <AppFooter />
    */}
    </React.Fragment>
  );
}
