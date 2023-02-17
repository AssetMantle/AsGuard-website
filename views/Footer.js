import React, { useEffect, useRef } from "react";
import SocialIcons from "../components/SocialIcons";

export default function Footer(props) {
  const backToTopRef = useRef();

  const scrollTop = (e) => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    const scroll = (e) => {
      backToTopRef.current.style.opacity = window.scrollY / 600;
    };
    window.addEventListener("scroll", scroll);
    return () => window.removeEventListener("scroll", scroll);
  }, []);
  return (
    <>
      <footer sx={{ py: 8 }} className="py-3 bg-translucent text-white">
        <div className="container-lg d-flex flex-column gap-2">
          <div className="d-flex align-items-center pt-3 pb-3 px-2 gap-4 flex-column flex-lg-row justify-content-between align-items-center">
            {/* <div className="d-flex flex-column flex-sm-row justify-content-sm-between justify-content-lg-start align-items-center gap-4 w-100">
            </div> */}
            <img src="/static/asGuardLogo.svg" style={{ maxWidth: "200px" }} />
            <p className="caption text-center mb-0 text-white">
              © AsGuard {new Date().getFullYear()} - All rights reserved{" "}
            </p>
            <SocialIcons
              additionalClass="justify-content-center justify-content-md-start body1"
              spacing={3}
              size="small"
            />
            <div className="caption text-center d-flex align-items-center gap-2">
              <p className="mb-0 text-white">Powered by </p>
              <img src="/static/Logo.svg" style={{ maxWidth: "140px" }}></img>
            </div>
            {/* <div className="d-flex flex-column flex-sm-row justify-content-sm-between justify-content-lg-end align-items-center gap-4 w-100">
            </div> */}
          </div>
        </div>
      </footer>
      <div
        ref={backToTopRef}
        className="back-to-top text-white position-fixed bottom-0 end-0 pb-3 pe-3"
        style={{ opacity: "0" }}
        onClick={scrollTop}
      >
        <div
          className="d-flex align-items-center justify-content-center rounded-circle bg-gray-800 px-3 py-2  bg-yellow-100-hover"
          style={{ aspectRatio: "1/1", fontWeight: "900" }}
        >
          <i className="bi bi-chevron-up"></i>
        </div>
      </div>
    </>
  );
}
