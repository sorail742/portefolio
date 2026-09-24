import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { MotionConfig } from "framer-motion";
import Home from "./pages/Home";
import CommandPalette from "./components/CommandPalette";
import { LanguageProvider } from "./i18n/LanguageContext";

// Chargée à la demande : évite d'inclure jsPDF/html2canvas dans le bundle de l'accueil
const CVPage = lazy(() => import("./pages/CVPage"));

function App() {
  return (
    // reducedMotion="user" : respecte le réglage « réduire les animations » du système
    <LanguageProvider>
    <MotionConfig reducedMotion="user">
      <Router>
        <CommandPalette />
        <Suspense fallback={<div className="min-h-screen bg-darkBg" />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cv" element={<CVPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </Router>
    </MotionConfig>
    </LanguageProvider>
  );
}

export default App;
