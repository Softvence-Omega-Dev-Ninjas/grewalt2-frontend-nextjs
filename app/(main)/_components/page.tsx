import HomeBanner from "./banner/HomeBanner";
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
    </div>
  );
};

export default HomePage;
