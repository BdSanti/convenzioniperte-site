export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Colonna 1 - Brand */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold text-white">
              Convenzioni Per Te
            </h3>
            <p className="mt-4 text-sm">
              Connettiamo persone e brand attraverso il valore<br />
              <b>Studio De Santi Srls</b><br />
              Via Bari, 22 - 00161 Roma (RM)<br />
                P.IVA: 15093021002
            </p>
            <div className="mt-6">
              <p className="text-sm mb-3">Distribution Partner</p>
              <div className="bg-white p-3 rounded-lg inline-block">
                <img 
                  src="/vipdistrict-logo.webp" 
                  alt="VipDistrict - Part of the epassi Group" 
                  className="h-12 w-auto"
                />
              </div>
            </div>
          </div>

          {/* Colonna 2 - Soluzioni */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Soluzioni
            </h4>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#vipsaving" className="text-sm hover:text-white transition-colors">
                  VipSaving
                </a>
              </li>
              <li>
                <a href="#soluzioni-welfare" className="text-sm hover:text-white transition-colors">
                  VipReward
                </a>
              </li>
              <li>
                <a href="#soluzioni-welfare" className="text-sm hover:text-white transition-colors">
                  VipRecognition
                </a>
              </li>
              <li>
                <a href="#soluzioni-welfare" className="text-sm hover:text-white transition-colors">
                  VipWellbeing
                </a>
              </li>
            </ul>
          </div>

          {/* Colonna 3 - Legale */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Legale
            </h4>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="/privacy-policy" className="text-sm hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/cookie-policy" className="text-sm hover:text-white transition-colors">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-8 border-t border-gray-800 pt-8">
          <p className="text-center text-sm">
            © {new Date().getFullYear()} Convenzioni Per Te - Studio De Santi Srls - P.IVA: 15093021002. Tutti i diritti
            riservati.
          </p>
        </div>
      </div>
    </footer>
  );
}
