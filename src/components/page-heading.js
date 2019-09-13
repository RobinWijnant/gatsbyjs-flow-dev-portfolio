// @flow
import * as React from "react"
import styled from "@emotion/styled"
import styleVars from "../styles/vars"
import pageTitleShapes from "../images/shapes/page-title.svg"

const Text = styled.h2`
  color: ${styleVars.colors.grey[700]};
  position: relative;

  &::before {
    content: "";
    display: block;
    width: 130px;
    height: 130px;
    background-image: url(${pageTitleShapes});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    z-index: -1;
    position: absolute;
    left: -50px;
    top: -60px;
  }
`

type Props = {
  className?: string,
  children?: React.Node,
}

const PageHeading = ({ className, children }: Props) => (
  <Text className={className}>{children}</Text>
)

export default PageHeading
