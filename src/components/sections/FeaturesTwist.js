import React from "react";
import classNames from "classnames";
import { SectionSplitProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
import Image from "../elements/Image";
import CardTierAcc from "./partials/CardTierAcc";

const propTypes = {
  ...SectionSplitProps.types,
};

const defaultProps = {
  ...SectionSplitProps.defaults,
};

class FeaturesTwist extends React.Component {
  render() {
    const {
      className,
      topOuterDivider,
      bottomOuterDivider,
      topDivider,
      bottomDivider,
      hasBgColor,
      invertColor,
      invertMobile,
      invertDesktop,
      alignTop,
      imageFill,
      ...props
    } = this.props;

    const outerClasses = classNames(
      "features-split section",
      topOuterDivider && "has-top-divider",
      bottomOuterDivider && "has-bottom-divider",
      hasBgColor && "has-bg-color",
      invertColor && "invert-color",
      className
    );

    const innerClasses = classNames(
      "features-split-inner section-inner",
      topDivider && "has-top-divider",
      bottomDivider && "has-bottom-divider"
    );

    const splitClasses = classNames(
      "split-wrap",
      invertMobile && "invert-mobile",
      invertDesktop && "invert-desktop",
      alignTop && "align-top"
    );

    const sectionHeader = {
      title: "Scouting Report",
    };

    return (
      <section {...props} className={outerClasses} id="scouting">
        <div className="container">
          <div className={innerClasses}>
            <SectionHeader data={sectionHeader} className="center-content" />
            <div className={splitClasses}>
              <div className="split-item reveal-scale-up">
                <div className="split-item-content center-content-mobile">
                  <h2 className="mt-0 mb-16">Mint</h2>
                  <ul className="m-0">
                    <li>Whitelist for presale open until 9/20.</li>
                    <li>Whitelist presale 9/21</li>
                    <li>Public sale 9/22 </li>
                    <li>Weekly Reveal on Thursday for newly minted cards</li>
                    <li>.07 (touchdown) ETH per card</li>
                    <li>20 card max per transaction</li>
                  </ul>
                </div>
                <div
                  className={classNames(
                    "split-item-image is-3d illustration-element-03",
                    imageFill && "split-item-image-fill"
                  )}
                >
                  <Image
                    src={require("./../../assets/images/Card-Head Coach.jpg")}
                    alt="Features split 01"
                    className="w-80"
                  />
                </div>
              </div>

              <div className="split-item reveal-scale-up">
                <div className="split-item-content center-content-mobile">
                  <h2 className="mt-0 mb-16">Card Tiers</h2>
                  <CardTierAcc />
                </div>
                <div
                  className={classNames(
                    "split-item-image is-3d illustration-element-04",
                    imageFill && "split-item-image-fill"
                  )}
                >
                  <Image
                    src={require("./../../assets/images/Card-Ponies-Flex.jpg")}
                    alt="Features split 02"
                    className="w-80"
                  />
                </div>
              </div>

              <div className="split-item reveal-scale-up">
                <div className="split-item-content center-content-mobile">
                  <h2 className="mt-0 mb-16">Win/Burn/What’s Next</h2>
                  <p className="m-0">
                  Buy, sell, and trade your way to fantasy glory. Study matchups and league rosters to put yourself in position to win. Participate in lineup decisions for your respective card teams on our discord. Don’t like your cards, burn em’ for a full mint refund (capped at first 1400). These tokens don’t go stale after the fantasy season! Keep them in your wallet as a mint pass for our next games! They will also serve as a mint pass for the dGen Network genesis NFT release, so choose to burn wisely.
                  </p>
                </div>
                <div
                  className={classNames(
                    "split-item-image is-3d illustration-element-05",
                    imageFill && "split-item-image-fill"
                  )}
                >
                  <Image
                    src={require("./../../assets/images/gcg.PNG")}
                    alt="Features split 03"
                    className="w-80"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

FeaturesTwist.propTypes = propTypes;
FeaturesTwist.defaultProps = defaultProps;

export default FeaturesTwist;
