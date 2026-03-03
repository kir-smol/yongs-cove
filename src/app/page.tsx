import Header from "@/components/Header";
import Hero from "@/components/Hero";
import VideoSection from "@/components/VideoSection";
import Gallery from "@/components/Gallery";
import PropertyDetails from "@/components/PropertyDetails";
import AgentCards from "@/components/AgentCards";
import LeadForm from "@/components/LeadForm";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

export default function Home() {
  return (
    <>
      <Header />
      <FloatingCTA />
      <main>
        <Hero />
        <VideoSection />
        <Gallery />
        <PropertyDetails />
        <AgentCards />
        <LeadForm />
      </main>
      <Footer />
    </>
  );
}
