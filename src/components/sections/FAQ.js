import React from "react";
import GenericSection from "./GenericSection";
import SectionHeader from "./partials/SectionHeader";
import Accordion from "../elements/Accordion";
import AccordionItem from "../elements/AccordionItem";

export const FAQ = () => {
  const data = { title: "FAQ - Frequently Asked Questions" };
  return (
    <GenericSection topDivider gradientSection id="faq">
      <div className="container-xs">
        <SectionHeader data={data} className="center-content reveal-from-bottom" />
        <Accordion className="reveal-from-bottom" data-reveal-delay="300">
          <AccordionItem title="When is the drop?" active>
            9/21 for Whitelisted <br /> 9/22 for Public
          </AccordionItem>
          <AccordionItem title="How much will drop cost?">
            .07 per team playing card
          </AccordionItem>
          <AccordionItem title="Where will the drop take place?">
            On our website!
          </AccordionItem>
          <AccordionItem title="How many team trading cards will there be in total?">
            7,216
          </AccordionItem>
          <AccordionItem title="Is there a limit during mint?">
            Yes, <strong>20</strong> per transaction
          </AccordionItem>
          <AccordionItem title="How do I win?">
            Hold the team trading card of a winning weekly spotlight matchup or
            weekly high scoring team
          </AccordionItem>
          <AccordionItem title="What is at stake?">
            We are giving back 97% of the sales to weekly NFT prizes! That means
            we will be buying 24.5ETH worth of NFT prizes per week to giveaway!
            These will be things like Mutant Apes, unraced Zed Horses, SupDucks,
            Gutter Cats, and more
          </AccordionItem>
          <AccordionItem title="What is the burn?">
            If you are holding a team playing card and aren't feeling good about
            your chances at winning then you can burn the card! It will remove
            it from the population and you will receive your mint price of .07
            back. This is limited to the first 1400 cards.
          </AccordionItem>
          <AccordionItem title="Are playoffs included?">
            Yes they are, in fact hold the winning team card for the
            championship matchup and you will have a shot at our <strong>grand prize - one Bored Ape</strong>
          </AccordionItem>
          <AccordionItem title="Whats in store in the future?">
            In season prop contests, NFL playoff NFT, March Madness NFT, Masters
            NFT, and more! Want to be included in these? Hold onto your card
            after the season is over, <strong>It will serve as pre sale access to future drops!</strong>
          </AccordionItem>
        </Accordion>
      </div>
    </GenericSection>
  );
};

export default FAQ;