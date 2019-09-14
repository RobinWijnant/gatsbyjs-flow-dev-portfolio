// @flow
import * as React from "react"
import styled from "@emotion/styled"
import ClickableProjectType from "./clickable-project-type"
import filterIcon from "../images/icons/filter.svg"

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
`
const List = styled.ul`
  display: inline-flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin: 0 -10px 0 0;
  padding: 0;
`
const FilterIcon = styled.img`
  width: 20px;
  margin: 8px 10px 0 0;
`
const ListItem = styled.li`
  list-style-type: none;
  display: block;
  margin: 0 5px 10px;
`

type Props = {
  className?: string,
  onFilter: (selectedTypes: string[]) => void,
}

type State = {
  selectedTypes: string[],
}

class TypeFilter extends React.Component<Props, State> {
  state = {
    selectedTypes: [],
  }

  types: Array<string> = [
    "Design",
    "Website",
    "ML/AI",
    "CI/CD",
    "Web app",
    "Blockchain",
  ]

  toggleFilter(type: string) {
    let newSelectedTypes
    if (this.state.selectedTypes.includes(type)) {
      newSelectedTypes = this.state.selectedTypes.filter(item => item !== type)
    } else {
      newSelectedTypes = [...this.state.selectedTypes, type]
    }
    this.setState({ selectedTypes: newSelectedTypes })
    this.props.onFilter(newSelectedTypes)
  }

  render() {
    return (
      <Container className={this.props.className}>
        <FilterIcon src={filterIcon} alt={"Filter icon"} />
        <List>
          {this.types.map((type: string, index: number) => {
            return (
              <ListItem key={index}>
                <ClickableProjectType
                  onClick={this.toggleFilter.bind(this, type)}
                  active={this.state.selectedTypes.includes(type)}
                  size={1.2}
                >
                  {type}
                </ClickableProjectType>
              </ListItem>
            )
          })}
        </List>
      </Container>
    )
  }
}

export default TypeFilter
