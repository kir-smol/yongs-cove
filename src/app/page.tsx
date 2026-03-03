import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Gallery from "@/components/Gallery";
import PropertyDetails from "@/components/PropertyDetails";
import VideoSection from "@/components/VideoSection";
import AgentCards from "@/components/AgentCards";
import LeadForm from "@/components/LeadForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Gallery />
        <PropertyDetails />
        <VideoSection />
        <AgentCards />
        <LeadForm />
      </main>
      <Footer />
    </>
  );
}
