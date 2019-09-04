// @flow
import * as React from "react"
import styled from "@emotion/styled"
import ButtonLink from "./button-link"
import ButtonClipboard from "./button-clipboard"
import linkedInIcon from "../images/linked-in.png"
import twitterIcon from "../images/twitter.png"

const Container = styled.div`
  margin: 80px 0;
  text-align: center;

  & > * + * {
    margin-left: 30px;
  }
`

type Props = {
  className?: string,
}

const SocialLinks = ({ className }: Props) => (
  <Container className={className}>
    <ButtonLink
      to={"https://www.linkedin.com/in/robin-wijnant"}
      text={"Robin Wijnant"}
      icon={linkedInIcon}
      iconAlt={"Link to Linked in"}
    />
    <ButtonLink
      to={"https://twitter.com/robinwijnant"}
      text={"@robinwijnant"}
      icon={twitterIcon}
      iconAlt={"Link to Twitter"}
    />
    <ButtonClipboard
      clipboardText={"robin@wijnant.me"}
      text={"Email address"}
    />
  </Container>
)

export default SocialLinks
