import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Convenzioni Per Te',
  description: 'Informativa sulla privacy e trattamento dei dati personali di Convenzioni Per Te',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-white p-8 shadow-md lg:p-12">
          {/* Header */}
          <h1 className="mb-8 text-3xl font-bold text-gray-900 sm:text-4xl">
            Privacy Policy
          </h1>
          <p className="mb-8 text-sm text-gray-500">
            Ultimo aggiornamento: 3 febbraio 2026
          </p>

          {/* Introduzione */}
          <section className="mb-8">
            <p className="text-base leading-relaxed text-gray-700">
              La presente Privacy Policy descrive le modalità di raccolta, utilizzo e
              protezione dei dati personali degli utenti del sito{' '}
              <strong>convenzioniperte.it</strong>.
            </p>
          </section>

          {/* Titolare del Trattamento */}
          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-semibold text-gray-900">
              1. Titolare del Trattamento
            </h2>
            <div className="rounded-lg bg-blue-50 p-6">
              <p className="text-base leading-relaxed text-gray-800">
                <strong>Studio De Santi Srls</strong>
                <br />
                Via Bari, 22 - 00161 Roma (RM)
                <br />
                P.IVA: 15093021002
              </p>
            </div>
          </section>

          {/* Dati Raccolti */}
          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-semibold text-gray-900">
              2. Dati Raccolti
            </h2>
            <p className="mb-4 text-base leading-relaxed text-gray-700">
              Raccogliamo i seguenti dati personali esclusivamente tramite il modulo di
              contatto presente sul sito:
            </p>
            <ul className="ml-6 space-y-2 text-base text-gray-700">
              <li className="flex items-start">
                <span className="mr-2 text-blue-600">•</span>
                <span>
                  <strong>Nome completo</strong>
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-blue-600">•</span>
                <span>
                  <strong>Indirizzo email</strong>
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-blue-600">•</span>
                <span>
                  <strong>Nome dell'azienda</strong>
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-blue-600">•</span>
                <span>
                  <strong>Interesse</strong> (Welfare o Partnership Commerciale)
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-blue-600">•</span>
                <span>
                  <strong>Messaggio</strong> (facoltativo)
                </span>
              </li>
            </ul>
          </section>

          {/* Finalità del Trattamento */}
          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-semibold text-gray-900">
              3. Finalità del Trattamento
            </h2>
            <p className="text-base leading-relaxed text-gray-700">
              I dati personali raccolti sono utilizzati esclusivamente per finalità di{' '}
              <strong>lead generation B2B</strong>, ovvero per:
            </p>
            <ul className="ml-6 mt-4 space-y-2 text-base text-gray-700">
              <li className="flex items-start">
                <span className="mr-2 text-blue-600">•</span>
                <span>Rispondere alle richieste di informazioni;</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-blue-600">•</span>
                <span>Fornire consulenza commerciale personalizzata;</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-blue-600">•</span>
                <span>Proporre soluzioni di welfare aziendale o partnership;</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-blue-600">•</span>
                <span>Gestire eventuali contratti o accordi commerciali.</span>
              </li>
            </ul>
          </section>

          {/* Base Giuridica */}
          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-semibold text-gray-900">
              4. Base Giuridica del Trattamento
            </h2>
            <p className="text-base leading-relaxed text-gray-700">
              Il trattamento dei dati personali si fonda sul{' '}
              <strong>consenso esplicito dell'utente</strong>, fornito al momento
              dell'invio del modulo di contatto, nonché sul{' '}
              <strong>legittimo interesse</strong> del Titolare a gestire richieste
              commerciali di tipo B2B.
            </p>
          </section>

          {/* Sicurezza e Condivisione */}
          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-semibold text-gray-900">
              5. Sicurezza e Condivisione dei Dati
            </h2>
            <p className="mb-4 text-base leading-relaxed text-gray-700">
              Ci impegniamo a trattare i dati personali con la massima sicurezza e
              riservatezza:
            </p>
            <div className="space-y-4">
              <div className="rounded-lg border-l-4 border-green-500 bg-green-50 p-4">
                <p className="text-base font-semibold text-green-900">
                  ✓ I dati sono trattati in modo sicuro
                </p>
                <p className="mt-1 text-sm text-green-800">
                  Utilizziamo protocolli di sicurezza adeguati per proteggere i tuoi
                  dati personali da accessi non autorizzati.
                </p>
              </div>
              <div className="rounded-lg border-l-4 border-green-500 bg-green-50 p-4">
                <p className="text-base font-semibold text-green-900">
                  ✓ Non cediamo i dati a terzi
                </p>
                <p className="mt-1 text-sm text-green-800">
                  I tuoi dati non vengono venduti, ceduti o condivisi con terze parti
                  per scopi commerciali o pubblicitari.
                </p>
              </div>
            </div>
          </section>

          {/* Servizi Terzi */}
          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-semibold text-gray-900">
              6. Servizi Terzi Utilizzati
            </h2>
            <p className="mb-4 text-base leading-relaxed text-gray-700">
              Per il funzionamento tecnico del sito, ci avvaliamo del seguente servizio
              esterno:
            </p>
            <div className="rounded-lg bg-gray-50 p-6">
              <h3 className="mb-2 text-lg font-semibold text-gray-900">Resend</h3>
              <p className="text-base text-gray-700">
                Utilizziamo <strong>Resend</strong> come servizio tecnico per l'invio
                delle email generate dal modulo di contatto. Resend tratta i dati
                esclusivamente per finalità tecniche e in conformità con la normativa
                europea sulla protezione dei dati (GDPR).
              </p>
            </div>
          </section>

          {/* Diritti dell'Utente */}
          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-semibold text-gray-900">
              7. Diritti dell'Utente
            </h2>
            <p className="mb-4 text-base leading-relaxed text-gray-700">
              In conformità con il Regolamento Europeo GDPR (679/2016), hai il diritto
              di:
            </p>
            <ul className="ml-6 space-y-2 text-base text-gray-700">
              <li className="flex items-start">
                <span className="mr-2 text-blue-600">•</span>
                <span>
                  <strong>Accesso</strong>: ottenere conferma dell'esistenza dei tuoi
                  dati e riceverne copia;
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-blue-600">•</span>
                <span>
                  <strong>Rettifica</strong>: correggere dati inesatti o incompleti;
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-blue-600">•</span>
                <span>
                  <strong>Cancellazione</strong>: richiedere l'eliminazione dei tuoi
                  dati personali;
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-blue-600">•</span>
                <span>
                  <strong>Limitazione</strong>: limitare il trattamento dei tuoi dati;
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-blue-600">•</span>
                <span>
                  <strong>Opposizione</strong>: opporti al trattamento dei tuoi dati
                  personali;
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-blue-600">•</span>
                <span>
                  <strong>Portabilità</strong>: ricevere i tuoi dati in formato
                  strutturato e leggibile.
                </span>
              </li>
            </ul>
          </section>

          {/* Come Esercitare i Diritti */}
          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-semibold text-gray-900">
              8. Come Esercitare i Tuoi Diritti
            </h2>
            <div className="rounded-lg bg-blue-50 p-6">
              <p className="mb-3 text-base leading-relaxed text-gray-800">
                Per esercitare i tuoi diritti o richiedere la cancellazione dei tuoi
                dati, puoi contattarci via email:
              </p>
              <p className="text-lg font-semibold text-blue-900">
                info@convenzioniperte.it
              </p>
              <p className="mt-3 text-sm text-gray-600">
                Risponderemo alla tua richiesta entro 30 giorni, in conformità con le
                tempistiche previste dal GDPR.
              </p>
            </div>
          </section>

          {/* Conservazione dei Dati */}
          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-semibold text-gray-900">
              9. Conservazione dei Dati
            </h2>
            <p className="text-base leading-relaxed text-gray-700">
              I dati personali saranno conservati per il tempo strettamente necessario
              alle finalità per cui sono stati raccolti e, in ogni caso, nel rispetto
              degli obblighi di legge. In assenza di contratto o accordi commerciali, i
              dati potranno essere cancellati su richiesta dell'utente in qualsiasi
              momento.
            </p>
          </section>

          {/* Modifiche alla Privacy Policy */}
          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-semibold text-gray-900">
              10. Modifiche alla Privacy Policy
            </h2>
            <p className="text-base leading-relaxed text-gray-700">
              Ci riserviamo il diritto di modificare o aggiornare questa Privacy Policy
              in qualsiasi momento. Le modifiche saranno pubblicate su questa pagina con
              indicazione della data di ultimo aggiornamento.
            </p>
          </section>

          {/* Footer */}
          <div className="mt-12 border-t border-gray-200 pt-8">
            <p className="text-center text-sm text-gray-500">
              Per qualsiasi domanda o chiarimento, non esitare a contattarci.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
