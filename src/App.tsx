import { useState } from "react";
import { Navigation } from "./components/Navigation";
import { HomePage } from "./components/pages/HomePage";
import { AboutPage } from "./components/pages/AboutPage";
import { ServicesPage } from "./components/pages/ServicesPage";
import { ContactPage } from "./components/pages/ContactPage";
import { Footer } from "./components/Footer";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage onNavigate={setCurrentPage} />;
      case "about":
        return <AboutPage />;
      case "services":
        return <ServicesPage />;
      case "contact":
        return <ContactPage />;
      default:
        return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-950">
      <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
      {renderPage()}
      <Footer />
    </div>
  );
}
