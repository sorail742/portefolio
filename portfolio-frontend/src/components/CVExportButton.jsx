import React from 'react';
import { Download } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

// Export via l'impression du navigateur (« Enregistrer au format PDF ») :
// PDF vectoriel, texte sélectionnable et lisible par les logiciels de recrutement (ATS).
// La mise en page A4 est définie dans index.css (@media print).
export default function CVExportButton() {
  const { t } = useLanguage();

  const handleDownload = () => {
    const previousTitle = document.title;
    document.title = 'CV_Sory_Keita'; // nom de fichier proposé par le navigateur
    window.print();
    document.title = previousTitle;
  };

  return (
    <button
      type="button"
      onClick={handleDownload}
      title={t('cv.downloadHint')}
      className="print:hidden fixed bottom-8 right-8 z-50 flex items-center gap-2 px-6 py-3 font-bold rounded-full shadow-[0_0_20px_#00d4ff] bg-cyanAccent text-darkBg hover:scale-105 transition-transform"
    >
      <Download size={20} />
      {t('cv.download')}
    </button>
  );
}
