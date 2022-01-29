import React from "react";
import SectionHeader from "./partials/SectionHeader";

const HowItWorks = () => {
  const howitworks = { title: "How it Works?" };
  return (
    <section className="features-tiles section center-content-mobile">
      <div className="container ">
        <div className="features-tiles-inner section-inner has-top-divider">
          <SectionHeader data={howitworks} className="center-content"/>
          <div className="tiles-wrap">
            <div className="tiles-item">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-content">
                  <h4
                    className="mt-0 mb-8 reveal-from-right text-color-high"
                    data-reveal-container=".tiles-item"
                    data-reveal-delay="100"
                  >
                    The NFT
                  </h4>
                  <p
                    className="m-0 text-sm reveal-from-right"
                    data-reveal-container=".tiles-item"
                    data-reveal-delay="200"
                  >
                    NFT RedZone consists of 7,216 unique tokens. They are broken
                    down into 451 tokens representing each of the respective 16
                    NFT community teams in the league and will have 7 different
                    rarity tiers. Full rarity tier breakdown can be found below.
                  </p>
                </div>
              </div>
            </div>
            <div className="tiles-item">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-content">
                  <h4
                    className="mt-0 mb-8 reveal-from-right text-color-high"
                    data-reveal-container=".tiles-item"
                    data-reveal-delay="100"
                  >
                    How To Win
                  </h4>
                  <p
                    className="m-0 text-sm reveal-from-right"
                    data-reveal-container=".tiles-item"
                    data-reveal-delay="200"
                  >
                    Each week, card holders will have chances to be eligible for
                    a f*ck ton of giveaways (24.5 ETH worth on average) by
                    holding specific team cards in their collections. The rarer
                    the tier of team card you’re holding, the better your
                    chances become.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="tiles-item">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-content">
                  <h4
                    className="mt-0 mb-8 reveal-from-right text-color-high"
                    data-reveal-container=".tiles-item"
                    data-reveal-delay="200"
                  >
                    Spotlight Matchup
                  </h4>
                  <p
                    className="m-0 text-sm reveal-from-right"
                    data-reveal-container=".tiles-item"
                    data-reveal-delay="300"
                  >
                    “So how do I know what cards make me eligible?” Great
                    question! Each week there will be a featured “Spotlight
                    Matchup” of two of the 16 teams in the league. If you are
                    holding the cards of the winning team in that matchup,
                    you’re eligible for that week’s prizes. For example week 3
                    features Team BAYC vs Royal Society of Players. If you’re
                    holding the cards of the winning team in that fantasy
                    matchup you’re in the running for the weekly prizes!
                  </p>
                </div>
              </div>
            </div>
            <div className="tiles-item">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-content">
                  <h4
                    className="mt-0 mb-8 reveal-from-right text-color-high"
                    data-reveal-container=".tiles-item"
                    data-reveal-delay="200"
                  >
                    Weekly High Score
                  </h4>
                  <p
                    className="m-0 text-sm reveal-from-right"
                    data-reveal-container=".tiles-item"
                    data-reveal-delay="300"
                  >
                    In addition to the Spotlight Matchup, prizes will be awarded
                    if you are holding the cards of the HIGHEST scoring team in
                    the whole league for that week.
                  </p>
                </div>
              </div>
            </div>
            <div className="tiles-item">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-content">
                  <h4
                    className="mt-0 mb-8 reveal-from-right text-color-high"
                    data-reveal-container=".tiles-item"
                    data-reveal-delay="300"
                  >
                    Prop Challenges
                  </h4>
                  <p
                    className="m-0 text-sm reveal-from-right"
                    data-reveal-container=".tiles-item"
                    data-reveal-delay="400"
                  >
                    Player prop style challenges will also take place weekly.
                    For example. Holding the card of the team with the highest
                    scoring WR that week? You win!
                  </p>
                </div>
              </div>
            </div>
            <div className="tiles-item">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-content">
                  <h4
                    className="mt-0 mb-8 reveal-from-right text-color-high"
                    data-reveal-container=".tiles-item"
                    data-reveal-delay="400"
                  >
                    {" "}
                    Burn that
                    <strong> Sh*t </strong>
                  </h4>
                  <p
                    className="m-0 text-sm reveal-from-right"
                    data-reveal-container=".tiles-item"
                    data-reveal-delay="400"
                  >
                    In week 6-7, a burn mechanic will be introduced to give
                    players an important decision. If you so choose, the first
                    1,400 cards burned will receive a full refund of their
                    card’s mint price. This protects against teams out of
                    contention, or teams riddled with injury etc. Our NFTs will
                    also serve as mint passes to any events and contests we do
                    in the future (NFL Playoffs, March Madness, Masters etc.) so
                    choose wisely!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
