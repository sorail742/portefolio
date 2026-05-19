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
        scale: 2,           // High resolution
        useCORS: true,      // Allow cross-origin images
        allowTaint: true,
        backgroundColor: '#ffffff',
        logging: false,
        scrollX: 0,
        scrollY: 0,
        width: element.scrollWidth,
        height: element.scrollHeight,
      });

      const imgData = canvas.toDataURL('image/jpeg', 0.98);

      // A4 dimensions in mm
      const pdfWidth = 210;
      const pdfHeight = 297;

      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4',
      });

      // Scale image to fit A4 page
      const canvasWidth = canvas.width;
      const canvasHeight = canvas.height;
      const ratio = canvasWidth / canvasHeight;
      const imgHeight = pdfWidth / ratio;

      // If content fits in one page
      if (imgHeight <= pdfHeight) {
        pdf.addImage(imgData, 'JPEG', 0, 0, pdfWidth, imgHeight);
      } else {
        // Multi-page support
        let yOffset = 0;
        while (yOffset < canvasHeight) {
          const pageCanvas = document.createElement('canvas');
          const pageHeight = Math.min(
            canvasHeight - yOffset,
            Math.floor((pdfHeight / pdfWidth) * canvasWidth)
          );
          pageCanvas.width = canvasWidth;
          pageCanvas.height = pageHeight;

          const ctx = pageCanvas.getContext('2d');
          ctx.fillStyle = '#ffffff';
          ctx.fillRect(0, 0, pageCanvas.width, pageCanvas.height);
          ctx.drawImage(canvas, 0, -yOffset);

          const pageImgData = pageCanvas.toDataURL('image/jpeg', 0.98);
          const pageImgHeight = (pageHeight / canvasWidth) * pdfWidth;

          if (yOffset > 0) pdf.addPage();
          pdf.addImage(pageImgData, 'JPEG', 0, 0, pdfWidth, pageImgHeight);

          yOffset += pageHeight;
        }
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
