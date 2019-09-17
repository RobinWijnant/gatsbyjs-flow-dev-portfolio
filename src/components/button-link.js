// @flow
import * as React from "react"
import { Link } from "gatsby"
import Button from "./button"
import css from "@emotion/css"

const LinkStyles = css`
  color: inherit;
  text-decoration: none;
  display: inline-block;
`

type Props = {
  className?: string,
  to: string,
  text: string,
  icon?: any,
  iconAlt?: string,
}

const ButtonLink = ({ className, to, text, icon, iconAlt }: Props) => {
  if (to.startsWith("http")) {
    return (
      <a href={to} target="_blanc" className={className} css={LinkStyles}>
        <Button text={text} icon={icon} iconAlt={iconAlt} />
      </a>
    )
  } else {
    return (
      <Link to={to} target="_blanc" className={className} css={LinkStyles}>
        <Button text={text} icon={icon} iconAlt={iconAlt} />
      </Link>
    )
  }
}

export default ButtonLink
