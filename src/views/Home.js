import React from 'react';
import HeroSplit from '../components/sections/HeroSplit';
import FeaturesTwist from '../components/sections/FeaturesTwist';
import Cta from '../components/sections/Cta';
import FAQ  from '../components/sections/FAQ';
import RoadmapVid from '../components/sections/RoadmapVid';
import HowItWorks from '../components/sections/HowItWorks';
import WeeklyPrizes from '../components/sections/WeeklyPrizes';
import FrontOffice from '../components/sections/FrontOffice';

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <HeroSplit imageFill className="spike" />
        {/* <MintInfo /> */}
        <HowItWorks />
        <WeeklyPrizes />
        <FeaturesTwist imageFill />
        <RoadmapVid />
        <FAQ />
        <FrontOffice/>
        <Cta hasBgColor invertColor topDivider bottomDivider split />
      </React.Fragment>
    );
  }
}

export default Home;