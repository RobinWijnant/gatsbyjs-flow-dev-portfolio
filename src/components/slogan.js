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
  height: 75px;

  @media (max-width: 600px) {
    font-size: 20px;
    margin: 60px 0;
    height: 55px;
  }
`
const cursorStyles = css`
  color: ${styleVars.bannerColor};
`

const Slogan = ({ className, onLoaded }) => (
  <H2 className={className}>
    <Typing 
      speed={20} 
      cursor={<Typing.Cursor css={cursorStyles} />}
      onFinishedTyping={onLoaded}
      >
      <span>
        Hi, I am Robin Wijnant.
        <Typing.Delay ms={500} />
        <Typing.Speed ms={10} />
        <br />I create digital experiences.
      </span>
    </Typing>
  </H2>
)

export default Slogan
