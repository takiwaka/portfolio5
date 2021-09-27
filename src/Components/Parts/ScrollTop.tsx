import React, { useEffect, useState } from "react";
import styled from "styled-components";
import media from "styled-media-query";

export const ScrollTop: React.FC = () => {
  const [isTop, setIsTop] = useState<boolean>(true);

  const onScroll = (): void => {
    if (getTop() >= 100) {
      setIsTop(false);
    } else {
      setIsTop(true);
    }
  };

  useEffect(() => {
    document.addEventListener("scroll", onScroll);
    return (): void => document.removeEventListener("scroll", onScroll);
  });

  const scrollStyle: React.CSSProperties = isTop
    ? { visibility: "hidden", opacity: "0" }
    : {};

  return <Button style={scrollStyle} onClick={scroll} />;
};

const getTop = (): number =>
  Math.max(
    window.pageYOffset,
    document.documentElement.scrollTop,
    document.body.scrollTop
  );

const scroll = (): void => {
  typeof window !== "undefined" &&
    window.scroll({
      top: 0, // 最上部へスクロール
      behavior: "smooth",
    });
};

const Button = styled.div`
  background-image: url("assets/images/arrow.png");
  cursor: pointer;
  position: fixed;
  right: 5%;
  bottom: 5%;
  min-width: 48px;
  min-height: 48px;
  z-index: 100;
  opacity: 0.5;
  transition: opacity 1s, visibility 1s, transform 0.5s;
  visibility: visible;
  ${media.greaterThan("small")`
  &:hover {
    transform: scale(1.2);
    -webkit-transform: scale(1.2);
  `}
`;

// const HideScrollToTop = css`
//   z-index: 0;
//   opacity: 0;
//   visibility: hidden;
// `;
