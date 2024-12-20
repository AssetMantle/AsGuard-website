import * as React from "react";
import HeroSection from "../views/HeroSection";
import StatsSection from "../views/StatsSection";

import WhyChooseUsSection from "../views/WhyChooseUsSection";
import HowToStakeSection from "../views/HowToStakeSection";
import StakingEcosystems from "../views/StakingEcosystems";

export default function Index(props) {
  return (
    <>
      <HeroSection heroSectionConfigData={props.heroSectionConfigData} />
      <StatsSection statsSectionConfigData={props.statsSectionConfigData} />
      <WhyChooseUsSection
        whyChooseUsSectionConfigData={props.whyChooseUsSectionConfigData}
      />
      <HowToStakeSection
        howToStakeSectionConfigData={props.howToStakeSectionConfigData}
      />
      <StakingEcosystems
        stakingEcosystemsConfigData={props.stakingEcosystemsConfigData}
      />
    </>
  );
}
export async function getStaticProps() {
  const heroSectionConfigData = {
    sectionStyle: `text-white text-center`,
    title1: `Guarding your`,
    title2: `staked assets`,
    title2Styles: {
      color: "transparent",
      background: "linear-gradient(90deg, #FFCE5A 0%, #F27113 100%)",
      backgroundClip: "text",
      WebkitBackgroundClip: "text",
    },
    button: {
      label: "Stake Now",
      endIcon: "bi-arrow-up-right",
      variant: "button-primary",
      href: "https://wallet.assetmantle.one/stake",
    },
    image: "/hero/bg.webp",
    floatingBoxImage1: "/hero/floatingBox1.png",
    floatingBoxImage2: "/hero/floatingBox2.png",
  };
  const statsSectionConfigData = {
    description:
      "The enterprise-grade blockchain infrastructure of Asgaurd enables you to grow your cryptocurrency holdings securely. Boost your earnings by taking advantage of decentralized proof-of-stake consensus networks.",
    optionStyles: {
      maxWidth: "290px",
      boxShadow: "none",
      height: "100%",
      padding: "12px",
      display: "flex",
      flexDirection: "column",
    },
    seperatorLineStyles: {
      width: "min(380px, 100%)",
      border: ".5px solid #FFFDFA",
      height: "0px",
      borderRadius: "2px",
      marginTop: "32px",
      opacity: "0.4",
    },
    descriptionStyle: {
      width: "min(842px, 100%)",
    },
    socialLinkPillStyles: {},
    stats: [
      {
        title: "1.38m",
        description1: "Total assets",
        description2: "stAKED",
      },
      {
        title: "290",
        description1: "Total unique",
        description2: "delegators",
      },
      {
        title: "99%",
        description1: "network",
        description2: "uptime",
      },
      {
        title: "$00k",
        description1: "Total REWARDS",
        description2: "dISBURSED",
      },
    ],
    stateCardStyles: {
      width: "min(220px, 100%)",
    },
    statsTitleStyles: {
      fontSize: "54px",
      fontWeight: "700",
      lineHeight: "96px",
      letterSpacing: "0.03em",
      textShadow: "0px 0px 50px rgba(0, 0, 0, 0.75)",
    },
    statsSubTitleStyles: {
      letterSpacing: "0.2em",
    },
    plusImage: "/StatsSection/+.png",
    plusImageStyles: {
      maxWidth: "46px",
      height: "auto",
      position: "relative",
      top: "-38px",
      left: "-10px",
    },
  };
  const whyChooseUsSectionConfigData = {
    paperVariant: "translucent",
    textAlign: "center",
    optionContainerStyles: { gap: "14px" },
    optionContainerStyleClasses: `d-flex align-items-center justify-content-center flex-wrap mt-5`,
    title: "Why choose us?",
    description:
      "Find out why AsGuard is one of the pioneers in the theatre of ‘Staking-as-a-Service’",
    featuresArray: [
      {
        image: "/WhyChooseUsSection/NeverFailingService.svg",
        title: "High Availability",
        description:
          "To ensure uninterrupted service, our systems use highly available, distributed and redundant nodes across multiple data centres in various geographical regions.",
        titleColor: "text-primary",
        titleVariant: "h4",
        descriptionVariant: "body2",
        descriptionColor: "text-white",
      },
      {
        image: "/WhyChooseUsSection/StateOfTheArtInfrastructure.svg",
        title: "Optimized Infrastructure",
        description:
          "Our auto-configured, professionally designed key management system ensures distributed control over cryptographic materials unlike manual deployment.",
        titleColor: "text-primary",
        titleVariant: "h4",
        descriptionVariant: "body2",
        descriptionColor: "text-white",
      },
      {
        image: "/WhyChooseUsSection/CuttingEdgeSecurity.svg",
        title: "Cutting-Edge Security",
        description:
          "We protect our validators from cyber and physical attacks through a robust, comprehensive security setup, with continuous monitoring by our global team.",
        titleColor: "text-primary",
        titleVariant: "h4",
        descriptionVariant: "body2",
        descriptionColor: "text-white",
      },
      {
        image: "/WhyChooseUsSection/LowCommissionHighRewards.svg",
        title: "Highly Incentivised",
        description:
          "Our service provides competitive yield as staking rewards, with nominal commission rates, to provide multiplied economical benefit to our users over long term.",
        titleColor: "text-primary",
        titleVariant: "h4",
        descriptionVariant: "body2",
        descriptionColor: "text-white",
      },
    ],
  };
  const howToStakeSectionConfigData = {
    titleVariant: "h3",
    titleColor: "text-primary",
    descriptionVariant: "body2",
    descriptionColor: "text-white",
    textAlign: "center", // >>> default: left
    title: "How to Stake?",
    titleComponent: "h1",
    endIcon: "keyboard_arrow_right",
    description:
      "Quick and easy steps to get your assets protected and incentivised with high yield!",
    descriptionStyle: { maxWidth: "min(836px, 100%)", margin: "0 auto" },
    steps: [
      {
        image: "/HowToStakeSection/Create.png",
        title: "Create",
        titleColor: "text-primary",
        titleVariant: "h4",
        description: "Create a wallet for your desired cosmos chain.",
        descriptionVariant: "body2",
        descriptionColor: "text-white",
        dimensions: { width: "150px", height: "150px" },
        link: "https://wallet.keplr.app/",
        linkTitle: "connect wallet >",
        linkColor: "text-primary",
        target: "_blank",
      },
      {
        image: "/HowToStakeSection/Acquire.png",
        title: "acquire",
        titleColor: "text-primary",
        titleVariant: "h4",
        description: "Acquire tokens from an on-ramp solution.",
        descriptionVariant: "body2",
        descriptionColor: "text-white",
        dimensions: { width: "100%", height: "100%" },
        link: "https://wallet.assetmantle.one/trade",
        linkTitle: "Buy tokens >",
        linkColor: "text-primary",
        target: "_blank",
      },
      {
        image: "/HowToStakeSection/Stake.png",
        title: "stake",
        titleColor: "text-primary",
        titleVariant: "h4",
        description: "Delegate your acquired tokens to Asguard.",
        descriptionVariant: "body2",
        descriptionColor: "text-white",
        dimensions: { width: "100%", height: "100%" },
        link: "https://wallet.assetmantle.one/stake",
        linkTitle: "stake tokens >",
        linkColor: "text-primary",
        target: "_blank",
      },
      {
        image: "/HowToStakeSection/Earn.png",
        title: "earn",
        titleColor: "text-primary",
        titleVariant: "h4",
        description: "Claim rewards on your staked tokens.",
        descriptionVariant: "body2",
        descriptionColor: "text-white",
        dimensions: { width: "100%", height: "100%" },
        link: "/#staking-ecosystems",
        linkTitle: "View APR >",
        linkColor: "text-primary",
        target: "",
      },
    ],
    optionContainerStyles: { gap: "14px" },
    optionContainerStyleClasses: `d-flex align-items-center justify-content-center flex-wrap mt-5`,
    optionStyles: {
      background: "transparent",
      maxWidth: "280px",
      boxShadow: "none",
      padding: "16px 22px",
      minHeight: "331px",
      transition: "all 0.3s ease-in-out",
    },
  };
  const stakingEcosystemsConfigData = {
    title: "Staking Ecosystems",
    description:
      "Find the list of ecosystems enabling AsGuard based staking, and their performance stats",
    cardVariant: "translucent",
    textFieldVariant: "outlined",
    nameVariant: "h4",
    nameColor: "primary.main",
    filterColor: "primary",
    descriptionVariant: "body2",
    list: [
      {
        icon: "/CollabsSection/mantleplace.svg",
        name: "MantleChain (Mainnet)",
        dimensions: { width: "134px", height: "30px" },
        description: "APR: 113%",
        learnMoreButton: "/chainReport/assetmantle",
        stakeNowButton: "https://wallet.assetmantle.one/stake",
      },
      {
        icon: "/CollabsSection/axelar.png",
        name: "Axelar (Testnet)",
        dimensions: { width: "113px", height: "27px" },
        description: "APR: 0.00%",
        learnMoreButton: "",
        // "/chainReport/axelar",
        stakeNowButton: "",
        // "https://wallet.assetmantle.one/",
      },
      {
        icon: "/CollabsSection/archway.svg",
        name: "Archway",
        dimensions: { width: "160px", height: "36px" },
        description: "APR: 0.00%",
        learnMoreButton: "",
        stakeNowButton: "",
      },
      {
        icon: "/CollabsSection/quicksilver.svg",
        name: "Quicksilver",
        dimensions: { width: "200px", height: "46px" },
        description: "APR:  0.00%",
        learnMoreButton: "",
        stakeNowButton: "",
      },
    ],
  };
  return {
    props: {
      heroSectionConfigData,
      statsSectionConfigData,
      whyChooseUsSectionConfigData,
      howToStakeSectionConfigData,
      stakingEcosystemsConfigData,
    },
  };
}
