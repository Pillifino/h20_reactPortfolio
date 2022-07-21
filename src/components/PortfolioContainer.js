import React, { useState } from "react";
import NavTabs from "./NavTabs";
import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Resume from "./Resume";
import Footer from "./Footer";

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
