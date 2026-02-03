'use client';

import { useState } from 'react';
import { sendContactEmail } from '@/app/actions/sendEmail';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    azienda: '',
    interesse: '',
    messaggio: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const result = await sendContactEmail(formData);

      if (result.success) {
        setSubmitStatus({
          type: 'success',
          message: 'Grazie! Ti ricontatteremo entro 24 ore.',
        });
        // Reset del form
        setFormData({
          nome: '',
          email: '',
          azienda: '',
          interesse: '',
          messaggio: '',
        });
      } else {
        setSubmitStatus({
          type: 'error',
          message: result.error || 'Si è verificato un errore. Riprova.',
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Errore di connessione. Riprova più tardi.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Titolo Sezione */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Parliamone insieme
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Compila il form e ti ricontatteremo entro 24 ore
          </p>
        </div>

        {/* Layout a Due Colonne */}
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Colonna Sinistra - Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Nome */}
              <div>
                <label
                  htmlFor="nome"
                  className="block text-sm font-medium text-gray-700"
                >
                  Nome *
                </label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  required
                  value={formData.nome}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-3 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Il tuo nome"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-3 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="nome@azienda.it"
                />
              </div>

              {/* Azienda */}
              <div>
                <label
                  htmlFor="azienda"
                  className="block text-sm font-medium text-gray-700"
                >
                  Azienda *
                </label>
                <input
                  type="text"
                  id="azienda"
                  name="azienda"
                  required
                  value={formData.azienda}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-3 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Nome della tua azienda"
                />
              </div>

              {/* Interesse (Select) */}
              <div>
                <label
                  htmlFor="interesse"
                  className="block text-sm font-medium text-gray-700"
                >
                  Interesse *
                </label>
                <select
                  id="interesse"
                  name="interesse"
                  required
                  value={formData.interesse}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-3 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Seleziona un'opzione</option>
                  <option value="welfare">
                    Voglio attivare il welfare per il mio team
                  </option>
                  <option value="partner">
                    Voglio diventare Partner Commerciale (Visibilità)
                  </option>
                </select>
              </div>

              {/* Messaggio */}
              <div>
                <label
                  htmlFor="messaggio"
                  className="block text-sm font-medium text-gray-700"
                >
                  Messaggio
                </label>
                <textarea
                  id="messaggio"
                  name="messaggio"
                  rows={4}
                  value={formData.messaggio}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-3 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Raccontaci le tue esigenze..."
                />
              </div>

              {/* Bottone Invio */}
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-md bg-blue-900 px-6 py-3 text-base font-medium text-white shadow-lg transition-colors hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {isSubmitting ? 'Invio in corso...' : 'Invia Richiesta'}
                </button>
              </div>

              {/* Messaggio di Feedback */}
              {submitStatus.type && (
                <div
                  className={`rounded-md p-4 ${
                    submitStatus.type === 'success'
                      ? 'bg-green-50 text-green-800'
                      : 'bg-red-50 text-red-800'
                  }`}
                >
                  <p className="text-sm font-medium">{submitStatus.message}</p>
                </div>
              )}
            </form>
          </div>

          {/* Colonna Destra - Box Informativo */}
          <div className="flex items-center">
            <div className="rounded-2xl bg-blue-50 p-8 lg:p-10">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-blue-600">
                <svg
                  className="h-8 w-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="mb-4 text-2xl font-bold text-gray-900">
                Consulenza personalizzata
              </h3>
              <p className="text-lg text-gray-700">
                Analizziamo le tue necessità per offrirti la soluzione più
                efficace. Il nostro team di esperti è pronto ad accompagnarti in
                ogni fase del progetto.
              </p>
              <div className="mt-6 space-y-3">
                <div className="flex items-center text-gray-700">
                  <svg
                    className="mr-3 h-5 w-5 text-blue-600"
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
                  Risposta entro 24 ore
                </div>
                <div className="flex items-center text-gray-700">
                  <svg
                    className="mr-3 h-5 w-5 text-blue-600"
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
                  Soluzione su misura
                </div>
                <div className="flex items-center text-gray-700">
                  <svg
                    className="mr-3 h-5 w-5 text-blue-600"
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
                  Supporto dedicato
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
