// @flow
import * as React from "react"
import styled from "@emotion/styled"
import styleVars from "../styles/vars"

const Type = styled.span`
  border-radius: 999px;
  padding: calc(7px * ${props => props.size})
    calc(14px * ${props => props.size});
  border: 1.5px solid ${styleVars.colors.grey[300]};
  display: inline-block;
  font-size: calc(${styleVars.text.size} * ${props => props.size});
`

type Props = {
  size?: number,
  className?: string,
  children?: React.Node,
}

const LinkWrapper = ({ className, children, size }: Props) => {
  return (
    <Type className={className} size={size}>
      {children}
    </Type>
  )
}

LinkWrapper.defaultProps = {
  size: 1,
}

export default LinkWrapper
