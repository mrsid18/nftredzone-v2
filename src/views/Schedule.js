import React from "react";
import GenericSection from "../components/sections/GenericSection";

const Schedule = () => {
    return (
      <GenericSection>
      <img
        src={require("./../assets/images/schedule.png")}
        style={{ width: "60%" }}
              alt="schedule"
              className="mx-auto pt-32 reveal-scale-up pb-32"
              data-reveal-delay="300"
      />
            </GenericSection>
  );
};

export default Schedule;
