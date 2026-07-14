import Hero from "@/components/Hero"
import StatCallout from "@/components/StatCallout";
import Architecture from "@/components/Architecture";
import LatencyTable from "@/components/LatencyTable";
import MilestoneTimeline from "@/components/MilestoneTimeline";
import HardwarePlacement from "@/components/HardwarePlacement";
import TechStack from "@/components/TechStack";
import BlogSection from "@/components/BlogSection";
import AetherRTCCallout from "@/components/AetherRTCCallout";
import Waitlist from "@/components/Waitlist";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col w-full">
      <Hero />
      <StatCallout />
      <Architecture />
      <LatencyTable />
      <MilestoneTimeline />
      <HardwarePlacement />
      <TechStack />
      <BlogSection />
      <AetherRTCCallout />
      <Waitlist />
      <Footer />
    </main>
  );
}