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
      href: "https://wallet.assetmantle.one/",
    },
    image: "/hero/BG.png",
    floatingBoxImage1: "/hero/floatingBox1.png",
    floatingBoxImage2: "/hero/floatingBox2.png",
  };
  const statsSectionConfigData = {
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
    description:
      "The enterprise-grade blockchain infrastructure of Asgaurd enables you to grow your cryptocurrency holdings securely. Boost your earnings by taking advantage of decentralized proof-of-stake consensus networks.",
    descriptionStyle: {
      maxWidth: "min(630px, 100%)",
      width: "630px",
    },
    socialLinkPillStyles: {},
    stats: [
      {
        title: "00m",
        description1: "Total assets",
        description2: "stAKED",
      },
      {
        title: "55k",
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
      width: "min(180px, 100%)",
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
    title: "WHY CHOOSE US",
    description:
      "Find out why AsGuard is one of the pioneers in the theatre of ‘Staking-as-a-Service’",
    featuresArray: [
      {
        image: "/WhyChooseUsSection/NeverFailingService.svg",
        title: "Never-failing service",
        titleColor: "text-primary",
        description:
          "To ensure uninterrupted service, our systems use highly available, distributed and redundant nodes across multiple data centres in various geographical regions.",
        descriptionVariant: "body2",
        descriptionColor: "text-white",
      },
      {
        image: "/WhyChooseUsSection/StateOfTheArtInfrastructure.svg",
        title: "state of the art infrastructure",
        titleColor: "text-primary",
        description:
          "Our state-of-the-art infrastructure is automatically configured to avoid the risks associated with manual deployment. A professionally designed key management system ensures effective and distributed control over cryptographic materials.",
        descriptionVariant: "body2",
        descriptionColor: "text-white",
      },
      {
        image: "/WhyChooseUsSection/CuttingEdgeSecurity.svg",
        title: "CUTTING-EDGE seCURITY",
        titleColor: "text-primary",
        description:
          "We protect our validators from cyber and physical attacks through a robust, comprehensive security setup. Furthermore, we maintain a constant eye on operations with our global team and stay prepared to react immediately to any incidents, major or minor.",
        descriptionVariant: "body2",
        descriptionColor: "text-white",
      },
      {
        image: "/WhyChooseUsSection/LowCommissionHighRewards.svg",
        title: "low commission & high rewards",
        titleColor: "text-primary",
        description:
          "To ensure uninterrupted service, our systems use highly available, distributed and redundant nodes across multiple data centres in various geographical regions.",
        descriptionVariant: "body2",
        descriptionColor: "text-white",
      },
    ],
  };
  const howToStakeSectionConfigData = {
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
    titleVariant: "h3",
    titleColor: "text-primary",
    descriptionVariant: "body2",
    descriptionColor: "text-white",
    textAlign: "center", // >>> default: left
    title: "How to stake",
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
        description: "Create a wallet for your desired cosmos chain.",
        descriptionVariant: "body2",
        descriptionColor: "text-white",
        dimensions: { width: "150px", height: "150px" },
        link: "https://assetmantle.one/",
        linkTitle: "connect wallet >",
        linkColor: "text-primary",
      },
      {
        image: "/HowToStakeSection/Acquire.png",
        title: "acquire",
        titleColor: "text-primary",
        description: "Acquire tokens from an on-ramp solution.",
        descriptionVariant: "body2",
        descriptionColor: "text-white",
        dimensions: { width: "100%", height: "100%" },
        link: "https://assetmantle.one/",
        linkTitle: "Buy tokens >",
        linkColor: "text-primary",
      },
      {
        image: "/HowToStakeSection/Stake.png",
        title: "stake",
        titleColor: "text-primary",
        description: "Delegate your acquired tokens to Asguard.",
        descriptionVariant: "body2",
        descriptionColor: "text-white",
        dimensions: { width: "100%", height: "100%" },
        link: "https://assetmantle.one/",
        linkTitle: "stake tokens >",
        linkColor: "text-primary",
      },
      {
        image: "/HowToStakeSection/Earn.png",
        title: "earn",
        titleColor: "text-primary",
        description: "Claim rewards on your staked tokens.",
        descriptionVariant: "body2",
        descriptionColor: "text-white",
        dimensions: { width: "100%", height: "100%" },
        link: "https://assetmantle.one/",
        linkTitle: "View APR >",
        linkColor: "text-primary",
      },
    ],
  };
  const stakingEcosystemsConfigData = {
    title: "staking ecosystems",
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
        description: "APR:",
        learnMoreButton: "/chainReport/assetmantle",
        stakeNowButton: "https://wallet.assetmantle.one/",
      },
      {
        icon: "/CollabsSection/axelar.png",
        name: "Axelar (Testnet)",
        dimensions: { width: "113px", height: "27px" },
        description: "APR:",
        learnMoreButton: "/chainReport/axelar",
        stakeNowButton: "https://wallet.assetmantle.one/",
      },
      {
        icon: "/CollabsSection/archway.svg",
        name: "Archway",
        dimensions: { width: "160px", height: "36px" },
        description: "APR:",
        learnMoreButton: "",
        stakeNowButton: "",
      },
      {
        icon: "/CollabsSection/quicksilver.svg",
        name: "Quicksilver",
        dimensions: { width: "200px", height: "46px" },
        description: "APR:",
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
