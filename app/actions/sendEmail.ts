'use server';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactFormData {
  nome: string;
  email: string;
  azienda: string;
  interesse: string;
  messaggio: string;
}

export async function sendContactEmail(formData: ContactFormData) {
  try {
    // Validazione base dei dati
    if (!formData.nome || !formData.email || !formData.azienda || !formData.interesse) {
      return {
        success: false,
        error: 'Tutti i campi obbligatori devono essere compilati',
      };
    }

    // Determina il prefisso in base all'interesse
    let subject = '';
    if (formData.interesse === 'partner') {
      subject = '[PARTNER] Richiesta informazioni - ' + formData.azienda;
    } else if (formData.interesse === 'welfare') {
      subject = '[WELFARE] Richiesta informazioni - ' + formData.azienda;
    } else {
      subject = 'Richiesta informazioni - ' + formData.azienda;
    }

    // Crea il corpo dell'email in HTML
    const emailHtml = `
      <h2>Nuova richiesta di contatto</h2>
      <p><strong>Nome:</strong> ${formData.nome}</p>
      <p><strong>Email:</strong> ${formData.email}</p>
      <p><strong>Azienda:</strong> ${formData.azienda}</p>
      <p><strong>Interesse:</strong> ${formData.interesse === 'partner' ? 'Partner Commerciale (Visibilità)' : 'Welfare per il team'}</p>
      <p><strong>Messaggio:</strong></p>
      <p>${formData.messaggio || 'Nessun messaggio aggiuntivo'}</p>
    `;

    // Invia l'email tramite Resend
    const data = await resend.emails.send({
      from: 'Convenzioni Per Te <info@convenzioniperte.it>', // Sostituisci con il tuo dominio verificato
      to: ['info@convenzioniperte.it'], // Sostituisci con l'email di destinazione reale
      subject: subject,
      html: emailHtml,
      replyTo: formData.email, // Permette di rispondere direttamente al mittente
    });

    console.log('Email inviata con successo:', data);

    return {
      success: true,
      message: 'Email inviata con successo',
    };
  } catch (error) {
    console.error('Errore nell\'invio dell\'email:', error);
    
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Errore sconosciuto nell\'invio dell\'email',
    };
  }
}
