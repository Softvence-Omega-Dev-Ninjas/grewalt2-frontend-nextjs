import HomeBanner from "./banner/HomeBanner";
import ContactSection from "./contactUs/ContactSection";
import Expertise from "./Expertise/Expertise";
import Solutions from "./solution/Solutions";
import StatsSection from "./stats/StatsSection";

const HomePage = () => {
  return (
    <div className="bg-white">
      <HomeBanner />
      <Expertise />
      <StatsSection />
      <Solutions />
      <ContactSection />
    </div>
  );
};

export default HomePage;
