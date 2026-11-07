import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { personal } from "./data/personal";
import { projects } from "./data/projects";
import { Header, Footer } from "./components/Layout";
import { Home } from "./pages/Home";
import { CaseStudy } from "./pages/CaseStudy";
import { NotFound } from "./pages/NotFound";
export default function App() {
  const location = useLocation();
  useEffect(() => {
    const section = new URLSearchParams(location.search).get("section");
    if (section && location.pathname === "/") {
      requestAnimationFrame(() =>
        document.getElementById(section)?.scrollIntoView({
          behavior: matchMedia("(prefers-reduced-motion: reduce)").matches
            ? "instant"
            : "smooth",
        }),
      );
    } else window.scrollTo(0, 0);
    const project = projects.find(
      (p) => location.pathname === `/work/${p.slug}`,
    );
    document.title = `${project ? project.title + " — " : ""}${personal.name} - Portfolio`;
  }, [location]);
  return (
    <>
      <a
        href="#main"
        className="skip-link"
        onClick={(event) => {
          // Keep the skip link inside the page instead of changing HashRouter's route.
          event.preventDefault();
          document.getElementById("main")?.focus();
        }}
      >
        Skip to content
      </a>
      <Header />
      <main id="main" tabIndex={-1}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work/:slug" element={<CaseStudy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
