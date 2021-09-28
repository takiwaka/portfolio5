import React from "react";
import styled from "styled-components";
import Hero from "Components/Layouts/hero"
import Main from "Components/Layouts/main";
import { ScrollTop } from "Components/Parts/ScrollTop";


const Wrap = () => {
  return (
    <div>
      <Container>
        <ScrollTop />
        <Hero />
        <Main />
      </Container>
    </div>
  );
};

export default Wrap;

const Container = styled.div`
  position: relative;
  width: 100%;
  height:100%;
  overflow:hidden;
  background-image: url("assets/images/tatami01.jpg");
  background-color: rgba(255, 255, 255, 0.5);
  background-blend-mode: lighten;
`;
