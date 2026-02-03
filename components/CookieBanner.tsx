'use client';

import { useState, useEffect } from 'react';

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Controlla se l'utente ha già accettato i cookie
    const cookiesAccepted = localStorage.getItem('cookiesAccepted');
    
    if (!cookiesAccepted) {
      // Mostra il banner dopo 2 secondi
      const timer = setTimeout(() => {
        setShowBanner(true);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    // Salva il consenso in localStorage
    localStorage.setItem('cookiesAccepted', 'true');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 animate-slide-up">
      <div className="bg-gray-900 shadow-lg border-t border-gray-700">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            {/* Testo */}
            <p className="text-sm text-gray-300 text-center sm:text-left">
              Utilizziamo solo cookie tecnici per garantirti la migliore esperienza
              sul nostro sito.{' '}
              <a
                href="/cookie-policy"
                className="font-medium text-blue-400 underline hover:text-blue-300"
              >
                Scopri di più
              </a>
            </p>

            {/* Bottone Accetto */}
            <button
              onClick={handleAccept}
              className="shrink-0 rounded-md bg-blue-600 px-6 py-2 text-sm font-medium text-white hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
            >
              Accetto
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
