export default function HeroSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Titolo Principale Centrato */}
        <div className="mb-12 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
            Connettiamo persone e brand attraverso il valore
          </h1>
        </div>

        {/* Layout a Due Colonne */}
        <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
          {/* Colonna Sinistra - Target Welfare */}
          <div className="rounded-2xl bg-blue-50 p-8 shadow-sm transition-shadow hover:shadow-md lg:p-10">
            <div className="flex h-full flex-col">
              <h2 className="mb-4 text-2xl font-bold text-blue-900 md:text-3xl">
                Valorizza il tuo Team
              </h2>
              <p className="mb-6 grow text-base text-gray-700 md:text-lg">
                Il portale vantaggi VipSaving per aziende e associazioni che
                vogliono offrire di più.
              </p>
              <div>
                <a
                  href="#soluzioni-welfare"
                  className="inline-flex items-center rounded-md bg-blue-600 px-6 py-3 text-base font-medium text-white shadow-sm transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Scopri Soluzioni HR
                  <svg
                    className="ml-2 h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Colonna Destra - Target Partner */}
          <div className="rounded-2xl bg-gray-50 p-8 shadow-sm transition-shadow hover:shadow-md lg:p-10">
            <div className="flex h-full flex-col">
              <h2 className="mb-4 text-2xl font-bold text-gray-900 md:text-3xl">
                Promuovi il tuo Brand
              </h2>
              <p className="mb-6 grow text-base text-gray-700 md:text-lg">
                Entra nel nostro network e raggiungi migliaia di utenti
                profilati con offerte esclusive.
              </p>
              <div>
                <a
                  href="#contatti"
                  className="inline-flex items-center rounded-md border-2 border-blue-600 bg-white px-6 py-3 text-base font-medium text-blue-600 shadow-sm transition-colors hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Diventa Partner
                  <svg
                    className="ml-2 h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
