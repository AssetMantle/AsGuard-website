import * as React from "react";
import DiverseActor from "../views/DiverseActor";
import FastAndEasySetup from "../views/FastAndEasySetup";
import FeaturedCreators from "../views/FeaturedCreators";
import FeaturedNFT from "../views/FeaturedNFT";
import FeatureSection from "../views/FeatureSection";
import Fractionalized from "../views/Fractionalized";
import GallerySection from "../views/GallerySection";
import HeroSection from "../views/HeroSection";

//
import ChainSection from "../views/ChainSection";
import SocialProofSection from "../views/SocialProofSection";
import TeamSection from "../views/TeamSection";
import CollabsHeroSection from "../views/CollabsHeroSection";
import CollabsSection from "../views/CollabsSection";
import ExplanationSection from "../views/ExplanationSection";
import TokenInfo from "../views/TokenInfo";
import VisionMissionSection from "../views/VisionMissionSection";
import TokenUtility from "../views/TokenUtility";
import TokenDistribution from "../views/TokenDistribution";
import FAQSection from "../views/FAQSection";
import UniverseSection from "../views/UniverseSection";

export default function Index(props) {
  return (
    <>
      <HeroSection heroSectionConfigData={props.heroSectionConfigData} />
      <FeatureSection
        featureSectionConfigData={props.featureSectionConfigData}
      />
      <DiverseActor
        diverseActorConfigData={props.diverseActorSectionConfigData}
      />
      <GallerySection
        gallerySectionConfigData={props.gallerySectionConfigData}
      />
      <FeaturedCreators featuredCreatorData={props.featuredCreatorConfig} />
      <FeaturedNFT featuredNFTConfig={props.featuredNFTConfig} />
      <FastAndEasySetup
        fastAndEasySectionConfigData={props.fastAndEasySectionConfigData}
      />
      <Fractionalized
        initiativeSectionConfigData={props.initiativeSectionConfigData}
      />
      <h1 className="text-center text-white h1">Unused</h1>
      <ChainSection chainSectionConfigData={props.chainSectionConfigData} />
      <SocialProofSection
        socialProofConfigData={props.socialProofSectionConfigData}
      />
      <TeamSection teamsConfigData={props.teamSectionConfigData} />
      <UniverseSection configData={props.universeSectionConfigData} />
      <ExplanationSection
        explanationSectionData={props.explanationSectionData}
      />
      <VisionMissionSection
        visionMissionSectionData={props.visionMissionSectionData}
      />
      <TokenInfo tokenInfoData={props.tokenInfoData} />
      <TokenUtility tokenUtilityData={props.tokenUtilityData} />
      <TokenDistribution tokenDistributionData={props.tokenDistributionData} />
      <FAQSection FAQSectionData={props.FAQSectionData} />
      <CollabsHeroSection configData={props.collabsHeroSectionConfigData} />
      <CollabsSection configData={props.collabsSectionConfigData} />
    </>
  );
}
export async function getStaticProps() {
  const heroSectionConfigData = {
    sectionStyle: `py-6 py-md-4 mt-2 text-white text-center`,
    title: `For The Art of Yesterday.`,
    subtitle:
      "Experience the first NFT Marketplace with Decentralized Identifiers",
    buttons: [
      {
        label: "Launch App",
        endIcon: "bi-arrow-up-right",
        variant: "button-primary",
        href: "https://marketplace.assetmantle.one/",
      },
      {
        label: "What’re DIDs?",
        endIcon: "bi-chevron-right",
        variant: "button-secondary",
        href: "https://www.w3.org/TR/did-core/",
      },
    ],
    image: "/images/hero/mantler.webp",
  };
  const featureSectionConfigData = {
    paperVariant: "translucent",
    textAlign: "center",
    optionContainerStyles: { gap: "14px" },
    optionContainerStyleClasses: `d-flex align-items-center justify-content-center flex-wrap mt-5`,
    optionStyles: {
      background: "transparent",
      maxWidth: "374px",
      boxShadow: "none",
      padding: "16px 22px",
      minHeight: "331px",
      transition: "all 0.3s ease-in-out",
    },
    title: "Mantleplace Features",
    titleComponent: "",
    titleVariant: "h1",
    titleColor: "text-primary",
    description:
      "MantlePlace inherits latest principles of Blockchain Identity and Customization to create truly unique ownership and optimized transfer of value ",
    descriptionStyle: { maxWidth: "min(836px, 100%)", margin: "0 auto" }, // object of styles or false
    featuresArray: [
      {
        href: "",
        icon: "/FeatureSection/futureInteroperability.svg", // put icon component or url >>don't forgot to change the below
        title: "DEX for NFTs",
        titleVariant: "h4",
        titleColor: "text-primary",
        description:
          "MantlePlace is a full fledged Decentralized exchange for NFTs enabling various modes of transfer of value, including buy, sell, bid, ask, and potentially several trade types.",
        descriptionVariant: "body2",
        descriptionColor: "text-white",
      },
      {
        href: "",
        icon: "/FeatureSection/didBased.svg", // put icon component or url >>don't forgot to change the below
        title: "DID based ownership",
        titleVariant: "h4",
        titleColor: "text-primary",
        description:
          "The ownership in NFT economy of MantlePlace is implemented using the latest concept in Blockchain Identity called Decentralized Identifiers (DIDs).",
        descriptionVariant: "body2",
        descriptionColor: "text-white",
      },
      {
        href: "",
        icon: "/FeatureSection/optimizedForNft.svg", // put icon component or url >>don't forgot to change the below
        title: "Schema based NFT",
        titleVariant: "h4",
        titleColor: "text-primary",
        description:
          "MantlePlace allows creators to build bespoke NFT schemas, enabling customization of NFT metadata at the most granular level, to create truly unique assets.",
        descriptionVariant: "body2",
        descriptionColor: "text-white",
      },
      {
        href: "",
        icon: "/FeatureSection/pioneeringCosmosEco.svg", // put icon component or url >>don't forgot to change the below
        title: "Cosmos Advantage",
        titleVariant: "h4",
        titleColor: "text-primary",
        description:
          "MantlePlace is based on AssetMantle chain, a Cosmos zone, enabling fast, cheap transactions, Tendermint consensus algorithm, IBC based transfers, Modular SDK etc.",
        descriptionVariant: "body2",
        descriptionColor: "text-white",
      },
      {
        href: "",
        icon: "/FeatureSection/multiChain.svg", // put icon component or url >>don't forgot to change the below
        title: "Multichain Transfers",
        titleVariant: "h4",
        titleColor: "text-primary",
        description:
          "MantlePlace will leverage an IBC enabled interchain universe to potentially create a multichain NFT market. It is at the forefront of adopting InterNFT Standards.",
        descriptionVariant: "body2",
        descriptionColor: "text-white",
      },
      {
        href: "",
        icon: "/FeatureSection/fractionalized.svg", // put icon component or url >>don't forgot to change the below
        title: "Fractionalized Ownership",
        titleVariant: "h4",
        titleColor: "text-primary",
        description:
          "MantlePlace will implement fractional ownership of assets at chain level, where several parties could have collective ownership of a unit NFT. ",
        descriptionVariant: "body2",
        descriptionColor: "secondary.main",
      },
    ],
  };
  const diverseActorSectionConfigData = {
    textAlign: "", // >>> default: left
    fullWidth: false, // boolean
    smallDeviceColumnDirections: "", // only "reverse" or "" >>>>>>default is "no-reverse"
    contentMaxWidth: "", // "number+px"(ie. "100px") or "" >>>>>>default is "457px"
    title: "Diverse Actors using DIDs",
    titleComponent: "h1",
    titleVariant: "h2",
    titleColor: "text-white",
    description: [
      "MantlePlace creates an extended NFT economy with a diverse range of actors like Collectors, sole Creators, Enterprise creators, with potential to manage many more. These actors are created using Decentralized Identifiers (DIDs) which enables authenticity, integrity and efficient transfer of value in an easy manner.",
      "This shopifying of NFT assets, leads to a distributed network of networks, with world state stored collectively in the AssetMantle chain.",
    ],
    descriptionVariant: "body2",
    descriptionColor: "text-white",
    descriptionStyle: { maxWidth: "min(836px, 100%)", margin: "0 auto" }, // object of styles or false
    rightSidedImage: "/DiverseActors/diverseActors.webp",
  };
  const gallerySectionConfigData = {
    optionStyles: {
      maxWidth: "272px",
      boxShadow: "none",
      height: "100%",
      padding: "0 11px",
      display: "flex",
      flexDirection: "column",
    },
    paperVariant: "translucent",
    titleVariant: "h3",
    titleColor: "text-primary",
    descriptionVariant: "body2",
    descriptionColor: "text-white",
    textAlign: "center", // >>> default: left
    title: "A Creator’s Economy ",
    titleComponent: "h1",
    endIcon: "keyboard_arrow_right",
    description:
      "MantlePlace is creator-centric, providing host of utilities enabling fast, versatile and characteristically unique creation of NFTs",
    descriptionStyle: { maxWidth: "min(836px, 100%)", margin: "0 auto" }, // object of styles or false
    galleries: [
      // object template
      // {
      //   image: "/GallerySection//mantleplace.png",
      //   title: "",
      //   description: "",
      //   buttons: [
      //     {
      //       text: "",
      //       url: "",
      //     },
      //   ],
      // },
      {
        image: "/GallerySection/serverlessIssuance.png",
        title: "",
        description:
          "Several Issuance styles including Batch & Lazy Minting, open to all or whitelist based ",
        buttons: [],
      },
      {
        image: "/GallerySection/abilityTokenize.png",
        title: "",
        description:
          "Ability to tokenize anything of real world using elaborate NFT metadata definitions",
        buttons: [],
      },
      {
        image: "/GallerySection/createSophisticated.png",
        title: "",
        description:
          "Create sophisticated royalty splits for precise value creation for NFT Creators ",
        buttons: [],
      },
      {
        image: "/GallerySection/OptimizedForNFTCreator.png",
        title: "",
        description:
          "Option for NFT creators to get verified, encouraging authenticity and option for exclusivity",
        buttons: [],
      },
    ],
  };
  const featuredCreatorConfig = {
    title: "Featured Creators",
    description: "",
    slides: [
      {
        image: "/featuredCreators/hero_image_1.png",
        avatar: "/featuredCreators/hero_avatar_1.png",
        name: "Dreamyvisuals  ",
        social: "https://twitter.com/dreamyvisualz",
        profile: "Forest Ruins",
      },
      {
        image: "/featuredCreators/hero_image_2.png",
        avatar: "/featuredCreators/hero_avatar_2.png",
        name: "shainefer",
        social: "https://twitter.com/Shai_Nefer_",
        profile: "Break",
      },
      {
        image: "/featuredCreators/hero_image_3.png",
        avatar: "/featuredCreators/hero_avatar_3.png",
        name: "Igor Kozhanov ",
        social: "https://twitter.com/Igor211988189",
        profile: "Red",
      },
      {
        image: "/featuredCreators/hero_image_4.png",
        avatar: "/featuredCreators/hero_avatar_4.png",
        name: "ORBICS",
        social: "https://twitter.com/OrbicsNFT?t=KRA-mPDPPop5L6opSYjUtg&s=09",
        profile: "Orbics",
      },
      {
        image: "/featuredCreators/hero_image_5.png",
        avatar: "/featuredCreators/hero_avatar_5.png",
        name: "Gojuku",
        social: "https://twitter.com/Gojuku_",
        profile: "David",
      },
    ],
  };
  const featuredNFTConfig = {
    title: "Featured NFTs",
    description: "",
    imageHeight: 109.34, // in pixel (required)
    gap: 16, // in pixel (required)
    imageData: [
      {
        img: "/InfoSection/Archetypes.webp",
        title: "Archetypes",
        name: "Archetypes",
        author: "Oblitus Mantra",
        href: "https://twitter.com/Archetypes0nft",
        rows: 3,
        column: 1,
      },
      {
        img: "/InfoSection/arto.webp",
        title: "Arto DAO",
        name: "Arto DAO",
        author: "Arto DAO",
        href: "https://twitter.com/ArtoDAO",
        rows: 2,
      },
      {
        img: "/InfoSection/Aequanimity.webp",
        title: "Aequanimity",
        name: "Aequanimity",
        author: "pratykarya",
        href: "https://twitter.com/PratykArya",
        rows: 2,
      },
      {
        img: "/InfoSection/Christiopkosin.webp",
        title: "Christiopkosin",
        name: "Christiopkosin",
        author: "Christiopkosin",
        href: "",
        rows: 2,
      },
      {
        img: "/InfoSection/the_dansant.webp",
        title: "The Dansant",
        name: "The Dansant",
        author: "the_dansant",
        href: "https://twitter.com/the_dansant",
        rows: 3,
      },
      {
        img: "/InfoSection/mantlewarriors.webp",
        title: "Mantle Warriors",
        name: "Mantle Warriors",
        author: "mantlewarriors",
        href: "https://twitter.com/mantlewarriors",
        rows: 2,
      },
      {
        img: "/InfoSection/Pinnacle2.webp",
        title: "Pinnacle",
        name: "Pinnacle",
        author: "Zeelectric",
        href: "",
        rows: 3,
      },
      {
        img: "/InfoSection/OblitusMantra2.webp",
        title: "Oblitus Mantra - Forgotten Worlds",
        name: "Oblitus Mantra",
        author: "Oblitus",
        href: "https://twitter.com/Oblitus_NFT",
        rows: 3,
      },
      {
        img: "/InfoSection/Pinnacle1.webp",
        title: "Pinnacle",
        name: "Pinnacle",
        author: "Zeelectric",
        href: "",
        rows: 3,
      },
      {
        img: "/InfoSection/OblitusMantra1.webp",
        title: "Oblitus Mantra - Forgotten Worlds",
        name: "Oblitus Mantra",
        author: "Oblitus",
        href: "https://twitter.com/Oblitus_NFT",
        rows: 1,
      },
    ],
  };
  const fastAndEasySectionConfigData = {
    paperVariant: "translucent",
    optionStyles: {
      minWidth: "calc( 208px + 44px)",
      padding: "16px 22px",
      transition: "all 0.3s ease-in-out",
    },
    optionContainerStyles: { gap: "16px" },
    optionContainerStyleClasses: `d-flex align-items-center justify-content-center flex-wrap mt-5`,
    textAlign: "center",
    title: "Fast & Easy Setup",
    titleComponent: "",
    titleVariant: "h1",
    titleColor: "text-primary",
    description:
      "Scramble an account in an instant to create NFTs and publish in quick easy steps",
    descriptionStyle: { maxWidth: "min(836px, 100%)", margin: "0 auto" }, // object of styles or false
    featuresArray: [
      {
        href: "",
        icon: "/FastAndEasySetup/createUsername.png", // put icon component or url >>don't forgot to change the below
        title: "",
        titleVariant: "h4",
        titleColor: "text-white",
        description: "Create Username ",
        descriptionVariant: "body1",
        descriptionColor: "text-white",
      },
      {
        href: "",
        icon: "/FastAndEasySetup/createNFT.png", // put icon component or url >>don't forgot to change the below
        title: "",
        titleVariant: "h4",
        titleColor: "text-white",
        description: "Create NFTs using Schemas ",
        descriptionVariant: "body1",
        descriptionColor: "text-white",
      },
      {
        href: "",
        icon: "/FastAndEasySetup/publish.png", // put icon component or url >>don't forgot to change the below
        title: "",
        titleVariant: "h4",
        titleColor: "text-white",
        description: "Publish to Marketplace",
        descriptionVariant: "body1",
        descriptionColor: "text-white",
      },
    ],
  };
  const initiativeSectionConfigData = {
    listStyle: {
      background: "transparent",
    },
    paperVariant: "translucent",
    textAlign: "center", // >>> default: left
    title: "Fractionalized NFTs",
    titleOnLeft: false, // >>> default: false
    titleColor: "text-white",
    titleVariant: "body1",
    description:
      "Find the right balance between rare ownership and economic affordability. Embrace your inner piece. Coming Soon. ",
    descriptionVariant: "body1",
    descriptionOnLeft: false, // >>> default: false
    descriptionStyle: false, // object of styles or false
    backgroundImage: "", // "url('/images/mantleplace.png')",
    leftImage: "/AdvantageSection/advantage_bg.png", // "url('/images/mantleplace.png')",
    ctas: [],
    initiatives: [
      {
        icon: "/AdvantageSection/owners.png", // add component: <Icon sx={styles} /> or url: "https://icon.png"
        title: "One NFT but several owners",
        description: "",
      },
      {
        icon: "/AdvantageSection/secure.png", // add component: <Icon sx={styles} /> or url: "https://icon.png"
        title: "Decentralized, multi-ownership & Secure",
        description: "",
      },
      {
        icon: "/AdvantageSection/affordability.png", // add component: <Icon sx={styles} /> or url: "https://icon.png"
        title: "Enables rare-ownership affordability",
        description: "",
      },
      {
        icon: "/AdvantageSection/fractionalized.png", // add component: <Icon sx={styles} /> or url: "https://icon.png"
        title: "Fractionalize any asset easily",
        description: "",
      },
    ],
  };

  //
  const chainSectionConfigData = {
    textAlign: "", // >>> default: left
    title: "The AssetMantle Chain",
    subTitle:
      "The AssetMantle Blockchain leverages the following web3 standards which makes it pioneer the NFT Ecosphere",
    subSectionTitle: "$MNTL",
    subSectionTitleIcon: "/ChainSection/mntl.svg", // url:"/someImage.png">>> default: none
    subSectionTitleVariant: "h1",
    subSectionTitleColor: "light",
    subSectionDescription:
      "The native token which powers the AssetMantle’s NFT Economy",
    subSectionDescriptionVariant: "subtitle2",
    subSectionDescriptionColor: "secondary.light",
    descriptionVariant: "subtitle2",
    descriptionColor: "primary",
    subSectionDescriptionStyle: {
      textAlign: { xs: "center" },
      mx: { xs: "auto !important", sm: "0 !important" },
      maxWidth: "400px",
    }, // object of styles or false
    backgroundImage: "", // "url('/images/mantleplace.png')",
    defaultChainDescription:
      "One of the pioneering zones of the rich Cosmos Ecosystem ",
    ctas: [
      {
        title: "Buy Now ",
        url: "https://app.osmosis.zone/?from=USDC&to=MNTL",
        icon: "bi-cart-fill", // url: "/" or component: <Icon/>
        target: "_blank", // valid values: "_blank", "_self", "_parent", "_top" >>>default: "_self"
        disabled: false,
        variant: "primary",
      },
      {
        title: "Learn More",
        url: "/about#mntl-token-info",
        icon: "bi-chevron-right", // url: "/" or component: <Icon/>
        target: "_blank", // valid values: "_blank", "_self", "_parent", "_top" >>>default: "_self"
        disabled: false,
        variant: "secondary",
      },
    ],
    chains: [
      {
        icon: "/ChainSection/cosmos.svg", // add url: "https://icon.png"
        alt: "modular",
        title: "Implements modular framework from the popular Cosmos SDK",
      },
      {
        icon: "/ChainSection/modular.svg", // add url: "https://icon.png"
        alt: "cosmos",
        title: "Imbibes the leading Tendermint BFT Consensus Engine",
      },
      {
        icon: "/ChainSection/connected.svg", // add url: "https://icon.png"
        alt: "connected",

        title: "Incorporates connectedness with Cosmos Zones using IBC",
      },
      {
        icon: "/ChainSection/interNft.svg", // add url: "https://icon.png"
        alt: "internft",
        title: "Inherits the plan to build open standards for interchain NFT",
      },
    ],
  };
  const socialProofSectionConfigData = {
    textAlign: "center",
    title: "Featured In",
    titleComponent: "",
    titleVariant: "h1",
    description:
      "A quick look into the social proof aspect surrounding AssetMantle to get the bearings of its wide adoption factor",
    descriptionStyle: { maxWidth: "min(836px, 100%)", margin: "0 auto" }, // object of styles or false
    features: [
      // object template
      // {
      //   title: "",
      //   image: "",
      //   link: "",
      // },
      {
        title: "yahoo finance",
        image: "/SocialProofSection/yahoo_finance.png",
        link: "https://finance.yahoo.com/news/assetmantle-launches-long-awaited-mainnet-150000066.html",
      },
      {
        title: "coinquora",
        image: "/SocialProofSection/coinquora.png",
        link: "https://coinquora.com/avigation-ai-collabs-with-assetmantle-to-revamp-nfts-via-ai-integration/",
      },
      {
        title: "digitaljournal",
        image: "/SocialProofSection/digitaljournal.png",
        link: "https://www.digitaljournal.com/pr/assetmantle-launches-its-long-awaited-mainnet",
      },
      {
        title: "investing.com",
        image: "/SocialProofSection/investing.png",
        link: "https://m.investing.com/news/cryptocurrency-news/avigation-ai-collabs-with-assetmantle-to-revamp-nfts-via-ai-integration-2820215?ampMode=1",
      },
      {
        title: "techbullion",
        image: "/SocialProofSection/techbullion.png",
        link: "https://techbullion.com/talking-nfts-with-assetmantle-founder-deepanshu-tripathi/",
      },
    ],
    optionContainerStyles: {},
  };
  const teamSectionConfigData = {
    memberColor: "text-primary",
    textAlign: "center", // >>> default: left
    title: "Meet our team",
    titleComponent: "h2",
    titleVariant: "h1",
    description:
      "Browse through the highly skilled and qualified AssetMantle cohort who make the scalable value creation happen",
    descriptionStyle: {
      mt: 4,
      mx: "auto",
      maxWidth: "min(836px, 100%)",
      margin: "0 auto",
    }, // object of styles or false
    nameVariant: "caption",
    nameColor: "text-primary",
    descriptionVariant: "subtitle2",
    designationVariant: "body2",
    designationColor: "text-white",
    members: [
      // object template
      // {
      //   image: "/TeamSection/https://assetmantle.one/images/team/deepanshu.png",
      //   name: "Deepanshu Kumar",
      //   designation: "Founder, Core - Product Planning & Implementation​",
      //   designationType: "",
      //   social: [
      //     {
      //       icon: "LinkedIn",
      //       href: "",
      //     },
      //     {
      //       icon: "Twitter",
      //       href: "",
      //     },
      //     {
      //       icon: "GitHub",
      //       href: "",
      //     },
      //     {
      //       icon: "Behance",
      //       href: "",
      //     },
      //     {
      //       icon: "Website",
      //       href: "",
      //     },
      //   ],
      // },
      {
        image: "/TeamSection/deepanshu.png",
        name: "Deepanshu Tripathi",
        designation: "Founder, Core - Product Planning & Implementation​",
        designationType: "Founding",
        social: [
          {
            icon: "LinkedIn",
            href: "http://linkedin.com/in/deepanshutr",
          },
          {
            icon: "Twitter",
            href: "https://twitter.com/deepanshutr",
          },
          {
            icon: "GitHub",
            href: "https://github.com/deepanshutr",
          },
        ],
      },
      {
        image: "/TeamSection/abhinav.png",
        name: "Abhinav Kumar",
        designation: "Co-Founder, Core - Product Planning & Implementation​",
        designationType: "Founding",
        social: [
          {
            icon: "LinkedIn",
            href: "https://www.linkedin.com/in/avkr003/",
          },
          {
            icon: "Twitter",
            href: "https://twitter.com/avkr003",
          },
          {
            icon: "GitHub",
            href: "https://github.com/avkr003",
          },
        ],
      },
      {
        image: "/TeamSection/kamlesh.png",
        name: "Kamlesh Parikarath",
        designation: "Core - Product Development & Growth",
        designationType: "Founding",
        social: [
          {
            icon: "LinkedIn",
            href: "https://www.linkedin.com/in/kamleshparikarath/",
          },
          {
            icon: "Twitter",
            href: "https://twitter.com/0xKombos",
          },
          {
            icon: "GitHub",
            href: "https://github.com/kombos",
          },
          {
            icon: "Behance",
            href: "https://www.behance.net/kombos",
          },
        ],
      },
      {
        image: "/TeamSection/naman.png",
        name: "Naman Kabra",
        designation: "Core - Business Development & Growth",
        designationType: "Founding",
        social: [
          {
            icon: "LinkedIn",
            href: "https://www.linkedin.com/in/namankabra/",
          },
          {
            icon: "Twitter",
            href: "https://twitter.com/307naman",
          },
          {
            icon: "GitHub",
            href: "https://github.com/nk307",
          },
        ],
      },
      {
        image: "/TeamSection/sachin.png",
        name: "Sachin Matta",
        designation: "Core - Product Marketing and Communications",
        designationType: "Founding",
        social: [
          {
            icon: "LinkedIn",
            href: "https://www.linkedin.com/in/sachin-matta/",
          },
          {
            icon: "Twitter",
            href: "https://twitter.com/ciberexplosion",
          },
          {
            icon: "GitHub",
            href: "https://github.com/ciberexplosion",
          },
        ],
      },
      {
        image: "/TeamSection/prabhav.png",
        name: "Prabhav Varambally",
        designation: "Core - Business Operations & Strategy",
        designationType: "Founding",
        social: [
          {
            icon: "LinkedIn",
            href: "https://www.linkedin.com/in/prabhavtv/",
          },
          {
            icon: "Twitter",
            href: "https://twitter.com/Prabhavv_",
          },
          {
            icon: "GitHub",
            href: "https://github.com/Prabhavv",
          },
        ],
      },
      {
        image: "/TeamSection/harman.png",
        name: "Harman Sohi",
        designation: "Design Lead",
        designationType: "Design",
        social: [
          {
            icon: "LinkedIn",
            href: "https://www.linkedin.com/in/harman-sohi-she-her-2590b8b4/",
          },
          {
            icon: "Twitter",
            href: "https://twitter.com/NotHarmanSohi",
          },
          {
            icon: "Behance",
            href: "https://www.behance.net/sohiharman",
          },
        ],
      },
      {
        image: "/TeamSection/sarin.png",
        name: "Sarin Venugopal",
        designation: "Product Marketing & Operations",
        designationType: "Developer",
        social: [
          {
            icon: "LinkedIn",
            href: "https://www.linkedin.com/in/sarin-venugopal-3123638/",
          },
          {
            icon: "Twitter",
            href: "https://twitter.com/the_bad_apple_",
          },
        ],
      },
      {
        image: "/TeamSection/pratik.png",
        name: "Pratik Balar",
        designation: "DevOps & Infrastructure",
        designationType: "Founding",
        social: [
          {
            icon: "LinkedIn",
            href: "https://www.linkedin.com/in/pratikbalar",
          },
          {
            icon: "Twitter",
            href: "https://twitter.com/pratikbin",
          },
          {
            icon: "GitHub",
            href: "https://github.com/pratikbin",
          },
          {
            icon: "Website",
            href: "https://pratikb.in/",
          },
        ],
      },
      {
        image: "/TeamSection/sarvagya.png",
        name: "Sarvagya Sagar",
        designation: "Research and DevSecOps​",
        designationType: "Founding",
        social: [
          {
            icon: "LinkedIn",
            href: "https://www.linkedin.com/in/iamsarvagyaa/",
          },
          {
            icon: "Twitter",
            href: "https://twitter.com/iamsarvagyaa",
          },
          {
            icon: "GitHub",
            href: "https://github.com/iamsarvagyaa",
          },
          {
            icon: "Website",
            href: "https://sarvagya.me",
          },
        ],
      },
      {
        image: "/TeamSection/arun.png",
        name: "Arun Ramesan",
        designation: "Visual Designer​",
        designationType: "Design",
        social: [
          {
            icon: "LinkedIn",
            href: "https://www.linkedin.com/in/arunramesan",
          },
          {
            icon: "Behance",
            href: "https://www.behance.net/arxwork",
          },
          {
            icon: "Instagram",
            href: "https://www.instagram.com/arxwork",
          },
        ],
      },
      {
        image: "/TeamSection/mrinal.png",
        name: "Mrinal Vishwanath",
        designation: "Product Marketing and PR Strategist",
        designationType: "Developer",
        social: [
          {
            icon: "LinkedIn",
            href: "https://www.linkedin.com/in/mrinal-vishwanath-813a07137",
          },
          {
            icon: "Twitter",
            href: "https://twitter.com/MrinalVishwana1",
          },
          {
            icon: "GitHub",
            href: "https://github.com/MrinalVishy",
          },
        ],
      },
      {
        image: "/TeamSection/jagdish.png",
        name: "Jagdish Chudasama",
        designation: "UI/UX Developer​",
        designationType: "Developer",
        social: [
          {
            icon: "LinkedIn",
            href: "https://www.linkedin.com/in/chudasama-jagdish-3759981b1/",
          },
          {
            icon: "GitHub",
            href: "https://github.com/chudasamajd",
          },
          {
            icon: "Twitter",
            href: "https://twitter.com/JagdishChudas15",
          },
          {
            icon: "Website",
            href: `https://chudasamajd.github.io/chudasamajd`,
          },
        ],
      },
      {
        image: "/TeamSection/namaha.png",
        name: "Namaha Shetty",
        designation: "UI/UX Designer",
        designationType: "Design",
        social: [
          {
            icon: "Website",
            href: "https://www.namahashetty.com",
          },
          {
            icon: "LinkedIn",
            href: "https://www.linkedin.com/in/namahashetty/",
          },
        ],
      },
      {
        image: "/TeamSection/akhlak.png",
        name: "Akhlak Hossain",
        designation: "UI Developer",
        designationType: "Developer",
        social: [
          {
            icon: "LinkedIn",
            href: "https://www.linkedin.com/in/akhlakhossainjim/",
          },
          {
            icon: "GitHub",
            href: "http://github.com/Akhlak-Hossain-Jim",
          },
          {
            icon: "Website",
            href: "http://ahjim.com/",
          },
        ],
      },
      {
        image: "/TeamSection/ankit.png",
        name: "Ankit Kumar",
        designation: "Blockchain Developer",
        designationType: "Founding",
        social: [
          {
            icon: "LinkedIn",
            href: "https://www.linkedin.com/in/0xankit",
          },
          {
            icon: "Twitter",
            href: "https://mobile.twitter.com/me_0xankit",
          },
          {
            icon: "GitHub",
            href: "https://github.com/0xankit",
          },
        ],
      },
      {
        image: "/TeamSection/aditya.png",
        name: "Aditya Nalini",
        designation: "NFT Strategist",
        designationType: "Developer",
        social: [
          {
            icon: "LinkedIn",
            href: "https://www.linkedin.com/in/adinalini",
          },
          {
            icon: "Twitter",
            href: "https://twitter.com/adinalini",
          },
          {
            icon: "GitHub",
            href: "https://github.com/adinalini",
          },
        ],
      },
      {
        image: "/TeamSection/rohit.png",
        name: "Rohit Sharma",
        designation: "Creators Communications and Integrations",
        designationType: "Developer",
        social: [
          {
            icon: "Twitter",
            href: "https://twitter.com/SharmaJiKaSon1",
          },
          {
            icon: "Website",
            href: "https://www.instagram.com/schoolboy_sharma",
          },
        ],
      },
    ],
    linkStyles: {},
    optionStyles: {
      background: "transparent",
      maxWidth: "227px",
      height: "100%",
      boxShadow: "none",
    },
  };
  const universeSectionConfigData = {
    sectionTitle: "The Mantle Universe",
    sectionSubTitle:
      "Apart from the AssetMantle ecosystem, there is an extended ecosystem called MantleLabs that commits to community driven development",
    paperVariant: "translucent",
    buttonVariant: "button-primary",
    titleColor: "text-primary",
    listVariant: "body1",
    titleVariant: "h4",
    subSections: [
      {
        logo: "/static/Logo.svg",
        alt: "Assetmantle logo",
        styles: { width: "80%" },
        items: [
          {
            image: "UniverseSection/Mantle_Products.png",
            title: "Mantle Products",
            subData: [
              "MantlePlace",
              "MantleBuilder",
              "MantleWallet",
              "MantleExplorer",
              "+2 More",
            ],
          },
          {
            image: "UniverseSection/Mantle_Chain.png",
            title: "Mantle-1 Chain",
            subData: ["$MNTL Token", "Foundation Validators"],
          },
          {
            image: "UniverseSection/Mantle_Creatives.png",
            title: "Mantle Creatives",
            subData: ["Membership NFTs", "Mantlers", "AssMan NFTs"],
          },
          {
            image: "UniverseSection/Community_Initiatives.png",
            title: "Community Initiatives",
            subData: ["InterNFT", "Artist4Web3", "MantleArmy"],
          },
        ],
      },
      {
        logo: "UniverseSection/MLLogo.png",
        alt: "Assetmantle logo",
        styles: { height: "75%" },
        items: [
          {
            image: "UniverseSection/Partnerships.png",
            title: "Partnerships",
            subData: ["Vaildators", "DAOs", "Investors", "Media", "+2 More"],
          },
          {
            image: "UniverseSection/Ecosystem_Projects.png",
            title: "Ecosystem Projects",
            subData: ["MyriadFlow", "RushRaids", "Xtrathin"],
          },
          {
            image: "UniverseSection/Integrations.png",
            title: "Integrations",
            subData: ["Modules", "NFT Toolings", "Analytics", "LaunchPads"],
          },
          {
            image: "UniverseSection/Grants.png",
            title: "Grants",
            subData: [
              "Internal Development",
              "External Integrations",
              "Products",
            ],
          },
        ],
      },
    ],
    leftSubsectionData: {
      logo: "/static/Logo.svg",
      alt: "Assetmantle logo",
      items: [
        {
          image: "UniverseSection/Mantle_Products.png",
          title: "Mantle Products",
          subData: [
            "MantlePlace",
            "MantleBuilder",
            "MantleWallet",
            "MantleExplorer",
            "+2 More",
          ],
        },
        {
          image: "UniverseSection/Mantle_Chain.png",
          title: "Mantle-1 Chain",
          subData: ["$MNTL Token", "Foundation Validators"],
        },
        {
          image: "UniverseSection/Mantle_Creatives.png",
          title: "Mantle Creatives",
          subData: ["Membership NFTs", "Mantlers", "AssMan NFTs"],
        },
        {
          image: "UniverseSection/Community_Initiatives.png",
          title: "Community Initiatives",
          subData: ["InterNFT", "Artist4Web3", "MantleArmy"],
        },
      ],
    },
    rightSubsectionData: {
      logo: "UniverseSection/MLLogo.png",
      alt: "Assetmantle logo",
      items: [
        {
          image: "UniverseSection/Partnerships.png",
          title: "Partnerships",
          subData: ["Vaildators", "DAOs", "Investors", "Media", "+2 More"],
        },
        {
          image: "UniverseSection/Ecosystem_Projects.png",
          title: "Ecosystem Projects",
          subData: ["MyriadFlow", "RushRaids", "Xtrathin"],
        },
        {
          image: "UniverseSection/Integrations.png",
          title: "Integrations",
          subData: ["Modules", "NFT Toolings", "Analytics", "LaunchPads"],
        },
        {
          image: "UniverseSection/Grants.png",
          title: "Grants",
          subData: [
            "Internal Development",
            "External Integrations",
            "Products",
          ],
        },
      ],
    },
    headerLogoStyles: {
      height: "170px",
    },
  };
  const explanationSectionData = {
    questionVariant: "h1",
    answerVariant: "subtitle2",
    question: "What is AssetMantle?",
    answer:
      "AssetMantle is a multi-tenant NFT marketplace framework that enables creators and collectors to securely mint, own, and trade digital assets on its fast-finality blockchain.",
  };
  const visionMissionSectionData = {
    paperVariant: "translucent",
    titleVariant: "h4",
    infoVariant: "subtitle2",
    title: "Vision & Mission",
    backgroundImage:
      "url(/VisionMissionSection/Mantler_Vision_Mission.png) no-repeat left center / contain",
    list: [
      {
        title: "Vision",
        info: "Build an open-source, community-driven framework for inter-chain NFTs and metadata standardization by contributing to interNFT standard",
      },
      {
        title: "Mission",
        info: " Provide a platform that enables a diverse set of NFTs use cases that extend beyond arts and collectibles and can potentially change the representation of rights and ownership of real-world assets like real estate and other comodities.",
      },
    ],
  };
  const tokenInfoData = {
    title: "$MNTL Token Info",
    description:
      "Find out how the protocol token of AssetMantle chain is optimized for maximizing yield  across various DEXs",
    left: {
      titleVariant: "h2",
      titleColor: "text-primary",
      title: "$MNTL",
      values: [
        {
          key: "APR",
          value: "140%",
        },
      ],
      ctas: [
        {
          title: "Airdrops",
          url: "https://airdrop.assetmantle.one/",
          endIcon: "bi-arrow-down-circle", // url: "/" or component: <Icon/>
          target: "_blank", // valid values: "_blank", "_self", "_parent", "_top" >>>default: "_self"
          disabled: false,
          variant: "button-primary",
          size: "lg",
        },
      ],
      mntlCoinImage: "/TokenInfoSection/mntlCoin.png",
      references: [
        {
          logo: "/TokenInfoSection/CoinGeckoLogo.png",
          name: "CoinGecko",
          url: "https://www.coingecko.com/en/coins/assetmantle/usd",
          target: "_blank",
        },
        {
          logo: "/TokenInfoSection/coinMarketCap.png",
          name: "CoinMarketCap",
          url: "https://coinmarketcap.com/currencies/assetmantle/",
          target: "_blank",
        },
        {
          logo: "/TokenInfoSection/Etherscan.png",
          name: "Etherscan",
          url: "https://etherscan.io/token/0x2c4f1df9c7de0c59778936c9b145ff56813f3295",
          target: "_blank",
        },
      ],
      data: [
        {
          title: "USD: ",
          variant: "h4",
          textColor: "text-white",
          valueColor: "text-primary",
        },
        {
          title: "APR: ",
          variant: "h4",
          textColor: "text-white",
          valueColor: "text-primary",
          value: "140%",
        },
      ],
    },
    right: {
      buttonVariant: "button-primary",
      paperVariant: "translucent",
      textVariant: "caption",
      textColor: "text-primary",
      tableHeaders: ["", "Exchange", "Pair", "Price"],
      tokenFrom2: [
        {
          logo: "/TokenInfoSection/osmosis.png",
          name: "Osmosis",
          pair: "MNTL/OSMO",
          title: "Buy",
          subTitle: "",
          url: "https://app.osmosis.zone/pool/738",
          target: "_blank",
          row: 2,
          col: 1,
        },
        {
          logo: "/TokenInfoSection/osmosis.png",
          name: "Osmosis",
          pair: "MNTL/OSMO",
          title: "Earn",
          subTitle: "(OSMO Pool)",
          url: "https://app.osmosis.zone/pool/690",
          target: "_blank",
          row: 5,
          col: 3,
        },
        {
          logo: "/TokenInfoSection/Uniswap.png",
          name: "Uniswap",
          pair: "MNTL/ERC20",
          title: "Buy",
          subTitle: "ERC20",
          url: "https://app.uniswap.org/#/swap?chain=mainnet",
          target: "_blank",
          row: 4,
          col: 1,
        },
        {
          logo: "/TokenInfoSection/Uniswap.png",
          name: "Uniswap",
          pair: "MNTL/ERC20",
          title: "Earn",
          subTitle: "(ETH Pool)",
          url: "https://app.uniswap.org/#/add/ETH/0x2C4F1DF9c7DE0C59778936C9b145fF56813F3295/3000",
          target: "_blank",
          row: 4,
          col: 5,
        },

        {
          logo: "/TokenInfoSection/osmosis.png",
          name: "LBank",
          pair: "MNTL/USDT",
          title: "Buy",
          subTitle: "",
          url: "https://app.osmosis.zone/pool/738",
          target: "_blank",
          row: 2,
          col: 1,
        },
        {
          logo: "/TokenInfoSection/Uniswap.png",
          name: "MEXC Global",
          pair: "MNTL/ERC20",
          title: "Buy",
          subTitle: "ERC20",
          url: "https://app.uniswap.org/#/swap?chain=mainnet",
          target: "_blank",
          row: 4,
          col: 1,
        },
        {
          logo: "/TokenInfoSection/osmosis.png",
          name: "P2B",
          pair: "MNTL/USDC",
          title: "Buy",
          subTitle: "(USDC Pool)",
          url: "https://app.osmosis.zone/pool/738",
          target: "_blank",
          row: 1,
          col: 3,
        },
        {
          logo: "/TokenInfoSection/osmosis.png",
          name: "Coinsbit",
          pair: "MNTL/USDC",
          title: "Buy",
          subTitle: "(USDC Pool)",
          url: "https://app.osmosis.zone/pool/738",
          target: "_blank",
          row: 1,
          col: 3,
        },
      ],
    },
  };
  const tokenUtilityData = {
    title: "$MNTL Token Utility",
    paperVariant: "translucent",
    optionsTitleVariant: "h3",
    optionsDescriptionVariant: "body1",
    optionsColor: "primary.main",
    description:
      "AssetMantle's protocol token is created using latest best practices for tokenization, realizing multiple types of utilities for its holder",
    options: [
      {
        icon: "/TokenUtilitySection/governance.svg",
        title: "Governance",
        description:
          "$MNTL token is required as a deposit to create on-chain governance proposals. The token holders can then vote on these proposals with their staked $MNTL. It also has in-built security against drastic protocol changes to make it more incremental.",
      },
      {
        icon: "/TokenUtilitySection/secure.svg",
        title: "Network Security",
        description:
          "MantleChain, runs on the Tendermint core, a dPoS (delegated Proof-of-Stake) based pBFT (Practical Byzantine Fault Tolerance) consensus engine. The token holders can get incentivized delegating their tokens to validators of their choice, improving security.",
      },
      {
        icon: "/TokenUtilitySection/Transactions.svg",
        title: "NFT Transactions",
        description:
          "$MNTL will be used to pay for transaction fees, platform commission, and creator royalties. The token will also be used for the curation of the platform (via curation DAO) which plays an integral role in an NFT marketplace governance.",
      },
      {
        icon: "/TokenUtilitySection/Incentive.svg",
        title: "Economic Incentive",
        description:
          "Initially, the token will also help bootstrap genesis creators, early adopters, early stakers. Post genesis will have campaigns to bootstrap the creators, liquidity providers, NFT minting & trading activities in several batches, and curator communities.",
      },
    ],
  };
  const tokenDistributionData = {
    title: "$MNTL Token Distribution",
    description:
      "Find out the crucial tokenomics pertaining to the protocol token of AssetMantle, optimizing it for long term value creation",
    chart: "/TokenDistributionSection/releaseSchedule.svg",
    chartName: "Release Schedule",
    paperVariant: "translucent",
    numberVariant: "h3",
    titleVariant: "body1",
    numberColor: "text-primary",
    overview: {
      genesis: {
        title: "Total Genesis Supply",
        number: "300M",
      },
      circular: {
        title: "Total Circulating Supply",
        number: "78M",
      },
      description:
        "At genesis, 26% (78 million $MNTL) of the supply will be circulating to bootstrap liquidity and incentivize the early adopters of the platform.",
    },
    pies: [
      {
        chart: "/TokenDistributionSection/genesisSupply.svg",
        name: "Genesis Supply",
      },
      {
        chart: "/TokenDistributionSection/circulatingSupply.svg",
        name: "Circulating Supply",
      },
    ],
  };
  const FAQSectionData = {
    accordionVariant: "translucent",
    accordionTextVariant: "body1",
    list: [
      {
        title: "What is an NFT?",
        info: "NFT stands for “Non-Fungible Token”. An NFT is an immutable token on the blockchain. It is cryptographically protected and can be treated as a digital certificate of ownership on the blockchain. NFTs on AssetMantle are part of the growing Cosmos ecosystem.",
      },
      {
        title: "What is MantlePlace?",
        info: "MantlePlace is the native NFT marketplace if AssetMantle.All creators on MantlePlace are verified for authenticity in an effort to minimize instances of frauds and rug pulls.",
      },
      {
        link: {
          text: "here",
          href: "https://docs.assetmantle.one/MantleBuilder_Overview",
        },
        title: "What is MantleBuilder?",
        info: "MantleBuilder is the revolutionary no-code NFT marketplace builder from AssetMantle. It's simple drag-and-drop interface empowers creators and brands to build their robust and custom-branded NFT storefronts in the Cosmos ecosystem. Read more about MantleBuilder",
      },
      {
        title: "What is IBC Protocol?",
        info: "IBC stands for “Inter-Blockchain Communication”. It is an open-source protocol that allows sovereign blockchains in the Cosmos ecosystem to transfer assets and information among themselves. This empowers NFT creators and collectors to utilize   their NFTs across different chains and metaverses.",
      },
      {
        title: "What makes AssetMantle special?",
        info: "AssetMantle is built from the ground up to completely redefine digital asset ownership. Some noteworthy features include:",
        accordionList: [
          "Support for fractional NFTs",
          "Negligible gas fees",
          "Ledger hardware support",
          "InterNFT standard",
          "IPFS storage mechanism",
          "Cross-chain interoperability",
          "Support for multiple asset types",
          "Real-world asset tokenization",
        ],
      },
    ],
  };
  const collabsHeroSectionConfigData = {
    titleVariant: "h1",
    subTitleVariant: "secondary.light",
    titleColor: "subtitle2",
    subTitleColor: "primary.main",
    title: "The Mantle Universe",
    subTitle:
      "Apart from the AssetMantle ecosystem, there is an extended ecosystem called MantleLabs that commits to community driven development",
    image: "/CollabsHeroSection/mantleUniverse.png",
  };
  const collabsSectionConfigData = {
    cardVariant: "translucent",
    textFieldVariant: "outlined",
    nameVariant: "h4",
    nameColor: "primary.main",
    filterColor: "primary",
    descriptionVariant: "body2",
    list: [
      {
        icon: "/CollabsSection/osmosis.png",
        name: "Osmosis",
        filters: [
          "MantleChain Partners",
          "Token Integration Partners",
          "MantleLabs",
        ],
        dimensions: { width: "124px", height: "30px" },
        description:
          "The leading decentralized Cosmos exchange to swap, earn, and build",
      },
      {
        icon: "/CollabsSection/axelar.png",
        name: "Axelar",
        filters: ["MantleChain Partners", "MantleLabs"],
        dimensions: { width: "113px", height: "27px" },
        description:
          "Axelar delivers secure cross-chain communication for Web3. ",
      },
      {
        icon: "/CollabsSection/crescent.png",
        name: "Crescent",
        filters: ["MantleChain Partners", "MantleLabs"],
        dimensions: { width: "143px", height: "30px" },
        description:
          "Innovating DeFi investment through advancements in inter-blockchain technology",
      },
      {
        icon: "/CollabsSection/juno.png",
        name: "Juno",
        filters: ["MantleChain Partners", "MantleLabs"],
        dimensions: { width: "76px", height: "24px" },
        description:
          " A digital banking platform that offers a high-yield checking account",
      },
      {
        icon: "/CollabsSection/evmos.png",
        name: "Evmos",
        filters: ["MantleChain Partners", "MantleLabs"],
        dimensions: { width: "136px", height: "30px" },
        description:
          "Bringing the world of Ethereum-based applications and assets to the Cosmos ecosystem",
      },
      {
        icon: "/CollabsSection/gravitybridge.png",
        name: "Gravity Bridge",
        filters: [
          "MantleChain Partners",
          "Token Integration Partners",
          "MantleLabs",
        ],
        dimensions: { width: "173px", height: "25px" },
        description:
          "An open, decentralized bridge enabling interoperability & liquidity between blockchains",
      },
      {
        icon: "/CollabsSection/OKC.png",
        name: "OKC",
        filters: ["MantleChain Partners", "MantleLabs"],
        dimensions: { width: "67px", height: "36px" },
        description:
          "A high-performance, decentralized, smart contract-enabled blockchain, optimized for trading",
      },
      {
        icon: "/CollabsSection/rushraids.png",
        name: "RushRaids",
        filters: ["MantleGrants", "Ecosystem Projects", "MantleLabs"],
        dimensions: { width: "161px", height: "30px" },
        description:
          "First Multiplayer Battle Royale Game where you play and earn Cryptos",
      },
      {
        icon: "/CollabsSection/myriadflow.png",
        name: "MyriadFlow",
        filters: [
          "MantleGrants",
          "Ecosystem Projects",
          "interNFT",
          "MantleLabs",
        ],
        dimensions: { width: "140px", height: "38px" },
        description:
          "An innovative platform to explore & launch NFT Experiences",
      },
      {
        icon: "/CollabsSection/glitchcandies.png",
        name: "GlitchCandies",
        filters: ["MantleGrants", "MantleLabs"],
        dimensions: { width: "153px", height: "25px" },
        description:
          "Hand made collection of evolving sculptures, minted on Cosmos ecosystem",
      },
      {
        heading: "Kevin Harrison",
        name: "Kevin Harrison",
        filters: ["MantleGrants", "MantleLabs"],
        dimensions: { width: "100px", height: "100px" },
        description:
          "A proof-of-ownership Discord bot for AssetMantle NFTs with selective access control",
      },
      {
        icon: "/CollabsSection/lumoslabs.png",
        name: "LumosLabs",
        filters: ["MantleGrants", "MantleLabs"],
        dimensions: { width: "107px", height: "27px" },
        description:
          "A world built for developers, designed to open access to Web3 opportunities",
      },
      {
        icon: "/CollabsSection/cosmostation.png",
        name: "Cosmostation",
        filters: ["Validators", "MantleLabs"],
        dimensions: { width: "195.43px", height: "36px" },
        description:
          "A performant Wallet for Cosmos Hub and related zone chains",
      },
      {
        icon: "/CollabsSection/everstake.png",
        name: "Everstake",
        filters: ["Validators", "MantleLabs"],
        dimensions: { width: "150px", height: "24px" },
        description:
          "The biggest decentralized staking provider in the blockchain industry",
      },
      {
        icon: "/CollabsSection/citadel_one.png",
        name: "Citadel.one",
        filters: ["Validators", "MantleLabs"],
        dimensions: { width: "135px", height: "22px" },
        description:
          "An all-in-one staking interface with a user-friendly non-custodial platform",
      },
      {
        icon: "/CollabsSection/forbole.png",
        name: "Forbole",
        filters: ["Validators", "MantleLabs"],
        dimensions: { width: "140.97px", height: "28px" },
        description:
          "A pioneer in building blockchain solutions, increasing accessibility to people",
      },
      {
        icon: "/CollabsSection/p2p.png",
        name: "P2P.org",
        filters: ["Validators", "MantleLabs"],
        dimensions: { width: "109px", height: "29px" },
        description:
          "Helping investors compound their crypto investments through non-custodial staking",
      },
      {
        icon: "/CollabsSection/dsrv.png",
        name: "DSRV",
        filters: ["Validators", "MantleLabs"],
        dimensions: { width: "90px", height: "27px" },
        description:
          "Leading validator and blockchain infrastructure provider based in Seoul",
      },
      {
        icon: "/CollabsSection/infstones.png",
        name: "INFStones",
        filters: ["Validators", "MantleLabs"],
        dimensions: { width: "158px", height: "26px" },
        description:
          "Build decentralized applications on more than 60 leading blockchain protocols",
      },
      {
        icon: "/CollabsSection/cros-nest.png",
        name: "Cros-Nest",
        filters: ["Validators", "MantleLabs"],
        dimensions: { width: "47px", height: "47px" },
        description:
          "State-of-the-art distributed & redundant validator infrastructure for PoS Blockchains",
      },
      {
        icon: "/CollabsSection/blockscope.png",
        name: "BlockScope",
        filters: ["Validators", "MantleLabs"],
        dimensions: { width: "163px", height: "29.29px" },
        description:
          "A reliable Staking service in multiple chains for crypto investors",
      },
      {
        icon: "/CollabsSection/frens.png",
        name: "Frens",
        filters: ["Validators", "MantleLabs"],
        dimensions: { width: "111px", height: "39px" },
        description:
          "A community growth platform to help NFT, DAO, DeFi and blockchain gaming projects",
      },
      {
        icon: "/CollabsSection/allnodes.png",
        name: "AllNodes",
        filters: ["Validators", "MantleLabs"],
        dimensions: { width: "151px", height: "31px" },
        description:
          "A non-custodial platform where you can partake in Staking in over 55 protocols",
      },
      {
        icon: "/CollabsSection/droid.png",
        name: "DroidDAO",
        filters: ["Partnerships", "MantleLabs"],
        dimensions: { width: "96px", height: "31px" },
        description:
          "a DAO that aims to capitalize upon leading, crypto native opportunities",
      },
      {
        icon: "/CollabsSection/nerdhaven.png",
        name: "NHDAO",
        filters: ["Partnerships", "MantleLabs"],
        dimensions: { width: "165.55px", height: "15.77px" },
        description:
          "Web3 consultancy with optimum experience in marketing and launching of NFTs",
      },
      {
        icon: "/CollabsSection/avigation.png",
        name: "AvigationAI",
        filters: ["Partnerships", "MantleLabs"],
        dimensions: { width: "145px", height: "29px" },
        description:
          "An AI specialization company that identifies potentially viral content",
      },
      {
        icon: "/CollabsSection/tanukiverse.png",
        name: "Tanukiverse",
        filters: ["Partnerships", "Metaverse", "MantleLabs"],
        dimensions: { width: "150px", height: "35x" },
        description:
          "A community driven explore-to-earn game governed by Tanuki NFTs",
      },
      {
        icon: "/CollabsSection/vorlds.png",
        name: "Vorlds",
        filters: ["Partnerships", "Metaverse", "MantleLabs"],
        dimensions: { width: "99px", height: "31px" },
        description:
          "A creator based Metaverse platform that supports Polkadot & Ethereum ecosystems",
      },
      {
        icon: "/CollabsSection/junoswap.png",
        name: "JunoSwap",
        filters: ["Token Integration Partners", "MantleLabs"],
        dimensions: { width: "134px", height: "32px" },
        description:
          "First ever interchain DEX focussed on CW-20 (CosmWasm) asset adoption",
      },
      {
        icon: "/CollabsSection/stakingrewards.png",
        name: "StakingRewards",
        filters: ["Token Integration Partners", "MantleLabs"],
        dimensions: { width: "170px", height: "27px" },
        description:
          "Crypto Staking explorer providing data for staking and crypto-growth tools",
      },
      {
        icon: "/CollabsSection/polkadot.png",
        name: "PolkaDot",
        filters: ["interNFT", "AssetMantle"],
        dimensions: { width: "144px", height: "30.72px" },
        description:
          "An multichain ecosystem enabling truly interoperable decentralized web",
      },
      {
        icon: "/CollabsSection/memora.png",
        name: "Memora",
        filters: ["interNFT", "AssetMantle"],
        dimensions: { width: "128px", height: "32px" },
        description:
          "A Fintech Ecosystem that allows all actors of the arts world to monetize the assets",
      },
      {
        icon: "/CollabsSection/ixo.png",
        name: "IXO",
        filters: ["interNFT", "AssetMantle"],
        dimensions: { width: "59px", height: "35px" },
        description:
          "An Internet-of-Impact for sustainable social, environmental and economic development",
      },
      {
        icon: "/CollabsSection/hypersign.png",
        name: "HyperSign",
        filters: ["interNFT", "AssetMantle"],
        dimensions: { width: "148px", height: "38px" },
        description:
          "An Identity and access management solution to authenticate employees and customers",
      },
      {
        icon: "/CollabsSection/interchainfoundation.png",
        name: "interChain Foundation",
        filters: ["interNFT", "AssetMantle"],
        dimensions: { width: "106px", height: "29px" },
        description:
          "Stewards of interchain, funding the creation of interoperable decentralized ecosystem",
      },
      {
        icon: "/CollabsSection/iris.png",
        name: "IRIS",
        filters: ["interNFT", "AssetMantle"],
        dimensions: { width: "115px", height: "34px" },
        description:
          "A Cosmos zone enabling cross-chain interoperability through a unified service model",
      },
      {
        icon: "/CollabsSection/akash.png",
        name: "AkashNetwork",
        filters: ["interNFT", "AssetMantle"],
        dimensions: { width: "134px", height: "37px" },
        description:
          "A decentralized cloud for DApps, nodes, and other blockchain network components",
      },
      {
        icon: "/CollabsSection/AM_Logo.png",
        name: "Membership NFTs",
        filters: ["MantleCreatives", "AssetMantle"],
        dimensions: { width: "100px", height: "100px" },
        description:
          "An access to unlock a variety of exclusive utilities and rewards from the MantleEcosystem ",
      },
      {
        icon: "/CollabsSection/AM_Logo.png",
        name: "Mantlers",
        filters: ["MantleCreatives", "AssetMantle"],
        dimensions: { width: "100px", height: "100px" },
        description: "A collection of PFP based NFTs, released in MantlePlace",
      },
      {
        icon: "/CollabsSection/mantleplace.svg",
        name: "MantlePlace",
        filters: ["Products", "AssetMantle"],
        dimensions: { width: "153px", height: "27px" },
        description:
          "A decentralized, no-code NFT marketplace bringing trading features to creators with an easy to use interface",
      },
      {
        icon: "/CollabsSection/mantlebuilder.svg",
        name: "MantleBuilder",
        filters: ["Products", "AssetMantle"],
        dimensions: { width: "168.75px", height: "27px" },
        description:
          "No-code, customizable NFT marketplace builder helping creators build their own custom-branded NFT storefronts",
      },
      {
        icon: "/CollabsSection/mantlewallet.svg",
        name: "MantleWallet",
        filters: ["Products", "Integrations", "AssetMantle"],
        dimensions: { width: "159.39px", height: "27px" },
        description: "A non-custodial blockchain wallet for AssetMantle chain",
      },
      {
        icon: "/CollabsSection/AM_Logo.png",
        name: "Mantle-1",
        filters: ["Products", "AssetMantle"],
        dimensions: { width: "100px", height: "100px" },
        description: "The core Layer 1 interoperable chain of AssetMantle",
      },
      {
        heading: "$MNTL Token",
        icon: "/CollabsSection/mantletoken.png",
        name: "$MNTL Token",
        filters: ["Products", "AssetMantle"],
        dimensions: { width: "164.95px", height: "27px" },
        description:
          "The primary governance and staking token of AssetMantle that secures the MantleChain",
      },
      {
        icon: "/CollabsSection/AM_Logo.png",
        name: "AssetMantle SDK ",
        filters: ["Products", "Integrations", "AssetMantle"],
        dimensions: { width: "100px", height: "100px" },
        description:
          "The custom SDK modules of AssetMantle chain enabling NFT based transactions",
      },
      {
        icon: "/CollabsSection/asguard.svg",
        name: "AsGuard",
        filters: ["Products", "AssetMantle"],
        dimensions: { width: "112.96px", height: "27px" },
        description:
          "An AssetMantle validator providing highly incentivised staking services",
      },
      {
        icon: "/CollabsSection/internft.png",
        name: "interNFT",
        filters: ["Community Initiatives", "AssetMantle"],
        dimensions: { width: "103.54px", height: "53.96px" },
        description:
          "A community-led initiative to develop Interchain standards for Non-fungible Tokens ",
      },
      {
        icon: "/CollabsSection/AM_Logo.png",
        name: "Artist4Web3",
        filters: ["Community Initiatives", "AssetMantle"],
        dimensions: { width: "100px", height: "100px" },
        description:
          "A community initiative to increase the awareness and knowledge about NFTs and help onboard artists to Web3",
      },
      {
        icon: "/CollabsSection/xtrathin.png",
        name: "Xtrathin",
        filters: ["Ecosystem Projects", "MantleLabs"],
        dimensions: { width: "100px", height: "100px" },
        description:
          "Utility Focused NFT Collection to create sub-communities around Joint Robots",
      },
      {
        icon: "/CollabsSection/analytics.png",
        name: "Analytics",
        filters: ["Integrations", "MantleLabs"],
        dimensions: { width: "100px", height: "100px" },
        description:
          "The dashboard for Insights for all AssetMantle transfer of value",
      },
    ],
    dropdownFilters: [
      { text: "All Projects" },
      { text: "AssetMantle" },
      { text: "MantleLabs" },
    ],
  };

  return {
    props: {
      heroSectionConfigData,
      featureSectionConfigData,
      diverseActorSectionConfigData,
      gallerySectionConfigData,
      featuredCreatorConfig,
      featuredNFTConfig,
      fastAndEasySectionConfigData,
      initiativeSectionConfigData,

      //
      chainSectionConfigData,
      socialProofSectionConfigData,
      teamSectionConfigData,
      universeSectionConfigData,
      explanationSectionData,
      visionMissionSectionData,
      tokenInfoData,
      tokenUtilityData,
      tokenDistributionData,
      FAQSectionData,
      collabsHeroSectionConfigData,
      collabsSectionConfigData,
    },
  };
}
