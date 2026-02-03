export default function PartnerSection() {
  return (
    <section id="per-i-partner" className="bg-gradient-to-b from-white to-gray-50 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Titolo Principale */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
            Porta la tua azienda dove nascono i desideri
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Diventa partner e accedi a un pubblico selezionato e motivato
          </p>
        </div>

        {/* Griglia a 3 Colonne */}
        <div className="grid gap-8 md:grid-cols-3">
          {/* Target Qualificato */}
          <div className="rounded-xl bg-white p-8 shadow-md transition-all hover:shadow-xl">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
              <svg
                className="h-8 w-8 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <h3 className="mb-4 text-xl font-bold text-gray-900">
              Target Qualificato
            </h3>
            <p className="text-gray-600">
              Gli utenti sono dipendenti e professionisti con alta propensione
              all'acquisto. Un pubblico selezionato che cerca attivamente
              vantaggi e opportunità di qualità.
            </p>
          </div>

          {/* Canale Esclusivo */}
          <div className="rounded-xl bg-white p-8 shadow-md transition-all hover:shadow-xl">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
              <svg
                className="h-8 w-8 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </div>
            <h3 className="mb-4 text-xl font-bold text-gray-900">
              Canale Esclusivo
            </h3>
            <p className="text-gray-600">
              L'offerta non è pubblica ma riservata esclusivamente ai membri,
              aumentando il prestigio del tuo brand e creando un senso di
              esclusività che valorizza i tuoi prodotti.
            </p>
          </div>

          {/* Strumenti Marketing */}
          <div className="relative rounded-xl bg-white p-8 shadow-md transition-all hover:shadow-xl">
            <span className="absolute right-4 top-4 rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white">
              Most Requested
            </span>
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
              <svg
                className="h-8 w-8 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
                />
              </svg>
            </div>
            <h3 className="mb-4 text-xl font-bold text-gray-900">
              Strumenti Marketing
            </h3>
            <p className="text-gray-600">
              Promuovi le tue offerte attraverso newsletter mirate, notifiche
              push personalizzate e vetrine dedicate sul portale per massimizzare
              la visibilità del tuo brand.
            </p>
          </div>
        </div>

        {/* CTA Opzionale */}
        <div className="mt-12 text-center">
          <a
            href="#contatti"
            className="inline-flex items-center rounded-md bg-blue-600 px-8 py-3 text-base font-medium text-white shadow-lg transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Richiedi Informazioni Partner
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
    </section>
  );
}
