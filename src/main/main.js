import React from "react";
import styled from "@emotion/styled";
import LinesEllipsis from "react-lines-ellipsis";
import { withRouter } from "react-router-dom";

function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(
  require.context("../images/", false, /\.(png|jpe?g|svg)$/)
);

const Main = styled.div`
  position: absolute;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-gap: normal;
  top: 55px;
  margin-left: 35px;
  width: calc(100% - 115px);
  height: 87.5vh;
  z-index: 1;
  opacity: 1;
  transition-duration: 0.8s;
`;

const Aside = styled.div`
  grid-column: span 2;
  display: flex;
  align-items: center;
`;
const AsideList = styled.ul`
  padding: 0;
`;
const AsideElement = styled.li`
  list-style-type: none;
  margin-top: 20px;
`;
const AsideLink = styled.a`
  position: relative;
  display: inline-block;
  font: ${(props) =>
    props.primary
      ? "normal bold 14px/16px Roboto"
      : "normal 300 13px/15px Roboto"};
  text-transform: ${(props) => (props.primary ? "uppercase" : "")};
  transition: transform 0.8s ease, font 0.8s ease;
  text-decoration: none;
  letter-spacing: 0.03em;
  color: #262525;
  transform: scale(${(props) => (props.primary ? "1.01" : "1")});
  &:after {
    content: "";
    position: relative;
    display: block;
    left: -5px;
    top: -7px;
    height: 9px;
    width: ${(props) => (props.primary ? "calc(100% + 10px)" : "0")};
    background-color: #ebd8cc;
    opacity: 1;
    z-index: -1;
    transition-duration: 0.8s;
  }

  &:hover:after {
    width: calc(100% + 10px);
  }
`;

const Description = styled.div`
  grid-column: span 5;
  position: relative;
  background-color: #f0f0f0;
`;

const DescriptionBlock = styled.div`
  position: relative;
  top: 36vh;
  left: 10.3vw;
`;

const DescriptionItem = styled.div`
  position: relative;
  width: 22.6vw;
  transition-duration: 0.8s;
  overflow: hidden;
  opacity: ${(props) => (props.primary ? "1" : "0")};
  height: ${(props) => (props.primary ? "200px" : "0")};
`;

const DescriptionMainText = styled.div`
  position: relative;
  margin: 0;
  top: 1 vh;
  font: normal 800 44px/54px Gilroy;

  letter-spacing: 0.004em;
  text-transform: uppercase;

  color: #262525;
`;
const DescriptionSemiText = styled(LinesEllipsis)`
  position: relative;
  margin: 0;
  top: 2vh;
  font: normal normal 18px/30px Roboto;
  letter-spacing: -0.01em;
  text-transform: none;

  color: #262525;
`;

const DescriptionSemiLink = styled.a`
  display: inline-block;
  text-decoration: none;
  text-align: center;
  width: 28px;
  height: 28px;
  color: white;
  background-color: #262525;
  font-size: 90%;
  margin: 5px;
`;
const DescriptionNavigacia = styled.div`
  position: absolute;
  z-index: 1;
  top: 70vh;
  left: 10.3vw;
`;

const DescriptionNavigaciaFirstnumber = styled.span`
  font: normal normal 18px/30px Gilroy-lite;
`;

const DescriptionNavigaciaSecond = styled.span`
  font: normal normal 18px/30px Gilroy-lite;
`;

const Picture = styled.div`
  grid-column: span 758px;
  flex-grow: 5;
  width: 35.6vw;
`;

const PictureSlaider = styled.img`
  position: absolute;
  width: 35.6vw;
  height: ${(props) => (props.primary ? "87.5vh" : "0")};
  overflow: hidden;
  transition-duration: 0.4s;
`;

var main_elements = [
  {
    content: "Архитектура",
    semicontent:
      "Оригинальная архитктура жилого комплекса бизнес-класса «Первомайская» формирует современный стиль жизни qw wq 1 wd wd 2 3 4 666666666666 666666666666 666666666666 666666666666",
  },
  {
    content: "Благоустройство",
    semicontent:
      "Запроектированные большие окна, которые пропускают много солнечного света, наполнят Ваши квартиры теплотой и уютом текст тексттексттексттексттексттексттексттекст",
  },
  {
    content: "Безопастность",
    semicontent:
      "Современный двор европейского уровня - територия для детей, игр на свежем воздуху и вечерних текст тексттексттексттексттексттексттексттекст",
  },
  {
    content: "Инженерия",
    semicontent:
      "Оригинальная архитктура жилого комплекса бизнес-класса «Первомайская» формирует современный стиль жизни qw wq w wd wd w w dwd",
  },
  {
    content: "Инфраструктура",
    semicontent:
      "Прекрасный вариант для тех, кто предпочитает жить в спокойном районе среди интеллигенции, но при этом чувствовать ритм мегаполиса текст тексттексттексттексттексттексттексттекст",
  },
  {
    content: "Транспортная доступность",
    semicontent:
      "Жилой комплекс «Первомайска» расположен в престижном Академическом районе",
  },
];

class Main_class extends React.Component {
  constructor(props) {
    super();
    this.state = { description__item_position: -1, peremen: 0 };
  }

  componentDidMount() {
    setTimeout(
      () => this.setState({ description__item_position: 0, peremen: 1 }),
      290
    );
  }
  render() {
    const dom_description_elements = main_elements.map((val, index) => {
      return (
        <DescriptionBlock key={index}>
          <DescriptionItem
            primary={this.state.description__item_position === index}
          >
            {!!this.state.peremen && (
              <>
                <DescriptionMainText>{val.content}</DescriptionMainText>
                <DescriptionSemiText
                  text={val.semicontent}
                  maxLine="3"
                  ellipsis={
                    <DescriptionSemiLink href="#">...</DescriptionSemiLink>
                  }
                  trimRight
                  basedOn="words"
                />
              </>
            )}
          </DescriptionItem>
        </DescriptionBlock>
      );
    });
    const dom_pic_elements = main_elements.map((val, index) => {
      return (
        <PictureSlaider
          key={index}
          styled={{ zIndex: index }}
          primary={this.state.description__item_position >= index}
          src={images[index]}
        />
      );
    });

    const dom_aside_elements = main_elements.map((val, index) => {
      return (
        <AsideElement key={index}>
          <AsideLink
            primary={this.state.description__item_position === index}
            href="#"
            onClick={() => {
              this.setState({ description__item_position: index });
            }}
          >
            {val.content}
          </AsideLink>
        </AsideElement>
      );
    });
    return (
      <Main>
        <Aside>
          <AsideList>{dom_aside_elements}</AsideList>
        </Aside>
        <Description>
          {dom_description_elements}
          <DescriptionNavigacia>
            <DescriptionNavigaciaFirstnumber>
              {this.state.description__item_position + 1}
            </DescriptionNavigaciaFirstnumber>
            <DescriptionNavigaciaSecond>/6</DescriptionNavigaciaSecond>
          </DescriptionNavigacia>
        </Description>
        <Picture>{dom_pic_elements}</Picture>
      </Main>
    );
  }
}

export default withRouter(Main_class);
