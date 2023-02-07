import Document, { Head, Html, Main, NextScript } from "next/document";
import * as React from "react";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* PWA primary color */}
          <meta name="theme-color" content="#111111" />
          {/* open graphs start */}
          <meta property="og:site_name" content="AsGuard" />
          <meta property="og:url" content="https://assetmantle.one" />
          <meta property="al:web:url" content="https://assetmantle.one" />
          <meta property="og:image" content="/og.png" />
          <meta property="og:title" content="AsGuard" />
          <meta
            property="og:description"
            content="AssetMantle is a community-first platform for NFT creators and collectors. Use AssetMantle to create your own NFT store or to expand your collection of NFTs."
          />
          {/* open graphs end */}
        </Head>
        <body
          style={{
            // backgroundImage: "url('/images/Background_tile.webp')",
            // backgroundRepeat: "repeat-y",
            // backgroundPosition: "center top",
            // backgroundSize: "100%",
            backgroundColor: "#0f0f10",
          }}
        >
          <Main />
          <NextScript />
          {/* bootstrap */}
          <script
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3"
            crossOrigin="anonymous"
          ></script>
        </body>
      </Html>
    );
  }
}
