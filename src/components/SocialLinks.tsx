import React from "react";
import X from "../assets/x.png";
import styled from "styled-components";

interface SocialLinksInterface {}

const SocialMediaWrapper = styled.div`
  position: absolute;
  bottom: 20px;
  right: 28px;

  img.social-icon /* .social-media */ {
    height: 40px;
    width: 40px;
    transition: all 0.5s;

    &:hover {
      transform: rotate(180deg) scale(1.3);
      transition: all 0.5s;
    }
  }
`;

const SocialLinks = (_: SocialLinksInterface) => {
  return (
    <SocialMediaWrapper>
      <a
        href="https://x.com/zetafiofficial"
        rel="noreferrer noopener"
        className="social-media"
        target="_blank"
      >
        <img
          className="social-icon"
          src={X}
          alt="https://x.com/zetafiofficial"
        />
      </a>
    </SocialMediaWrapper>
  );
};

export default SocialLinks;
