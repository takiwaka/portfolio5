import React from "react";
import styled from "styled-components";
import media from "styled-media-query";

const Main = () => {
  return (
    <div>
      <Inner>
        <Content>
          <Heading>このページについて</Heading>
          <Text>
            サッポロビールのブランド、HOPPIN' GARAGEへ
            <br />
            「い草」を使ったオリジナルビール案を応募したら
            <br />
            見事商品化されましたので、その宣伝です。
          </Text>

          <Capture>
            ※なお、どんなに売れても私にインセンティブが入る等はありません。アフィリエイトもありません。本当にただの応援ですｗ
            ※い草がビールの原料として認められなかったため、酒税法上発泡酒の扱いとなります。(ここでは広義の解釈でビールと呼称しています)
          </Capture>
        </Content>

        <Content>
          <Heading>HOPPIN' GARAGE(ホッピンガレージ)とは</Heading>
          <Text>
            サッポロビールさんが手掛けるブランドで、
            <br />
            ビールのアイデアを募集して作ったり、人生ストーリーをビールにしたり等、かなり独創的なビールを作っています。
            <br />
            （過去の商品はおむすび専用ビール、チョコミントビア、ボードゲーム用ビール等々……）
          </Text>
          <Capture>
            ～note抜粋～
            <br />
            「できたらいいな。を、つくろう」を合言葉に、
            <br />
            魅力的な人々の人生ストーリーをもとにしたビールづくりをはじめ、
            <br />
            絵本やゲーム、ラジオにイベントなど、
            <br />
            これまでの発想に捉われない「新しいビールの楽しみ方」を続々とお届けします。
            <br />
            <Link
              href="https://www.hoppin-garage.com/ "
              target="_brank" rel="noopener"
            >
              公式サイト https://www.hoppin-garage.com
            </Link>

            <br />
            <Link
              href="https://note.com/hoppin_garage"
              target="_brank" rel="noopener"
            >
              公式note https://note.com/hoppin_garage

            </Link>
          </Capture>
        </Content>

        <Content>
          <Heading>なんで「い草」？</Heading>
          <Text>
            自分が熊本出身でして、（熊本県は畳の原料である「い草」が全国シェア90％）
            <br />
            青汁等、食用のい草もある事を知っており、さらにはなんか苦そうなので
            <br />
            ビールの苦みの素であるホップの代わりにもなるんじゃないかな～。と思い応募しました。
            <br />
            ２０１９年の試作品お披露目会では、九州の畳関係者もいらっしゃる、盛り上がるイベントとなりました。
            <br />
            <Link
              href=" https://blog.kitchhike.com/hoppin-garage07/?source=hpg-web"
              target="_brank" rel="noopener"
            >
              イベントレポート https://blog.kitchhike.com/hoppin-garage07/?source=hpg-web

            </Link>

            <br />
            まさか本当に商品化するとは……
          </Text>
        </Content>

        <Content>
          <Heading>どんな味？</Heading>
          <Text>
            ちょっとココでは言えないので、ぜひ買って飲んでみて下さい！
            畳の上で飲みたいな～って感じです。(どんな感じだ)
          </Text>
        </Content>

        <Content>
          <Heading>発売日</Heading>
          <Text>10月12日12時～（予定）</Text>
        </Content>

        <Content>
          <Heading>どこで買える？</Heading>
          <Text>
            <Link
              href="https://shop.hoppin-garage.com/merchandises?_ga=2.185629353.1073439917.1631773714-164930450.1630459156"
              target="_brank" rel="noopener"
            >
              公式ECサイト

            </Link>
          </Text>
          <Text>
            <Link href="https://www.amazon.co.jp/stores/%EF%BC%A8%EF%BC%AF%EF%BC%B0%EF%BC%B0%EF%BC%A9%EF%BC%AE%E2%80%99%E3%80%80%EF%BC%A7%EF%BC%A1%EF%BC%B2%EF%BC%A1%EF%BC%A7%EF%BC%A5/page/EF3DB47E-CF0F-4B78-8234-1126DE0F9FE9?ref_=ast_bln"
              target="_brank" rel="noopener"
            >
              amazonのブランドサイト
            </Link>
          </Text>
          <Capture>
            なんか怪しいな……って人はサッポロビールの公式サイトや、「ホッピンガレージ」で検索して下さい。
          </Capture>
        </Content>
      </Inner>
    </div>
  );
};

export default Main;

const Inner = styled.div`

`;

const Content = styled.div`
  width: 80%;
  margin: 100px auto 0;
  border: 1px solid Black;
`;

const Heading = styled.h1`
  font-size: 1.8rem;
  ${media.lessThan("small")`
  font-size:1.5rem;
  `}
`;

const Text = styled.p`
  margin-top: 30px;
  font-size: 1.5rem;
  ${media.lessThan("small")`
  font-size:1.2rem;
  `}
`;

const Capture = styled.p`
  margin-top: 30px;
  font-size: 1.2rem;
  ${media.lessThan("small")`
  font-size:1rem;
  `}
`;

const Link = styled.a`
text-decoration: underline;
`;
