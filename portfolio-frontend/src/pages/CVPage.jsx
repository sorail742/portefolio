import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import CV from '../components/CV';
import CVExportButton from '../components/CVExportButton';

export default function CVPage() {
  const targetRef = useRef();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-darkBg text-slate-100 py-12 px-4">
      <div className="max-w-[210mm] mx-auto mb-8">
        <Link to="/" className="inline-flex items-center text-cyanAccent hover:text-cyanAccent/80 font-mono transition-colors">
          <ArrowLeft className="mr-2" size={20} /> Retour au portfolio
        </Link>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="pb-24" // Extra padding for the fixed export button
      >
        <CV ref={targetRef} />
      </motion.div>

      <CVExportButton targetRef={targetRef} />
    </div>
  );
}
