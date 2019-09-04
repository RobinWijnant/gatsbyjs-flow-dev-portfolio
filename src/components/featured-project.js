// @flow
import * as React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import styleVars from "../styles/vars"
import logo from "../images/logo.svg"

const Container = styled(Link)`
  text-decoration: none;
  color: inherit;
  background: #ffffff;
  border-radius: 30px;
  box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.1);
  display: inline-block;
  cursor: pointer;
  transition: transform 0.5s ease-out;
  height: 0;
  width: ${props => props.width * 100 + "%"};
  padding-bottom: ${props => props.width * 75 + "%"};
`

type Props = {
  className?: string,
  to: string,
  image: any,
  type: string,
  width: string,
}

const Project = ({ className, to, width, type, image }: Props) => (
  <Container className={className} width={width} to={to}></Container>
)

export default Project
