import React from "react";
import styled from "styled-components";
import media from "styled-media-query";

const Hero = () => {
  return (
    <div>
      <Content className="hero">
        <Heading>
          畳の原料「い草」でビールを作れば
          <br />
          苦旨なのができるんじゃね？と
          <br />
          SAPPOROさんに応募した所、
          <br />
          商品化までした件
        </Heading>
        <Arrow>↓SCROLL</Arrow>
      </Content>
    </div>
  );
};

export default Hero;

const Content = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background-image: url("assets/images/bg.jpg");
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  background-color: rgba(255, 255, 255, 0.8);
  background-blend-mode: lighten;
  font-family: LightNovelPOPv2;

`;

const Heading = styled.h1`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(255, 255, 255, 0.8);
  font-size: 2rem;
  ${media.lessThan("small")`
  font-size:1rem;
  `}
`;

const Arrow = styled.div`
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translate(-50%);
  font-family: LightNovelPOPv2;
  font-size: 2rem;
`;
