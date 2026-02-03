import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cookie Policy | Convenzioni Per Te',
  description: 'Informativa sull\'utilizzo dei cookie sul sito Convenzioni Per Te',
};

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-white p-8 shadow-md lg:p-12">
          {/* Header */}
          <h1 className="mb-8 text-3xl font-bold text-gray-900 sm:text-4xl">
            Cookie Policy
          </h1>
          <p className="mb-8 text-sm text-gray-500">
            Ultimo aggiornamento: 3 febbraio 2026
          </p>

          {/* Introduzione */}
          <section className="mb-8">
            <p className="text-base leading-relaxed text-gray-700">
              Questa Cookie Policy spiega come il sito{' '}
              <strong>convenzioniperte.it</strong> utilizza i cookie e tecnologie
              simili per garantire il corretto funzionamento del sito e migliorare
              l'esperienza di navigazione degli utenti.
            </p>
          </section>

          {/* Cosa sono i Cookie */}
          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-semibold text-gray-900">
              1. Cosa sono i Cookie
            </h2>
            <p className="text-base leading-relaxed text-gray-700">
              I cookie sono piccoli file di testo che vengono memorizzati sul tuo
              dispositivo (computer, tablet, smartphone) quando visiti un sito web. I
              cookie permettono al sito di riconoscere il tuo dispositivo e di
              ricordare determinate informazioni sulle tue preferenze o azioni passate.
            </p>
          </section>

          {/* Tipologie di Cookie Utilizzati */}
          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-semibold text-gray-900">
              2. Tipologie di Cookie Utilizzati
            </h2>
            
            {/* Cookie Tecnici */}
            <div className="mb-6">
              <h3 className="mb-3 text-xl font-semibold text-gray-800">
                2.1 Cookie Tecnici (Necessari)
              </h3>
              <div className="rounded-lg border-l-4 border-blue-500 bg-blue-50 p-6">
                <p className="mb-3 text-base font-semibold text-blue-900">
                  ✓ Cookie tecnici attivi
                </p>
                <p className="text-base leading-relaxed text-gray-800">
                  Il nostro sito utilizza esclusivamente{' '}
                  <strong>cookie tecnici necessari</strong> al corretto funzionamento
                  della piattaforma. Questi cookie sono gestiti automaticamente da{' '}
                  <strong>Vercel</strong>, il servizio di hosting utilizzato per il
                  caricamento e la distribuzione delle pagine web.
                </p>
                <div className="mt-4 space-y-2 text-sm text-gray-700">
                  <p>
                    <strong>Finalità:</strong> Garantire il funzionamento tecnico del
                    sito, la gestione delle sessioni e il caricamento corretto delle
                    pagine.
                  </p>
                  <p>
                    <strong>Durata:</strong> Sessione o durata tecnica necessaria.
                  </p>
                  <p>
                    <strong>Base giuridica:</strong> Non richiedono consenso in quanto
                    strettamente necessari per la fornitura del servizio richiesto
                    dall'utente (art. 122 del Codice Privacy).
                  </p>
                </div>
              </div>
            </div>

            {/* Cookie di Profilazione */}
            <div className="mb-6">
              <h3 className="mb-3 text-xl font-semibold text-gray-800">
                2.2 Cookie di Profilazione
              </h3>
              <div className="rounded-lg border-l-4 border-green-500 bg-green-50 p-6">
                <p className="mb-3 text-base font-semibold text-green-900">
                  ✓ Non utilizziamo cookie di profilazione
                </p>
                <p className="text-base leading-relaxed text-gray-800">
                  Al momento, <strong>non utilizziamo cookie di profilazione</strong>{' '}
                  per creare profili utente o tracciare le tue abitudini di
                  navigazione. I tuoi dati di navigazione non vengono utilizzati per
                  finalità pubblicitarie o di marketing personalizzato.
                </p>
              </div>
            </div>

            {/* Cookie di Terze Parti */}
            <div>
              <h3 className="mb-3 text-xl font-semibold text-gray-800">
                2.3 Cookie di Terze Parti
              </h3>
              <div className="rounded-lg border-l-4 border-green-500 bg-green-50 p-6">
                <p className="mb-3 text-base font-semibold text-green-900">
                  ✓ Nessun tracciamento pubblicitario di terze parti
                </p>
                <p className="mb-4 text-base leading-relaxed text-gray-800">
                  Il nostro sito <strong>non utilizza</strong> cookie di tracciamento
                  pubblicitario o di analisi di terze parti, come:
                </p>
                <ul className="ml-6 space-y-2 text-base text-gray-700">
                  <li className="flex items-start">
                    <span className="mr-2 text-green-600">✗</span>
                    <span>Google Analytics</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-green-600">✗</span>
                    <span>Facebook Pixel</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-green-600">✗</span>
                    <span>Cookie pubblicitari di remarketing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-green-600">✗</span>
                    <span>Altri sistemi di tracciamento comportamentale</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Gestione dei Cookie */}
          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-semibold text-gray-900">
              3. Come Gestire i Cookie
            </h2>
            <p className="mb-4 text-base leading-relaxed text-gray-700">
              Puoi controllare e gestire i cookie attraverso le impostazioni del tuo
              browser. La maggior parte dei browser ti permette di:
            </p>
            <ul className="ml-6 space-y-2 text-base text-gray-700">
              <li className="flex items-start">
                <span className="mr-2 text-blue-600">•</span>
                <span>Visualizzare quali cookie sono stati impostati;</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-blue-600">•</span>
                <span>Bloccare cookie di terze parti;</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-blue-600">•</span>
                <span>Bloccare tutti i cookie provenienti da siti specifici;</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-blue-600">•</span>
                <span>Cancellare tutti i cookie alla chiusura del browser;</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-blue-600">•</span>
                <span>Eliminare tutti i cookie memorizzati.</span>
              </li>
            </ul>
            <div className="mt-6 rounded-lg bg-yellow-50 p-4">
              <p className="text-sm text-yellow-800">
                <strong>Attenzione:</strong> Disabilitare i cookie tecnici potrebbe
                impedire il corretto funzionamento del sito o limitarne alcune
                funzionalità.
              </p>
            </div>
          </section>

          {/* Link Utili per la Gestione */}
          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-semibold text-gray-900">
              4. Guide per la Gestione dei Cookie nei Browser
            </h2>
            <p className="mb-4 text-base leading-relaxed text-gray-700">
              Consulta le guide ufficiali dei principali browser per gestire i cookie:
            </p>
            <ul className="ml-6 space-y-2 text-base text-gray-700">
              <li className="flex items-start">
                <span className="mr-2 text-blue-600">•</span>
                <span>
                  <strong>Chrome:</strong>{' '}
                  <a
                    href="https://support.google.com/chrome/answer/95647"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Gestione dei cookie in Chrome
                  </a>
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-blue-600">•</span>
                <span>
                  <strong>Firefox:</strong>{' '}
                  <a
                    href="https://support.mozilla.org/it/kb/gestione-dei-cookie"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Gestione dei cookie in Firefox
                  </a>
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-blue-600">•</span>
                <span>
                  <strong>Safari:</strong>{' '}
                  <a
                    href="https://support.apple.com/it-it/guide/safari/sfri11471/mac"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Gestione dei cookie in Safari
                  </a>
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-blue-600">•</span>
                <span>
                  <strong>Edge:</strong>{' '}
                  <a
                    href="https://support.microsoft.com/it-it/microsoft-edge/eliminare-i-cookie-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Gestione dei cookie in Edge
                  </a>
                </span>
              </li>
            </ul>
          </section>

          {/* Vercel */}
          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-semibold text-gray-900">
              5. Servizio di Hosting - Vercel
            </h2>
            <div className="rounded-lg bg-gray-50 p-6">
              <p className="mb-3 text-base leading-relaxed text-gray-800">
                Il nostro sito è ospitato su <strong>Vercel</strong>, una piattaforma
                di hosting e distribuzione di applicazioni web. Vercel utilizza cookie
                tecnici necessari per:
              </p>
              <ul className="ml-6 space-y-2 text-base text-gray-700">
                <li className="flex items-start">
                  <span className="mr-2 text-blue-600">•</span>
                  <span>Gestire il caricamento ottimizzato delle pagine;</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-blue-600">•</span>
                  <span>Garantire la sicurezza e le prestazioni del sito;</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-blue-600">•</span>
                  <span>Prevenire attacchi informatici e tentativi di frode.</span>
                </li>
              </ul>
              <p className="mt-4 text-sm text-gray-600">
                Per maggiori informazioni, consulta la{' '}
                <a
                  href="https://vercel.com/legal/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Privacy Policy di Vercel
                </a>
                .
              </p>
            </div>
          </section>

          {/* Aggiornamenti Futuri */}
          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-semibold text-gray-900">
              6. Aggiornamenti Futuri
            </h2>
            <p className="text-base leading-relaxed text-gray-700">
              In futuro, potremmo decidere di integrare strumenti di analisi o
              tracciamento per migliorare i nostri servizi. In tal caso, questa Cookie
              Policy verrà aggiornata per riflettere le modifiche e, ove necessario,
              richiederemo il tuo consenso esplicito prima di installare cookie non
              tecnici.
            </p>
          </section>

          {/* Modifiche */}
          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-semibold text-gray-900">
              7. Modifiche alla Cookie Policy
            </h2>
            <p className="text-base leading-relaxed text-gray-700">
              Ci riserviamo il diritto di modificare o aggiornare questa Cookie Policy
              in qualsiasi momento. Le modifiche saranno pubblicate su questa pagina
              con indicazione della data di ultimo aggiornamento.
            </p>
          </section>

          {/* Contatti */}
          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-semibold text-gray-900">
              8. Contatti
            </h2>
            <div className="rounded-lg bg-blue-50 p-6">
              <p className="mb-3 text-base leading-relaxed text-gray-800">
                Per qualsiasi domanda o chiarimento riguardante l'utilizzo dei cookie,
                puoi contattarci via email:
              </p>
              <p className="text-lg font-semibold text-blue-900">
                info@convenzioniperte.it
              </p>
            </div>
          </section>

          {/* Footer */}
          <div className="mt-12 border-t border-gray-200 pt-8">
            <p className="text-center text-sm text-gray-500">
              Navigando su questo sito, accetti l'utilizzo dei cookie tecnici
              necessari al suo funzionamento.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
