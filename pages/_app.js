import Head from "next/head";
import PropTypes from "prop-types";
import * as React from "react";
import Layout from "../components/layout";

// bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
// custom stylings
import "../config/styles.scss";

// Client-side cache, shared for the whole session of the user in the browser.

export default function MyApp(props) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <title>AsGuard</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
