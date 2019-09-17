// @flow
import * as React from "react"
import ButtonLink from "./button-link"
import figmaIcon from "../images/icons/figma.svg"
import githubIcon from "../images/icons/github.png"
import webIcon from "../images/icons/web.png"

type IconProps = {
  label: string,
  icon: string,
  alt: string,
}

const getMatchingIconProps = (url: string): IconProps => {
  if (url.includes("figma.com")) {
    return {
      label: "View design",
      icon: figmaIcon,
      alt: "Figma icon",
    }
  }
  if (url.includes("github.com")) {
    return {
      label: "View code",
      icon: githubIcon,
      alt: "Github icon",
    }
  }
  return {
    label: "View website",
    icon: webIcon,
    alt: "Website icon",
  }
}

type Props = {
  className?: string,
  to: string,
}

const GeneratedButtonLink = ({ className, to }: Props) => {
  const iconProps = getMatchingIconProps(to)
  return (
    <ButtonLink
      className={className}
      to={to}
      icon={iconProps.icon}
      iconAlt={iconProps.alt}
      text={iconProps.label}
    ></ButtonLink>
  )
}

export default GeneratedButtonLink
