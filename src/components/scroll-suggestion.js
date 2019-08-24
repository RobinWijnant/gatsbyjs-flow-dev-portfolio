import React from "react"
import styled from "@emotion/styled"

import svgAnimation from "../images/scroll-suggestion.svg"

const Container = styled.div`
  display: inline-block;
  text-align: center;
`
const Text = styled.p`
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  font-weight: 500;
  margin: 0 0 15px;
  padding: 0;
`
const Svg = styled.img`
  height: 20px;
`

const Header = ({ className }) => (
  <Container className={className}>
    <Text>Scroll</Text>
    <Svg src={svgAnimation} alt={"Icon to suggest scrolling behavior"} />
  </Container>
)

export default Header
