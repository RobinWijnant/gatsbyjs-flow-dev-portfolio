// @flow
import * as React from "react"
import styled from "@emotion/styled"
import styleVars from "../styles/vars"
import Color from "color"

const Type = styled.span`
  border-radius: calc(10px * ${props => props.size});
  padding: calc(7px * ${props => props.size} * 0.7 + 2.1px)
    calc(14px * ${props => props.size})
    calc(7px * ${props => props.size} * 0.7 + 2.1px)
    calc(16px * ${props => props.size});
  border: 1.5px solid ${styleVars.colors.grey[300]};
  display: inline-block;
  font-size: calc(
    ${styleVars.text.size} * ${props => props.size} * 0.8 + 2.8px
  );
  background-image: radial-gradient(
    ${Color(styleVars.colors.grey[300])
        .lighten(0.07)
        .hex()}
      15%,
    transparent 15%
  );
  background-size: 200px 200px;
  background-repeat: no-repeat;
  background-position: -115px;
  cursor: pointer;
  transition: border 0.4s, background 0.4s;

  &:hover {
    background-color: ${styleVars.colors.grey[100]};
  }

  &.active {
    border-color: ${styleVars.colors.blue};
    background-image: radial-gradient(
      ${Color(styleVars.colors.blue)
          .lighten(0.2)
          .hex()}
        15%,
      transparent 15%
    );
  }

  &.active:hover {
    background-color: ${Color(styleVars.colors.blue)
      .lighten(0.3)
      .hex()};
  }
`

type Props = {
  size?: number,
  active?: boolean,
  className?: string,
  children?: React.Node,
  onClick?: () => void,
}

const ClickableProjectType = (props: Props) => {
  return (
    <Type
      className={`${props.className} ${props.active ? "active" : ""}`}
      size={props.size}
      onClick={props.onClick}
    >
      {props.children}
    </Type>
  )
}

ClickableProjectType.defaultProps = {
  size: 1,
  active: false,
  className: "",
}

export default ClickableProjectType
