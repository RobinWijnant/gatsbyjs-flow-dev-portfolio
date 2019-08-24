import React from "react"
import styled from "@emotion/styled"
import Typing from "react-typing-animation"

const H2 = styled.h2`
  margin: 12% 0;
  font-size: 26px;
  font-weight: 700;
  line-height: 150%;
  letter-spacing: 0.04em;
  height: 75px;

  @media (max-width: 600px) {
    font-size: 20px;
    margin: 60px 0;
    height: 55px;
  }
`

const Slogan = ({ className }) => (
  <H2 className={className}>
    <Typing>
      <span>
        Hi, I am Robin Wijnant.
        <Typing.Delay ms={500} />
        <Typing.Speed ms={30} />
        <br />I create digital experiences.
      </span>
    </Typing>
  </H2>
)

export default Slogan
