import React from "react"
import styleVars from "../styles/vars"
import { Global, css } from "@emotion/core"

const styles = css`
  html {
    min-width: ${styleVars.spacing.minWidth};
    font-family: ${styleVars.text.family};
    font-weight: ${styleVars.text.weight};
    font-size: ${styleVars.text.size};
    color: ${styleVars.colors.grey[700]};
  }
  
  h2 {
    color: ${styleVars.colors.black};
    font-size: 26px;
  }

  h3 {
    font-size: 20px;
  }
`

const Page = ({children}) => (
  <>
    <Global styles={styles} />
    {children}
  </>
)

export default Page
