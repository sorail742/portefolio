import React from 'react';
import generatePDF from 'react-to-pdf';
import { Download } from 'lucide-react';

export default function CVExportButton({ targetRef }) {
  return (
    <button
      onClick={() => generatePDF(targetRef, {filename: 'CV_Sory_Keita.pdf'})}
      className="fixed bottom-8 right-8 z-50 flex items-center gap-2 px-6 py-3 bg-cyanAccent text-darkBg font-bold rounded-full shadow-[0_0_20px_#00d4ff] hover:scale-105 transition-transform"
    >
      <Download size={20} />
      Télécharger en PDF
    </button>
  );
}
