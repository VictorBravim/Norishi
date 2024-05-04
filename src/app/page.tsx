// Page.tsx
import Nav from '@/components/Nav'
import Hero from '@/components/Hero';
import Popular from '@/components/Popular';
import Sobre from '@/components/Sobre';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between">
      <Nav />
      <Hero />
      <Popular />
      <Sobre />
      <Footer />
    </main>
  );
}
