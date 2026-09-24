import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

// Chargée à la demande : évite d'inclure jsPDF/html2canvas dans le bundle de l'accueil
const CVPage = lazy(() => import("./pages/CVPage"));

function App() {
  return (
    <Router>
      <Suspense fallback={<div className="min-h-screen bg-darkBg" />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cv" element={<CVPage />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
