// @flow
import * as React from "react"
import styled from "@emotion/styled"
import ButtonLink from "./button-link"
import ButtonClipboard from "./button-clipboard"
import linkedInIcon from "../images/icons/linked-in.png"
import twitterIcon from "../images/icons/twitter.png"

const Container = styled.div`
  margin: 80px 0;
  text-align: center;

  & > * + * {
    margin-left: 30px;
  }

  @media (max-width: 735px) {
    & > * + * {
      margin-left: 0;
    }

    & > * {
      display: table;
      margin: 40px auto;
    }
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
      iconAlt={"Linked in icon"}
    />
    <ButtonClipboard
      clipboardText={"robin@wijnant.me"}
      text={"robin@wijnant.me"}
    />
    <ButtonLink
      to={"https://twitter.com/robinwijnant"}
      text={"@robinwijnant"}
      icon={twitterIcon}
      iconAlt={"Twitter icon"}
    />
  </Container>
)

export default SocialLinks
