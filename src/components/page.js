import React from "react"
import styleVars from "../styles/vars"
import { Global, css } from "@emotion/core"

const styles = css`
  html {
    min-width: 320px;
  }

  html, body {
    font-family: Montserrat, sans-serif;
    font-weight: 400;
    font-size: 12px;
    color: ${styleVars.textColor};
  }
  h2 {
    color: ${styleVars.headerTextColor}
  }
`

const Page = ({children}) => (
  <>
    <Global styles={styles} />
    {children}
  </>
)

export default Page
