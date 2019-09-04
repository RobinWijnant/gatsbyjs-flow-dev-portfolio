// @flow
import * as React from "react"
import styled from "@emotion/styled"
import styleVars from "../styles/vars"

const Container = styled.div`
  max-width: ${styleVars.spacing.maxWidth};
  padding: 0 ${styleVars.spacing.sideMargin};
  margin: 0 auto;
  box-sizing: border-box;
`

type Props = {
  className?: string,
  children?: React.Node,
}

const Wrapper = ({ className, children }: Props) => (
  <Container className={className}>{children}</Container>
)

export default Wrapper
