export default function VipSavingDetail() {
  return (
    <section id="vipsaving" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Layout a Due Colonne */}
        <div className="grid gap-12 md:grid-cols-2 md:items-center lg:gap-16">
          {/* Colonna Sinistra - Video */}
          <div className="order-2 md:order-1">
            <div className="aspect-4/3 overflow-hidden rounded-2xl shadow-lg">
              <iframe
                src="https://player.vimeo.com/video/470471067?h=868d18bdf8"
                className="h-full w-full"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title="VipSaving Platform"
              ></iframe>
            </div>
          </div>

          {/* Colonna Destra - Contenuto */}
          <div className="order-1 md:order-2">
            {/* Titolo */}
            <h2 className="mb-6 text-3xl font-bold text-gray-900 sm:text-4xl">
              VipSaving: Il risparmio entra nel quotidiano
            </h2>

            {/* Elenco Puntato con Icone */}
            <ul className="mb-8 space-y-4">
              <li className="flex items-start">
                <div className="shrink-0">
                  <svg
                    className="h-6 w-6 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="ml-3 text-lg text-gray-700">
                  <span className="font-semibold">Oltre 500 brand leader</span>{' '}
                  (Amazon, Zalando, Booking)
                </p>
              </li>

              <li className="flex items-start">
                <div className="shrink-0">
                  <svg
                    className="h-6 w-6 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="ml-3 text-lg text-gray-700">
                  <span className="font-semibold">Cashback immediato</span> e
                  Coupon
                </p>
              </li>

              <li className="flex items-start">
                <div className="shrink-0">
                  <svg
                    className="h-6 w-6 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="ml-3 text-lg text-gray-700">
                  <span className="font-semibold">App mobile intuitiva</span>
                </p>
              </li>

              <li className="flex items-start">
                <div className="shrink-0">
                  <svg
                    className="h-6 w-6 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="ml-3 text-lg text-gray-700">
                  <span className="font-semibold">
                    Geolocalizzazione delle offerte
                  </span>
                </p>
              </li>
            </ul>

            {/* Box Risparmio Medio */}
            <div className="rounded-xl bg-blue-50 p-6 border-l-4 border-blue-600">
              <p className="text-lg font-semibold text-blue-900">
                💰 Un risparmio medio di{' '}
                <span className="text-2xl font-bold">800€ l'anno</span> per ogni
                utente
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
