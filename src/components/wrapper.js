import React from "react"
import styled from "@emotion/styled"
import styleVars from "../styles/vars"

const Container = styled.div`
  max-width: ${styleVars.spacing.maxWidth};
  padding: 0 ${styleVars.spacing.sideMargin};
  box-sizing: border-box;
`

const Wrapper = ({className}) => (
  <Container className={className}>
  
  </Container>
)

export default Wrapper
