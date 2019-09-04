// @flow
import * as React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import styleVars from "../styles/vars"
import Wrapper from "./wrapper"
import SectionHeading from "./section-heading"

type Props = {
  className?: string,
}

const MyStory = ({ className }: Props) => (
  <div className={className}>
    <SectionHeading>This is my story</SectionHeading>
    <Wrapper className={className}>
      <p>text</p>
    </Wrapper>
  </div>
)

export default MyStory
