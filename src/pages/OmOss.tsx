import { Navigation } from "@/components/Navigation";
import { AboutSection } from "@/components/AboutSection";
import { Footer } from "@/components/Footer";

const OmOss = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-16">
        <AboutSection />
      </div>
      <Footer />
    </div>
  );
};

export default OmOss;
