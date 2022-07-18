import * as React from "react";
import HeroSection from "../views/HeroSection";
import HowItWorks from "../views/HowItWorks";
import ProductCategories from "../views/ProductCategories";
import ProductCTA from "../views/ProductCTA";
// import ProductHero from "../views/ProductHero";
import ProductHowItWorks from "../views/ProductHowItWorks";
import ProductSmokingHero from "../views/ProductSmokingHero";
import ProductValues from "../views/ProductValues";
import WhyTrustUs from "../views/WhyTrustUs";

export default function Index() {
  return (
    <>
      {/* <ProductHero /> */}
      <HeroSection />
      <HowItWorks />
      <WhyTrustUs />
      <ProductValues />
    </>
  );
}
