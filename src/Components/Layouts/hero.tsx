import React from "react";
import styled from "styled-components";
import media from "styled-media-query";

const Hero = () => {
  return (
    <div>
      <Content className="hero">
        <Image />
        <Gradation />
        <Heading>
          畳の原料「い草」
          <br />
          でビールを作れば
          <br />
          苦くて旨いのが
          <br />
          できるんじゃね？と
          <br />
          SAPPOROさんに
          <br />
          応募したら、
          <br />
          商品化までした件
        </Heading>
        <Arrow />
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
  background:
    url("assets/images/bg.jpg");
  background-size: cover;
  background-position: center center;

  background-repeat: no-repeat;
  background-color: #20383d;
  backdrop-filter: contrast(200%);
`;

const Gradation = styled.div`
position: relative;
top:-10%;
height: 10vh;
background: linear-gradient(to top, #20383d, rgba(32, 56, 61, 0));
`;



const Heading = styled.h1`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  padding: 0.5rem;
  background-color: rgba(255, 255, 255, 0.7);
  font-size: 2rem;
  font-family: LightNovelPOPv2;
  white-space: nowrap;

  ${media.lessThan("small")`
  font-size:1.8rem;
  width: 280px;
  `}
`;

const Arrow = styled.div`
  position: absolute;
  top: 75%;
  left: 50%;
  width: 50px;
  height: 50px;
  transform: translate(-50%);
  background-image: url("assets/images/arrow-white.png");
  background-size: contain;
  background-repeat: no-repeat;
`;
