// @flow
import * as React from "react"
import Button from "./button"
import CopyIcon from "../images/icons/copy.svg"
import CopySuccessIcon from "../images/icons/copy-success.svg"

type Props = {
  className?: string,
  text: string,
  clipboardText: string,
}

type State = {
  copied: boolean,
}

class ButtonClipboard extends React.Component<Props, State> {
  state = {
    copied: false,
  }

  copyToClipboard() {
    if (typeof window === "undefined") return
    navigator.clipboard.writeText(this.props.clipboardText)
    this.setState({ copied: true })
  }

  render() {
    return (
      <Button
        className={this.props.className}
        text={this.props.text}
        icon={this.state.copied ? CopySuccessIcon : CopyIcon}
        iconAlt={"Copy to clipboard icon"}
        onClick={this.copyToClipboard.bind(this)}
      ></Button>
    )
  }
}
export default ButtonClipboard
