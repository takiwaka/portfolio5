import React from "react";
import Styled from "styled-components";

const Footer = () => {
  return (
    <Div>
      <p>Copyright © 2021 takiwaka</p>
      </Div>
  );
};

export default Footer;

const Div = Styled.div`
  width: 100%;
  height:20px;
  overflow:hidden;
  background-color: rgb(32, 56, 61);
  background-blend-mode: lighten;
  color:white;
  text-align:right;
`;
