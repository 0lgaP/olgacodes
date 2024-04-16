import React, { lazy, Suspense } from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Experience from "./components/experience/Experience";
import Services from "./components/services/Services";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

const App = () => {
  const Portfolio = lazy(() => import("./components/portfolio/Portfolio"));

  return (
    <>
      <Header />
      <Suspense fallback={"..."}>
        <Portfolio />
      </Suspense>
      <Contact />
      <Footer />
    </>
  );
};

export default App;
