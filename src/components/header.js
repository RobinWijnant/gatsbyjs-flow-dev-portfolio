import { Link } from "gatsby"
import React from "react"
import styled from "@emotion/styled"
import styleVars from "../styles/vars"
import logo from "../images/logo.svg"
import Wrapper from "./wrapper"

const WrapperStyled = styled(Wrapper)`
  width: 100%;
  padding: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const Logo = styled.img`
  width: 25px;
`
const NavList = styled.ul`
  list-style-type: none;
  display: flex;
  margin: 0;
  padding: 0 0 0 20px;
`
const NavItem = styled.li`
  margin-left: 30px;
`
const NavLink = styled(Link)`
  color: ${styleVars.colors.black};
  text-decoration: none;
  font-weight: 500;
`

const Header = ({ className }) => (
  <WrapperStyled className={className}>
    <Link to="/">
      <Logo src={logo} alt="Logo Robin Wijnant" />
    </Link>
    <nav>
      <NavList>
        <NavItem>
          <NavLink to="/">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/cases">Projects</NavLink>
        </NavItem>
      </NavList>
    </nav>
  </WrapperStyled>
)

export default Header
