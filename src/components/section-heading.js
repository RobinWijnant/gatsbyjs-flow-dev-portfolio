// @flow
import * as React from "react"
import styled from "@emotion/styled"
import styleVars from "../styles/vars"

const Text = styled.h3`
  margin-top: ${styleVars.spacing.sectionMargin};
  margin-bottom: calc(${styleVars.spacing.sectionMargin} / 2);
  text-align: center;
`

type Props = {
  className?: string,
  children?: React.Node,
}

const SectionHeading = ({ className, children }: Props) => (
  <Text className={className}>{children}</Text>
)

export default SectionHeading
