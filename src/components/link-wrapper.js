// @flow
import * as React from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"

const BlockLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: block;
  width: 100%;
`

type Props = {
  to: string,
  className?: string,
  children?: React.Node,
}

const LinkWrapper = (props: Props) => {
  const { children, ...otherProps } = props
  return <BlockLink {...otherProps}>{children}</BlockLink>
}

export default LinkWrapper
