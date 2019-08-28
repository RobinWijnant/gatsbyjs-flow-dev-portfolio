import React from "react"
import styled from "@emotion/styled"
import styleVars from "../styles/vars"
import Wrapper from "./wrapper"

const Text = styled.h3`
  margin-top: ${styleVars.spacing.sectionMargin};
  margin-bottom: calc(${styleVars.spacing.sectionMargin} / 2);
  text-align: center;
`

const SectionHeading = ({className, children}) => (
  <Wrapper>
    <Text className={className}>{children}</Text>
  </Wrapper>
)

export default SectionHeading
