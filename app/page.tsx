import { Metadata } from 'next';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import PartnerSection from '@/components/PartnerSection';
import VipSavingDetail from '@/components/VipSavingDetail';
import OtherSolutions from '@/components/OtherSolutions';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Convenzioni Per Te | Welfare Aziendale e Partnership Strategiche',
  description: 'Portata il benessere nel tuo team con VipSaving e aumenta la visibilità del tuo brand nel nostro network esclusivo. Soluzioni welfare e loyalty B2B.',
  keywords: ['welfare aziendale', 'Vip District Italia', 'sconti dipendenti', 'fringe benefit', 'partnership commerciali', 'fidelizzazione associati'],
  openGraph: {
    title: 'Convenzioni Per Te | Welfare e Visibilità Brand',
    description: 'La piattaforma ideale per HR manager e Brand che cercano una crescita reciproca.',
    url: 'https://www.convenzioniperte.it',
    siteName: 'Convenzioni Per Te',
    locale: 'it_IT',
    type: 'website',
  },
};

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <PartnerSection />
        <VipSavingDetail />
        <OtherSolutions />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}