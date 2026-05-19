import React, { useState } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { Download, Loader } from 'lucide-react';

export default function CVExportButton({ targetRef }) {
  const [loading, setLoading] = useState(false);

  const handleDownload = async () => {
    if (!targetRef?.current) {
      alert("Erreur : impossible de trouver le contenu du CV.");
      return;
    }

    setLoading(true);

    try {
      const element = targetRef.current;

      // Capture the CV element as a canvas
      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        backgroundColor: '#ffffff',
        logging: false,
        scrollX: 0,
        scrollY: 0,
        width: element.scrollWidth,
        height: element.scrollHeight,
      });

      const imgData = canvas.toDataURL('image/jpeg', 1.0);

      // A4 dimensions in mm
      const pdfWidth = 210;
      const pdfHeight = 297;

      // Calculate the image height to fit the full content on ONE page
      const canvasRatio = canvas.width / canvas.height;
      const imgHeightInPdf = pdfWidth / canvasRatio;

      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4',
      });

      if (imgHeightInPdf <= pdfHeight) {
        // Content fits in a single A4 page — center it vertically if needed
        const yOffset = (pdfHeight - imgHeightInPdf) / 2;
        pdf.addImage(imgData, 'JPEG', 0, yOffset > 5 ? 0 : 0, pdfWidth, imgHeightInPdf);
      } else {
        // Content is taller than A4 — scale it down to fit perfectly on one page
        const scaledHeight = pdfHeight;
        const scaledWidth = pdfHeight * canvasRatio;
        const xOffset = (pdfWidth - scaledWidth) / 2;
        pdf.addImage(imgData, 'JPEG', xOffset > 0 ? xOffset : 0, 0, scaledWidth > pdfWidth ? pdfWidth : scaledWidth, scaledHeight);
      }

      pdf.save('CV_Sory_Keita.pdf');
    } catch (error) {
      console.error('Erreur lors de la génération du PDF:', error);
      alert('Une erreur est survenue lors du téléchargement. Réessayez.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleDownload}
      disabled={loading}
      className={`fixed bottom-8 right-8 z-50 flex items-center gap-2 px-6 py-3 font-bold rounded-full shadow-[0_0_20px_#00d4ff] transition-all
        ${loading
          ? 'bg-slate-600 text-slate-300 cursor-not-allowed scale-100'
          : 'bg-cyanAccent text-darkBg hover:scale-105'
        }`}
    >
      {loading ? (
        <>
          <Loader size={20} className="animate-spin" />
          Génération...
        </>
      ) : (
        <>
          <Download size={20} />
          Télécharger en PDF
        </>
      )}
    </button>
  );
}
