import React from "react"
import styled from "@emotion/styled"
import styleVars from "../styles/vars"

const Text = styled.h3`
  margin-top: ${styleVars.spacing.sectionMargin};
  text-align: center;
`

const SectionHeading = ({className, children}) => (
  <Text className={className}>{children}</Text>
)

export default SectionHeading
