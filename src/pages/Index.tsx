import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import WhySection from "@/components/WhySection";
import HowSection from "@/components/HowSection";
import GlobalStats from "@/components/GlobalStats";
import HouseGrid from "@/components/HouseGrid";
import CourseStatsTable from "@/components/CourseStatsTable";
import DonationMap from "@/components/DonationMap";
import DonateSection from "@/components/DonateSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <AboutSection />
      <WhySection />
      <HowSection />
      <GlobalStats />
      <HouseGrid />
      <CourseStatsTable />
      <DonationMap />
      <DonateSection />
      <Footer />
    </div>
  );
};

export default Index;
