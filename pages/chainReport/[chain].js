import React from "react";
import { useRouter } from "next/router";

const chainDetailConfigData = {
  title: "Chain STake details",
  description: "Find comprehensive details pertaining to",
  seperatorLineStyles: {
    width: "1px",
    height: "100%",
    background: "#F2AF13",
    borderRadius: "2px",
  },
};

export default function ChainReport() {
  const router = useRouter();
  const { chain } = router.query;
  return <></>;
}
