// @flow
import React from "react"
import styled from "@emotion/styled"
import SEO from "../components/seo"
import Page from "../components/page"
import ButtonLink from "../components/button-link"
import styleVars from "../styles/vars"

const Container = styled.span`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
const StatusCode = styled.span`
  line-height: 200px;
  font-weight: 700;
  font-size: 200px;
  color: ${styleVars.colors.grey[200]};
`
const Message = styled.span`
  font-weight: 700;
  font-size: 15px;
  color: ${styleVars.colors.black};
  margin: 40px 0;
`

const NotFoundPage = () => (
  <Page>
    <SEO title="404: Not found" />
    <Container>
      <StatusCode>404</StatusCode>
      <Message>We tried but we couldn’t find that page, sorry.</Message>
      <ButtonLink text={"Get me outta here"} to={"/"} />
    </Container>
  </Page>
)

export default NotFoundPage
