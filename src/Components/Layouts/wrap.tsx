import React from "react";
import styled from "styled-components";
import Header from "Components/Layouts/Header";
import Hero from "Components/Layouts/Hero"
import Main from "Components/Layouts/Main";
import Footer from "Components/Layouts/Footer";
import { ScrollTop } from "Components/Parts/ScrollTop";


const Wrap = () => {
  return (
    <div>
      <Container>
        <ScrollTop />
        <Header />
        <Hero />
        <Main />
        <Footer />
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
