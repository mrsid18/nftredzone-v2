import React from "react";
import GenericSection from "./GenericSection";
import SectionHeader from "./partials/SectionHeader";
import PrizeModal from "./partials/PrizeModal";

const WeeklyPrizes = () => {
  const weeklyPrize = { title: "Weekly Prizes  🎉" };

  return (
    <GenericSection topDivider gradientSection id="prizes">
      <div className="container-sm center-content">
        <SectionHeader
          data={weeklyPrize}
          className="reveal-from-bottom pb-32"
        />
          <p className="reveal-scale-up" data-reveal-delay="300">
            We will be giving back 97% of the mint proceeds to buy up NFTs as
            weekly prizes! This means that upon sellout we will be distributing
            490 ETH over 15 weeks of the season. Each week we will have a budget
            of 24.5 ETH to buy and support the 16 teams in our league. This
            means some weeks we will be giving away 170 unraced Zed horses and 6
            SupDucks while others we will have 6 Bored Ape Kennel Clubs and 5
            Gutter Rats. You get the picture… this is going to be big!
          </p> 
      <PrizeModal/>
      </div>

    </GenericSection>
  );
};

export default WeeklyPrizes;
