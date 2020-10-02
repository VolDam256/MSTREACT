import React from "react";

import styled from "@emotion/styled";

const Footer = styled.div`
  grid-row-start: 2;
  grid-row-end: 3;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  height: 60px;

  padding-left: 35px;
  font: normal 300 13px/15px Gilroy-lite;
  /* identical to box height */
  letter-spacing: 0.03em;
  text-transform: uppercase;
  /* TextDisable */
  color: #505050;
`;
const FooterContent = styled.span`
  margin-right: 20px;

  &:last-child {
    margin-right: 0;
  }
`;

var footer_elements = [
  { content: "Разработано в MST" },
  { content: "|" },
  { content: "2018" },
];

export default class Footer_class extends React.Component {
  render() {
    const dom_footer_elements = footer_elements.map((val, index) => {
      return <FooterContent key={index}>{val.content}</FooterContent>;
    });
    return <Footer>{dom_footer_elements}</Footer>;
  }
}
