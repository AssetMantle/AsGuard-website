import Footer from "../views/Footer";
import Header from "../views/Header";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className="mx-auto" style={{ width: "min(1440px,100%)" }}>
        {children}
      </main>
      <Footer />
    </>
  );
}
