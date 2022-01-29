import React from "react";
import classNames from "classnames";
import Image from "../../elements/Image";
const FooterSocial = ({ className, ...props }) => {
  const classes = classNames("footer-social", className);

  return (
    <div {...props} className={classes}>
      <ul className="list-reset">
        <li>
          <a href="https://twitter.com/NFTRedZone" target="_blank" rel="noopener noreferrer">
        <Image
            src={require('./../../../assets/images/twitter.svg')}
            alt="nftRedzone"
            /></a>
        </li>
        
        <li>
          <a href="https://discord.gg/UxVbb6K5nT" target="_blank" rel="noopener noreferrer">
        <Image
            src={require('./../../../assets/images/discord.svg')}
            alt="nftRedzone"
            style={{width:'2rem'}}
            /></a>
        </li>
      </ul>
    </div>
  );
};

export default FooterSocial;
