import React from "react";
import Accordion from "../../elements/Accordion";
import AccordionItem from "../../elements/AccordionItem";

const CardTierAcc = () => {
  return (
    <Accordion className="reveal-from-bottom">
      <AccordionItem title="Head Coach = .2%" active>
        Our rarest card! There are only 16 of these beauties in the supply. If
        you hold a Head Coach card, you are eligible for EVERY giveaway
      </AccordionItem>
      <AccordionItem title="Slabbed Cards = 1.1%">
        Owning a slabbed card gives you a 2x multiplier on that specific card
        tier (Head Coach excluded).
      </AccordionItem>
      <AccordionItem title="QB = 6.7%">
        5x better chance at giveaway than lowest tier
      </AccordionItem>
      <AccordionItem title="RB = 13.3%">
        4x better chance at giveaway than lowest tier
      </AccordionItem>
      <AccordionItem title="WR = 20%">
        3x better chance at giveaway than lowest tier
      </AccordionItem>
      <AccordionItem title="TE = 26.6%">
        2x better chance at giveaway than lowest tier
      </AccordionItem>
      <AccordionItem title="Flex = 33.3%">
        Lowest tier. Equal to one giveaway chance.
      </AccordionItem>
    </Accordion>
  );
};

export default CardTierAcc;
