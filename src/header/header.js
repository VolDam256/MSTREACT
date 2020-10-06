import React from "react";
import styled from "@emotion/styled";

import { withRouter, NavLink } from "react-router-dom";
import ReactLogo from "./sprite.svg";

const Header = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  height: 95px;
  z-index: 2;
`;
const Logo = styled(NavLink)`
  height: 70px;
  text-decoration: none;
  vertical-align: top;
`;
const LogoIcon = styled.div`
  display: inline-block;
  width: 70px;
  height: 70px;
  background-color: black;
`;
const LogoText = styled.div`
  display: inline-block;
  vertical-align: top;
  margin-left: 15px;

  font: normal 800 17px/21px Gilroy;
  text-decoration: none;
  color: #262525;
  border: 0;
  letter-spacing: 0.03em;
  text-transform: uppercase;
`;
const Menu = styled.div`
  align-self: flex-start;
  margin-top: 23px;
`;
const MenuList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  &:after {
    content: "";
    clear: both;
    display: block;
  }
`;
const MenuElement = styled.li`
  transition: color 0.2s linear;
  padding-left: 25px;
  padding-right: 25px;
  float: left;
  &:first-of-type {
    padding-left: 5px;
  }
  &:last-of-type {
    padding-right: 5px;
  }
`;
const MenuLink = styled(NavLink)`
  text-decoration: none;
  color: #262525;
  font: normal 800 12px/15px Gilroy;
  letter-spacing: 0.05em;
  text-transform: uppercase;
`;
const MenuLine = styled.div`
  position: absolute;
  top: 44px;
  width: 100px;
  height: 4px;
  background-color: #d88f5e;
  z-index: 1;
  transition-duration: 0.8s;
`;
const Nelogo = styled.div`
  height: 70px;
`;
const Callnumber = styled.a`
  vertical-align: top;
  margin-right: 20px;
  color: #262525;
  text-decoration: none;
  font: normal 800 17px/21px Gilroy;
  letter-spacing: 0.03em;
  text-transform: uppercase;
`;
const Burger = styled.div`
  display: inline-block;
  width: 70px;
  height: 70px;
  background-color: black;
  border: 0;
  outline: none;
  padding: 0;
  cursor: pointer;
`;

const Svg = styled.svg`
  width: 100%;
  height: 100%;
`;

var menu_elements = [
  { content: "О комплексе", href: "/" },
  { content: "Особенности", href: "/main_osob" },
  { content: "Пентхаусы", href: "/main_pent" },
  { content: "Выбрать квартиру", href: "/main_vubkv" },
];

class Header_class extends React.Component {
  constructor(props) {
    super();
    this.onMouseE = this.onMouseE.bind(this);
    this.onMouseL = this.onMouseL.bind(this);
    this.Click = this.Click.bind(this);
    this.setpos = this.setpos.bind(this);
    this.links = [
      React.createRef(),
      React.createRef(),
      React.createRef(),
      React.createRef(),
    ];
    let location = props.location.pathname;
    let line_position = 0;
    switch (location) {
      case "/main_osob":
        line_position = 1;
        break;
      case "/main_pent":
        line_position = 2;
        break;
      case "/main_vubkv":
        line_position = 3;
        break;
      default:
        line_position = 0;
        break;
    }
    this.state = {
      line_position: line_position,
      peremen: ``,
    };
  }
  setpos(peremen1, peremen2) {
    this.setState({
      peremen: `translateX(${peremen1}px) scaleX(${peremen2})`,
    });
  }

  Click(event) {

    let width = this.links[event].current.getBoundingClientRect().width;
    width = (width + 10) / 100;

    this.setpos(
      this.links[event].current.getBoundingClientRect().left -
        this.links[0].current.getBoundingClientRect().left +
        (width * 100 - 100) / 2,
      width
    );
    this.setState({ line_position: event });
  }

  onMouseE(event) {
    if (event !== this.state.line_position) {
      let newtrans;
      let newscale;
      if (event > this.state.line_position) {
        newscale =
          (this.links[event].current.getBoundingClientRect().left -
            this.links[this.state.line_position].current.getBoundingClientRect()
              .left +
            this.links[event].current.getBoundingClientRect().width +
            8) /
          100;
      } else {
        newscale =
          (this.links[this.state.line_position].current.getBoundingClientRect()
            .right -
            this.links[event].current.getBoundingClientRect().right +
            this.links[event].current.getBoundingClientRect().width +
            8) /
          100;
      }
      if (event > this.state.line_position) {
        newtrans =
          this.links[this.state.line_position].current.getBoundingClientRect()
            .left -
          this.links[0].current.getBoundingClientRect().left +
          (newscale * 100 - 100) / 2;
      } else {
        newtrans =
          this.links[event].current.getBoundingClientRect().left -
          this.links[0].current.getBoundingClientRect().left +
          (newscale * 100 - 100) / 2;
      }
      this.setpos(newtrans, newscale);
    }
  }

  onMouseL(event) {
    let width = this.links[event].current.getBoundingClientRect().width;
    width = (width + 10) / 100;

    this.setpos(
      this.links[event].current.getBoundingClientRect().left -
        this.links[0].current.getBoundingClientRect().left +
        (width * 100 - 100) / 2,
      width
    );
  }
  render() {
    const dom_menu_elements = menu_elements.map((val, index) => {
      return (
        <MenuElement key={index}>
          <MenuLink
            ref={this.links[index]}
            key={index}
            to={val.href}
            onClick={() => this.Click(index)}
            onMouseEnter={() => this.onMouseE(index)}
            onMouseLeave={() => this.onMouseL(this.state.line_position)}
          >
            {val.content}
          </MenuLink>
        </MenuElement>
      );
    });

    return (
      <Header>
        <Logo to="/" onClick={() => this.Click(0)}>
          <LogoIcon></LogoIcon>
          <LogoText>Первомайская</LogoText>
        </Logo>
        <Menu>
          <MenuList>{dom_menu_elements}</MenuList>
          <MenuLine
            style={{
              transform: `${this.state.peremen}`,
            }}
          ></MenuLine>
        </Menu>
        <Nelogo>
          <Callnumber href="tel:+7 888 888 88 88">8 888 888 88 88</Callnumber>
          <Burger>
            <Svg>
              <use xlinkHref={ReactLogo+"#line"} />
            </Svg>
          </Burger>
        </Nelogo>
      </Header>
    );
  }
}

export default withRouter(Header_class);
