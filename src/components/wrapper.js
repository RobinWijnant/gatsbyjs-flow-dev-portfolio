import React from "react"
import styled from "@emotion/styled"
import styleVars from "../styles/vars"

const Container = styled.div`
  max-width: ${styleVars.spacing.maxWidth};
  padding: 0 ${styleVars.spacing.sideMargin};
  margin: 0 auto;
  box-sizing: border-box;
`

const Wrapper = ({className, children}) => (
  <Container className={className}>
    {children}
  </Container>
)

export default Wrapper
