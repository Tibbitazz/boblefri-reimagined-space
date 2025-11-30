import { Navigation } from "@/components/Navigation";
import { MembershipSection } from "@/components/MembershipSection";
import { Footer } from "@/components/Footer";

const BliMedlem = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-16">
        <MembershipSection />
      </div>
      <Footer />
    </div>
  );
};

export default BliMedlem;
