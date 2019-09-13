// @flow
import * as React from "react"
import styled from "@emotion/styled"
import styleVars from "../styles/vars"
import Color from "color"

const List = styled.ul`
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
`
const Type = styled.li`
  cursor: pointer;
  list-style-type: none;
  display: block;
  margin: 0 5px 10px;
  padding: 8px 15px;
  border-radius: 999px;
  border: 1.5px solid ${styleVars.colors.grey[300]};
  transition: border 0.4s, background 0.4s;

  &:hover {
    background-color: ${styleVars.colors.grey[100]};
  }

  &.active {
    background-color: ${Color(styleVars.colors.blue)
      .lighten(0.32)
      .hex()};
    border-color: ${styleVars.colors.blue};
  }
`

type Props = {
  className?: string,
  onFilter: (selecteditems: string[]) => void,
}

type State = {
  selectedItems: string[],
}

class TypeFilter extends React.Component<Props, State> {
  state = {
    selectedItems: [],
  }

  toggleFilter(type: string) {
    let newSelectedItems
    if (this.state.selectedItems.includes(type)) {
      newSelectedItems = this.state.selectedItems.filter(item => item !== type)
    } else {
      newSelectedItems = [...this.state.selectedItems, type]
    }
    this.setState({ selectedItems: newSelectedItems })
    this.props.onFilter(newSelectedItems)
  }

  render() {
    return (
      <List className={this.props.className}>
        <Type
          className={
            this.state.selectedItems.includes("Design") ? "active" : ""
          }
          onClick={this.toggleFilter.bind(this, "Design")}
        >
          Design
        </Type>
        <Type
          className={
            this.state.selectedItems.includes("Web app") ? "active" : ""
          }
          onClick={this.toggleFilter.bind(this, "Web app")}
        >
          Web app
        </Type>
        <Type
          className={
            this.state.selectedItems.includes("Blockchain") ? "active" : ""
          }
          onClick={this.toggleFilter.bind(this, "Blockchain")}
        >
          Blockchain
        </Type>
        <Type
          className={this.state.selectedItems.includes("CI/CD") ? "active" : ""}
          onClick={this.toggleFilter.bind(this, "CI/CD")}
        >
          CI/CD
        </Type>
        <Type
          className={this.state.selectedItems.includes("ML/AI") ? "active" : ""}
          onClick={this.toggleFilter.bind(this, "ML/AI")}
        >
          ML/AI
        </Type>
        <Type
          className={
            this.state.selectedItems.includes("Website") ? "active" : ""
          }
          onClick={this.toggleFilter.bind(this, "Website")}
        >
          Website
        </Type>
      </List>
    )
  }
}

export default TypeFilter
