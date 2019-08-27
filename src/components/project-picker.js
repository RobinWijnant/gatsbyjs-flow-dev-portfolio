import React from "react"
import styled from "@emotion/styled"
import styleVars from "../styles/vars"
import Wrapper from "./wrapper"

const Arrow = styled.button`
  all: unset;
`

const ProjectPicker = ({className}) => (
  <Wrapper className={className}>
    <Arrow>This is an unstyled button</Arrow>
  </Wrapper>
)

export default ProjectPicker
