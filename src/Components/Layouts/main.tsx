import React from "react";
import styled from "styled-components";

const tasks = [
  { id: 1, title: "one" },
  { id: 2, title: "two" },
  { id: 3, title: "three" },
  { id: 4, title: "four" },
  { id: 5, title: "five" }
];

const Main = () => {
  return (
    <div>
      <Inner className="inner">
        <Content>
          <Heading>
            このページについて
          </Heading>
          <Text>
            サッポロビールのブランド、HOPPIN' GARAGEへ
            「い草」を使ったオリジナルビール案を応募したら
            見事商品化されましたので、その宣伝になります。
          </Text>
          <Annotation>
            ※なお、どんなに売れても私にインセンティブが入る等はありません。本当にただの応援ですｗ(あとサイト作りの練習です)
            ※い草がビールの原料として認められなかったため、酒税法上発泡酒の扱いとなります。(ここでは広義の解釈でビールと呼称しています)
          </Annotation>
        </Content>
    </Inner>
    </div >
  );
};

export default Main;

const Content = styled.div`
  
`;
const Heading = styled.h1`
font-size:30px;
`;

const Text = styled.p`
margin-top:30px;
font-size:25px;
`;

const Annotation = styled.p`
margin-top:30px;
font-size:25px;
`;





