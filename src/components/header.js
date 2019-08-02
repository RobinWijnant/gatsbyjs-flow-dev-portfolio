import { Link } from "gatsby"
import React from "react"
import styled from "@emotion/styled"
import styleVars from "../styles/style-vars"
import logo from "../images/logo.svg"

const Wrapper = styled.header`
  width: 100%;
  max-width: ${styleVars.maxWidth};
  margin: 60px auto;
  padding: 0 ${styleVars.wrapperPadding};
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
`
const Logo = styled.img`
  width: 30px;
`
const NavList = styled.ul`
  list-style-type: none;
  display: flex;
`
const NavItem = styled.li`
  margin-right: 30px;
`
const NavLink = styled(Link)`
  color: ${styleVars.headerTextColor};
  text-decoration: none;
  font-weight: 500;
`

const Header = () => (
  <Wrapper>
    <Link to="/">
      <Logo src={logo} alt="Logo Robin Wijnant" />
    </Link>
    <nav>
      <NavList>
        <NavItem>
          <NavLink to="/">Home</NavLink>
        </NavItem>
        <NavLink>
          <NavLink to="/cases">Cases</NavLink>
        </NavLink>
      </NavList>
    </nav>
  </Wrapper>
)

export default Header
