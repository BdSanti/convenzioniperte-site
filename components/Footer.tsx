export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Colonna 1 - Brand */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold text-white">
              Convenzioni Per Te
            </h3>
            <p className="mt-4 text-sm">
              Connettiamo persone e brand attraverso il valore
            </p>
          </div>

          {/* Colonna 2 - Soluzioni */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Soluzioni
            </h4>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="text-sm hover:text-white transition-colors">
                  VipSaving
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-white transition-colors">
                  VipReward
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-white transition-colors">
                  VipRecognition
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-white transition-colors">
                  VipWellbeing
                </a>
              </li>
            </ul>
          </div>

          {/* Colonna 3 - Azienda */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Azienda
            </h4>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="text-sm hover:text-white transition-colors">
                  Chi Siamo
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-white transition-colors">
                  Diventa Partner
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-white transition-colors">
                  Area Riservata
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-white transition-colors">
                  Contatti
                </a>
              </li>
            </ul>
          </div>

          {/* Colonna 4 - Legale */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Legale
            </h4>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="text-sm hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-white transition-colors">
                  Cookie Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-white transition-colors">
                  Termini e Condizioni
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-8 border-t border-gray-800 pt-8">
          <p className="text-center text-sm">
            © {new Date().getFullYear()} Convenzioni Per Te. Tutti i diritti
            riservati.
          </p>
        </div>
      </div>
    </footer>
  );
}
