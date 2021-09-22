import React from "react";
import styled from "styled-components";
import Hero from "Components/Layouts/hero"
import Main from "Components/Layouts/main";

const Wrap = () => {
  return (
    <div>
      <Container>
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
`;
