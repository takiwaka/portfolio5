import React from "react";
import styled from "styled-components";
import media from "styled-media-query";

export const ScrollTop: React.FC = () => {
    return <Button onClick={scroll} />;
};

const scroll = (): void => {
    window.scroll({
        top: 0, // 最上部へスクロール
        behavior: 'smooth',
    });
};

const Button = styled.div`
  background-image: url('assets/images/arrow.png');
  cursor: pointer;
  position: fixed;
  right: 5%;
  bottom: 5%;
  min-width: 48px;
  min-height: 48px;
  z-index: 100;
  transition: opacity 1s, visibility 1s, transform 0.5s;
  opacity: 0.5;
  visibility: visible;
  ${media.greaterThan("small")`
  &:hover {
    transform: scale(1.2);
    -webkit-transform: scale(1.2);
  `}
`;