import { Container } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Image from "next/image";
import Logo from "../public/static/Logo.svg";
import AppFooter from "../views/AppFooter";

export default function Layout({ children }) {
  return (
    <>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <Image src={Logo} layout="intrinsic" alt="logo" />
        </Toolbar>
      </AppBar>
      <main>{children}</main>
      <AppFooter />
    </>
  );
}
