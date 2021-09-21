import React from "react";
import styled from "styled-components";

const tasks = [
  { id: 1, heading: "このページについて",text:"サッポロビールのブランド、HOPPIN' GARAGEへ<br />「い草」を使ったオリジナルビール案を応募したら<br />見事商品化されましたので、その宣伝です。",annotation:"※なお、どんなに売れても私にインセンティブが入る等はありません。本当にただの応援ですｗ(あとサイト作りの練習です)<br />※い草がビールの原料として認められなかったため、酒税法上発泡酒の扱いとなります。(ここでは広義の解釈でビールと呼称しています)" },
  { id: 2, title: "two" },
  { id: 3, title: "three" },
  { id: 4, title: "four" },
  { id: 5, title: "five" }
];

const Main = () => {
  return (
    <div>
      <Inner>
        <Content>
          <Heading>
            このページについて
          </Heading>
          <Text>
            サッポロビールのブランド、HOPPIN' GARAGEへ<br />
            「い草」を使ったオリジナルビール案を応募したら<br />
            見事商品化されましたので、その宣伝です。
          </Text>
          <Annotation>
            ※なお、どんなに売れても私にインセンティブが入る等はありません。アフィリエイトもありません。本当にただの応援ですｗ<br />
            ※い草がビールの原料として認められなかったため、酒税法上発泡酒の扱いとなります。(ここでは広義の解釈でビールと呼称しています)
          </Annotation>
        </Content>
        <Content>
          <Heading>
          HOPPIN' GARAGE(ホッピンガレージ)とは
          </Heading>
          <Text>
            サッポロビールさんが手掛けるブランドで、<br />
ビールのアイデアを募集して作ったり、人生ストーリーをビールにしたり等、かなり独創的なビールを作っています。<br />
（過去の商品はおむすび専用ビール、チョコミントビア、ボードゲーム用ビール等々……）
          </Text>
          <Annotation>
          ～note抜粋～<br />
「できたらいいな。を、つくろう」を合言葉に、<br />
魅力的な人々の人生ストーリーをもとにしたビールづくりをはじめ、<br />
絵本やゲーム、ラジオにイベントなど、<br />
これまでの発想に捉われない「新しいビールの楽しみ方」を続々とお届けします。<br />
公式サイト
https://www.hoppin-garage.com/<br />

公式note
https://note.com/hoppin_garage
          </Annotation>
        </Content>
    </Inner>
    </div >
  );
};

console.log(tasks);

export default Main;

const Inner = styled.div`

`;

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





