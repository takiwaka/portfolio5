import React from "react";
import styled from "styled-components";
import media from "styled-media-query";

const Hero = () => {
  return (
    <div>
      <Content className="hero">
        <Image />
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
        <Arrow>↓</Arrow>
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
  height: 70%;
  /* background-image: url("assets/images/bg.jpg"); */
  background: linear-gradient(top,#20383d),url("assets/images/bg.jpg");
  background: linear-gradient(to top, #20383d, rgba(255, 255, 255, 0)),
  url("assets/images/bg.jpg");
  background-size: cover;
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  background-color: #20383d;
`;

const Heading = styled.h1`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  padding: 0.5rem;
  background-color: rgba(255, 255, 255, 0.8);
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
  transform: translate(-50%);
  font-family: LightNovelPOPv2;
  font-size: 2rem;
  color: white;
  ${media.lessThan("small")`
  bottom:50px;

  `}
`;
