import React from "react";
import styled from "styled-components";

const Main = () => {
  return (
    <div>
      <Inner className="inner">
        <Title>サッポロビールさんのブランド<br />
        HOPPIN' GARAGE(ホッピンガレージ)より<br />
        河北の考えたビールを商品として<br />発売してもらう事になりました！</Title>
        <Heading className="">HOPPIN' GARAGEって？</Heading>
        <a href="https://www.hoppin-garage.com/" target="_blank" rel="noreferrer noopener">ブランドサイト https://www.hoppin-garage.com/</a>
        <p>SAPPOROビールさんが手がけるブランドの１つで、<br />
        募集したビールのアイデアや、ストーリーをビールにしちゃう割とクレイジーな企画ですww</p>
        <a href="https://www.hoppin-garage.com/prototype/igusa/" target="_blank" rel="noreferrer noopener">試作品お披露目イベント https://www.hoppin-garage.com/prototype/igusa/</a>
      </Inner>
    </div>
  );
};

export default Main;

const Inner = styled.div`
  position: relative;
  max-width: 1000px;
  margin: auto;
`;
const Title = styled.h1`
font-size:30px;
`;
const Heading = styled.h2`
margin-top:30px;
font-size:25px;
`;




