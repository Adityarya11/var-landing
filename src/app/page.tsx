import Hero from "@/components/Hero";
import Numbers from "@/components/Numbers";
import Architecture from "@/components/Architecture";
import VideoSection from "@/components/VideoSection";
import Limits from "@/components/Limits";
import Writing from "@/components/Writing";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col w-full">
      <Hero />
      <Numbers />
      <Architecture />
      <VideoSection />
      <Limits />
      <Writing />
      <Footer />
    </main>
  );
}
