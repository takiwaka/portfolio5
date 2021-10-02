import React from "react";
import styled from "styled-components";
import media from "styled-media-query";

const Hero = () => {
  return (
    <div>
      <Content className="hero">
        <Image className="image" />
        <Gradation className="gradation" />
        <Heading className="heading">
          畳の原料「い草」でビールを作れば苦くて旨いのができるんじゃね？
          <br />
          とSAPPOROさんに応募したら、商品化までした件。
        </Heading>
        <Arrow />
        <Beer src="assets/images/beer.png" />
      </Content>
    </div>
  );
};

export default Hero;

const Content = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: #20383d;
`;

const Image = styled.div`
  height: 55%;
  background: url("assets/images/bg.jpg");
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background-color: #20383d;
  backdrop-filter: contrast(200%);
`;

const Gradation = styled.div`
  position: relative;
  top: -10%;
  height: 10vh;
  background: linear-gradient(to top, #20383d, rgba(32, 56, 61, 0));
`;

const Heading = styled.h1`
  position: relative;
  top: -30%;
  margin: 0 auto;
  padding: 0.5rem;
  background-color: rgba(255, 255, 255, 0.7);
  font-size: 2rem;
  font-family: LightNovelPOPv2;
  text-justify: inter-character;
  max-width: 400px;
  
  ${media.lessThan("small")`
  top: -35%;
  font-size:1.8rem;
  max-width: 80vw;
  width: 280px;
  `}
  `;

const Arrow = styled.div`
  position: absolute;
  top: 72%;
  left: 50%;
  width: 50px;
  height: 50px;
  transform: translate(-50%);
  background-image: url("assets/images/arrow-white.png");
  background-size: contain;
  background-repeat: no-repeat;
`;

const Beer = styled.img`
  position: absolute;
  left: 50%;
  bottom: -20%;
  transform: translate(-55%);
  height: 40vh;
`;
