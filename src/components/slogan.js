import React from "react"
import styled from "@emotion/styled"
import styleVars from "../styles/vars"
import {css} from "@emotion/core"
import Typing from "react-typing-animation"

const H2 = styled.h2`
  margin: 12% 0;
  font-size: 26px;
  font-weight: 700;
  line-height: 150%;
  letter-spacing: 0.04em;
  min-height: 80px;

  @media (max-width: 600px) {
    font-size: 20px;
    margin: 60px 0;
    min-height: 65px;
  }
`
const cursorStyles = css`
  color: ${styleVars.colors.palette.CrayolaGold};
`

const Slogan = ({ className, onLoaded }) => (
  <H2 className={className}>
    <Typing 
      speed={25} 
      cursor={<Typing.Cursor css={cursorStyles} />}
      onFinishedTyping={onLoaded}
      >
      <span>
        Hi, I am Robin Wijnant.
        <Typing.Delay ms={500} />
        <Typing.Speed ms={20} />
        <br />I create digital experiences.
        <Typing.Delay ms={1500} />
      </span>
    </Typing>
  </H2>
)

export default Slogan
