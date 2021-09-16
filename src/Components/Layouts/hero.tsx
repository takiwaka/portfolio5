import React from "react";
import styled from "styled-components";

const Main = () => {
    return (
        <div>
            <Hero className="hero">
                <Heading >畳の原料「い草」でビールを作れば<br />
                    苦くて旨いのができるじゃね？と<br />
                    サッポロビールさんに応募した所、<br />
                    採用されて商品化までしちゃった件</Heading>
                <Arrow>↓SCROLL</Arrow>
            </Hero>
        </div>
    );
};

export default Hero;

const Hero = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
background-image: url("assets/images/bg.jpg");
background-position: center center;
background-size: cover;
background-repeat: no-repeat;
background-color:rgba(255,255,255,0.8);
background-blend-mode:lighten;
`;

const Heading = styled.h1`
position: absolute;
top: 50%;
left: 50%;  
transform: translate(-50%,-50%);
background-color:rgba(255,255,255,0.8);
`;

const Arrow = styled.div`
position: absolute;
bottom: 0;
left: 50%;
transform: translate(-50%);
font-family:din1451alt;
`