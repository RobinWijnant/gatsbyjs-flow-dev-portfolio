// @flow
import * as React from "react"
import Button from "./button"
import CopyIcon from "../images/clipboard.svg"

type Props = {
  className?: string,
  text: string,
  clipboardText: string,
}

const ButtonClipboard = ({ className, text, clipboardText }: Props) => (
  <Button
    className={className}
    text={text}
    icon={CopyIcon}
    iconAlt={"Copy to clipboard icon"}
    onClick={() => {
      navigator.clipboard.writeText(clipboardText)
    }}
  ></Button>
)

export default ButtonClipboard
