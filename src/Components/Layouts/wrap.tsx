import React from "react";
import styled from "styled-components";
import Main from "Components/Layouts/main";

const Wrap = () => {
  return (
    <div>
      <Container className="wrap">
<Main />
      </Container>
    </div>
  );
};

export default Wrap;

const Container = styled.div`
  position: relative;
  width: 100%;
  height:100vh;
  background-image: url("assets/images/bg.jpg");
`;
