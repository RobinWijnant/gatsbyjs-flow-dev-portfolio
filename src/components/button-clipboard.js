// @flow
import * as React from "react"
import Button from "./button"
import CopyIcon from "../images/icons/copy.svg"
import CopySuccessIcon from "../images/icons/copy-success.svg"
import CopyErrorIcon from "../images/icons/copy-error.svg"

type Props = {
  className?: string,
  text: string,
  clipboardText: string,
}

type State = {
  status: boolean,
}

class ButtonClipboard extends React.Component<Props, State> {
  state = {
    status: "not-copied",
  }

  async copyToClipboard() {
    try {
      await navigator.permissions.query({
        name: "clipboard-write",
      })
      await navigator.clipboard.writeText(this.props.clipboardText)
      this.setState({ copied: "copied" })
    } catch (error) {
      this.setState({ copied: "error" })
    }
  }

  getCopyIcon(status: string) {
    if (status === "copied") return CopySuccessIcon
    if (status === "error") return CopyErrorIcon
    return CopyIcon
  }

  render() {
    return (
      <Button
        className={this.props.className}
        text={this.props.text}
        icon={this.getCopyIcon(this.state.copied)}
        iconAlt={"Copy to clipboard icon"}
        onClick={this.copyToClipboard.bind(this)}
      ></Button>
    )
  }
}
export default ButtonClipboard
