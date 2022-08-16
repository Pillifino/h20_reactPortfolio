import React, { useState } from "react";
import NavTabs from "./NavTabs";
import About from "../pages/About";
import Portfolio from "../pages/Portfolio";
import Contact from "../pages/Contact";
import Resume from "../pages/Resume";
import Footer from "../pages/Footer";

import '../Styles/Main.css'
import '../Styles/Footer.css'

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("About");

  // TODO: Add a comment describing the functionality of this method
  const renderPage = () => {
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
    if (currentPage === "Contact") {
      return <Contact />;
    }
    return <Resume />;
  };

  const handlePageChange = (page) => setCurrentPage(page);
  console.log(currentPage);
  return (
    <>
      <header>
        <NavTabs
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />
      </header>
      <main>
        {renderPage()}
      </main>
      <footer>
          <Footer />
        </footer>
    </>
  );
}
