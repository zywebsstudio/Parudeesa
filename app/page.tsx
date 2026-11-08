import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Cottages from "@/components/Cottages";
import Gallery from "@/components/Gallery";
import Experiences from "@/components/Experiences";
import Testimonials from "@/components/Testimonials";
import Location from "@/components/Location";
import Booking from "@/components/Booking";
import Footer from "@/components/Footer";
import FloatingSocialButtons from "@/components/FloatingSocialButtons";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col bg-white text-charcoal">
      {/* Navigation Header */}
      <Header />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero />
        <About />
        <Cottages />
        <Gallery />
        <Experiences />
        <Testimonials />
        <Booking />

        <Location />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Action Buttons */}
      <FloatingSocialButtons />
    </div>
  );
}
