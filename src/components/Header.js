import React from "react";
import styled from "styled-components";
import { Close, Menu } from "@mui/icons-material";
import { BrowserRouter as Router, Link } from "react-router-dom";

export default function Header() {
  return (
    <Router>
      <Container>
        <Link to="/">
          <img src="/images/logo.svg" alt="" />
        </Link>
        <CenterMenu>
          <Link to="/">Model S</Link>
          <Link to="/">Model 3</Link>
          <Link to="/">Model X</Link>
          <Link to="/">Model Y</Link>
        </CenterMenu>
        <RightMenu>
          <p>
            <Link to="/">Shop</Link>
            <Link to="/">Tesla Account</Link>
          </p>
          <CustomMenu />
        </RightMenu>
        <BurgerNav>
          <CloseWrapper>
            <CustomClose />
          </CloseWrapper>
          <li>
            <Link to="/">Existing Inventory</Link>
          </li>
          <li>
            <Link to="/">Used Inventory</Link>
          </li>
          <li>
            <Link to="/">Trade-in</Link>
          </li>
          <li>
            <Link to="/">Cybertruck</Link>
          </li>
          <li>
            <Link to="/">Roadster</Link>
          </li>
          <li>
            <Link to="/">Existing Inventory</Link>
          </li>
          <li>
            <Link to="/">Existing Inventory</Link>
          </li>
          <li>
            <Link to="/">Existing Inventory</Link>
          </li>
        </BurgerNav>
      </Container>
    </Router>
  );
}

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
  @media (max-width: 768px) {
    display: none;
  }
`;
const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
  }
`;
const CustomMenu = styled(Menu)`
  cursor: pointer;
`;
const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  width: 300px;
  z-index: 16;
  list-style: none;
  padding: 20px;
  flex-direction: column;
  text-align: start;
  li {
    padding: 15px 0;
    border-bottom 1px solid rgba(0,0,0,.2);
    a {
      font-weight: 600;
    }
  }
`;
const CustomClose = styled(Close)``;
const CloseWrapper = styled.div`
  disply: flex;
  justify-content: flex-end;
`;
