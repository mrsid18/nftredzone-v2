import React from "react";
import GenericSection from "./GenericSection";
import SectionHeader from "./partials/SectionHeader";
import Image from "../elements/Image";

const RoadmapVid = () => {
  const roadmap = { title: "Roadmap" };
  // const videoRef = useRef();
  // const setPlayBack = () => {
  //   videoRef.current.playbackRate = 1.5;
  // };
  return (
    <GenericSection topDivider id="roadmap">
      <div className="container-xs">
        <SectionHeader data={roadmap} className="center-content reveal-from-bottom">
          <p className="mt-16">
            See the full roadmap in our{" "}
            <a
              className="fw-600 text-color-blue"
              target="_blank"
              rel="noopener noreferrer"
              href="https://nft-redzone-1.gitbook.io/nft-redzone/road-map"
            >
              WhitePaper
            </a>
          </p>
        </SectionHeader>
      </div>
      <div>
        {/* <video
          ref={videoRef}
          src={require("./../../assets/images/roadmap.mp4")}
          className="mx-auto mob-hide reveal-scale-up"
          autoPlay
          onCanPlay={() => setPlayBack()}
          muted
          loop
        ></video> */}
        <Image
          src={require("./../../assets/images/roadmap.gif")}
          style={{width:'100%'}}
          // className="only-mob"
        />
      </div>
    </GenericSection>
  );
};

export default RoadmapVid;
