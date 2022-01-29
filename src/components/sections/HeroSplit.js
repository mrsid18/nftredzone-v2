import React from "react";
import classNames from "classnames";
import { SectionSplitProps } from "../../utils/SectionProps";

const propTypes = {
  ...SectionSplitProps.types,
};

const defaultProps = {
  ...SectionSplitProps.defaults,
};

class HeroSplit extends React.Component {
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
      "hero section",
      topOuterDivider && "has-top-divider",
      bottomOuterDivider && "has-bottom-divider",
      hasBgColor && "has-bg-color",
      invertColor && "invert-color",
      className
    );

    const innerClasses = classNames(
      "hero-inner section-inner",
      topDivider && "has-top-divider",
      bottomDivider && "has-bottom-divider"
    );

    const splitClasses = classNames(
      "split-wrap",
      invertMobile && "invert-mobile",
      invertDesktop && "invert-desktop",
      alignTop && "align-top"
    );

    return (
      <section {...props} className={outerClasses}>
        <div className="container">
          <div className={innerClasses}>
            <div className={splitClasses}>
              <div className="split-item">
                <div className="hero-content split-item-content center-content-mobile">
                  <h1
                    className="mt-20 mb-16 reveal-from-left inter"
                    data-reveal-delay="150"
                  >
                    Welcome!!
                  </h1>
                  <p
                    className="m-0 mb-24 reveal-from-left"
                    data-reveal-delay="300"
                  >
                    What happens when you take 16 of the top NFT communities in
                    the world and pit them against each other in a season long
                    fantasy football battle for bragging rights? You get NFT
                    RedZone, the first of its kind, largest and HIGHEST stakes
                    fantasy football league in NFT history! NFT RedZone is
                    creating a game within the game, taking 97% of mint proceeds
                    and giving them directly back to the community in the form
                    of MASSIVE weekly NFT giveaways. Oh, did we mention we’re
                    giving away a Bored Ape? NFT RedZone is a positive EV NFT
                    that could win you any of over 1200 NFT prizes throughout
                    the fantasy season. Buy, sell and trade your way to fantasy
                    glory!
                  </p>

                  <p className="text-color-high text-xxs" id="powered">
                    POWERED BY:
                    <a
                      href="http://dgen.network"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={require("./../../assets/images/dgen.png")}
                        style={{ width: "5rem" }}
                        alt="dgen"
                      />
                    </a>
                  </p>
                  <div className="social">
                    <a
                      href="https://sleeper.app/draft/nfl/736015853602103296"
                      className="button button-red button-wide-mobile "
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      League Draft Board
                    </a>
                    <p className="pt-12 text-xs">
                      <strong>FOLLOW US: </strong>
                    </p>

                    <a
                      href=" https://twitter.com/NFTRedZone"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={require("./../../assets/images/twitter.svg")}
                        alt='twitter'
                      />
                    </a>
                    <a
                      href="https://discord.gg/UxVbb6K5nT"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={require("./../../assets/images/discord.svg")}
                        alt="discord"
                      />
                    </a>
                  </div>
                </div>
                <div className="grid">
                  <div
                    className="reveal-rotate-from-left is-3d split-item-image split-item-image-fill "
                    data-reveal-delay="450"
                  >
                    <img
                      style={{
                        transform:
                          "perspective(1000px) rotateY(13deg) rotateX(5deg) rotateZ(-7deg) scaleY(0.9) scaleX(0.95) translateX(3%) translateY(-3%)",
                      }}
                      id="grid1"
                      alt="hero-1"
                      className="has-shadow"
                      src={require("./../../assets/images/home1.jpg")}
                    />
                  </div>
                  <div
                    className="reveal-rotate-from-right reveal-rotate-from-right split-item-image split-item-image-fill is-3d "
                    data-reveal-delay="650"
                  >
                    <img
                      className="has-shadow"
                      src={require("./../../assets/images/home2.jpg")}
                      alt="hero-2"
                    />
                  </div>
                </div>
                {/* <div className="hero-figure is-3d split-item-image illustration-element-01">
                  <div
                    className="reveal-rotate-from-left"
                    data-reveal-delay="450"
                  >
                    <Image
                      className="has-shadow"
                      src={require("./../../assets/images/hero-image.svg")}
                      alt="Hero"
                      width={528}
                      height={396}
                    />
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

HeroSplit.propTypes = propTypes;
HeroSplit.defaultProps = defaultProps;

export default HeroSplit;
