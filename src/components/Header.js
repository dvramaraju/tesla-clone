import React from "react";
import styled from "styled-components";
import { Menu } from "@mui/icons-material";

export default function Header() {
  return (
    <Container>
      <a href="/">
        <img src="/images/logo.svg" alt="" />
      </a>
      <CenterMenu>
        <a href="/">Model S</a>
        <a href="/">Model 3</a>
        <a href="/">Model X</a>
        <a href="/">Model Y</a>
      </CenterMenu>
      <RightMenu>
        <p>
          <a href="/">Shop</a>
          <a href="/">Tesla Account</a>
        </p>
        {/* <svg data-testid="Menu"></svg> */}
        <Menu></Menu>
      </RightMenu>
    </Container>
  );
}

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
`;
const CenterMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
  }
`;
const RightMenu = styled.div`
  a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
  }
`;
