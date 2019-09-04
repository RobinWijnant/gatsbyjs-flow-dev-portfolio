// @flow
import * as React from "react"
import styled from "@emotion/styled"
import styleVars from "../styles/vars"

const Container = styled.div`
  max-width: ${styleVars.spacing.maxWidth};
  padding: 0 calc(2 * ${styleVars.spacing.sideMargin});
  margin: 0 auto;
  box-sizing: border-box;

  @media (max-width: 800px) {
    padding: 0 ${styleVars.spacing.sideMargin};
  }
`

type Props = {
  className?: string,
  children?: React.Node,
}

const TightWrapper = ({ className, children }: Props) => (
  <Container className={className}>{children}</Container>
)

export default TightWrapper
