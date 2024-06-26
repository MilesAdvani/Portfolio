import Header from "../header/Header.jsx";
import Footer from "../footer/Footer.jsx";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}