import { AnimatePresence } from 'framer-motion';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Nav from './components/layout/Nav.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Project from './pages/Project.jsx';
import Problem from './pages/Problem.jsx';
import History from './pages/History.jsx';
import Components from './pages/Components.jsx';
import HowToUse from './pages/HowToUse.jsx';
import Contact from './pages/Contact.jsx';

export default function App() {
  const location = useLocation();

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Nav />
      <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="/problem" element={<Problem />} />
          <Route path="/history" element={<History />} />
          <Route path="/components" element={<Components />} />
          <Route path="/how-to-use" element={<HowToUse />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AnimatePresence>
      <div className="grain" aria-hidden="true" />
    </>
  );
}
