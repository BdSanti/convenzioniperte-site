export default function OtherSolutions() {
  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Titolo Sezione */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Un ecosistema completo per il coinvolgimento
          </h2>
        </div>

        {/* Griglia a 3 Card */}
        <div className="grid gap-8 md:grid-cols-3">
          {/* Card 1 - VipReward */}
          <div className="rounded-xl bg-white p-8 shadow-md transition-all hover:shadow-xl">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
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
                  d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                />
              </svg>
            </div>
            <h3 className="mb-3 text-xl font-bold text-gray-900">
              VipReward
            </h3>
            <p className="text-gray-600">
              Premi e incentivi digitali per obiettivi aziendali
            </p>
          </div>

          {/* Card 2 - VipRecognition */}
          <div className="rounded-xl bg-white p-8 shadow-md transition-all hover:shadow-xl">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
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
                  d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                />
              </svg>
            </div>
            <h3 className="mb-3 text-xl font-bold text-gray-900">
              VipRecognition
            </h3>
            <p className="text-gray-600">
              Valorizza il merito e migliora il clima organizzativo
            </p>
          </div>

          {/* Card 3 - VipWellbeing */}
          <div className="rounded-xl bg-white p-8 shadow-md transition-all hover:shadow-xl">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
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
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </div>
            <h3 className="mb-3 text-xl font-bold text-gray-900">
              VipWellbeing
            </h3>
            <p className="text-gray-600">
              Supporto fisico e mentale per i tuoi collaboratori
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
