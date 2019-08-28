import React from "react"
import PropTypes from 'prop-types';
import styled from "@emotion/styled"
import ShevronRightImage from "../images/chevron-right.svg"
import { Link } from "gatsby";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const Arrow = styled.button`
  padding: 0;
  border: none;
  outline: none;
  font: inherit;
  color: inherit;
  background: none;
  background-image: url(${ShevronRightImage});
  background-position: right center;
  background-size: contain;
  background-repeat: no-repeat;
  flex-shrink: 0;
  display: block;
  width: 40px;
  height: 60px;
  transform: ${props => (props.direction === "left" ? "rotate(180deg)" : "none")};
  opacity: ${props => (props.disabled ? 0.3 : 1)};
  cursor: ${props => (props.disabled ? "auto" : "pointer")};

  @media (max-width: 500px) {
    width: 30px;
    height: 40px;
  }
`
const Projects = styled.div`
  flex-grow: 1;
  padding: 50px;
  overflow: hidden;

  @media (max-width: 500px) {
    padding: 30px;
  }
`
const ProjectDeck = styled.div`
  white-space: nowrap;
  width: 100%;
  transition: margin 0.8s ease-in-out;
`
const deckMargin = 150;
const Project = styled(Link)`
  text-decoration: none;
  color: inherit;
  background: #ffffff;
  border-radius: 30px;
  box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.1);
  padding-bottom: 22%;
  display: inline-block;
  width: 30%;
  cursor: pointer;
  transition: transform 0.5s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

  & + & {
    margin-left: 5%;
  }

  & + &:nth-of-type(3n+1) {
    margin-left: ${deckMargin}px;
  }

  @media (max-width: 1000px) {
    width: 46%;
    padding-bottom: 32%;

    & + &, & + &:nth-of-type(3n+1) {
      margin-left: 8%;
    }

    & + &:nth-of-type(2n+1) {
      margin-left: ${deckMargin}px;
    }
  }

  @media (max-width: 800px) {
    width: 100%;
    padding-bottom: 70%;

    & + &, & + &:nth-of-type(3n+1) {
      margin-left: ${deckMargin}px;
    }
  }

  @media (max-width: 500px) {
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.06);
  }
`

class ProjectSlider extends React.Component {
  state = {
    index: 0,
    total: 999,
    deckOffset: 0
  }

  constructor(props) {
    super(props)
    this.projectDeckRef = React.createRef()
  }
  
  componentDidMount() {
    this.setState({total: this.projectDeckRef.current.children.length})
    this.updateDeckOffset(this.state.index)
    window.addEventListener("resize", () => this.updateDeckOffset(this.state.index))
  }

  componentWillUnmount() {
    window.removeEventListener("resize", () => this.updateDeckOffset(this.state.index))
  }
  
  updateDeckOffset(index) {
    const deckIndex = Math.floor(index / this.getAmountOfVisibleProjects())
    let offset =  this.projectDeckRef.current.offsetWidth * deckIndex
    offset += deckMargin * deckIndex
    this.setState({deckOffset: offset})
  }

  previous() {
    const newIndex = this.state.index - this.getAmountOfVisibleProjects()
    if (newIndex < 0) {
      this.setState({index: 0})
    }
    this.setState({index: newIndex})
    this.updateDeckOffset(newIndex)
  }
  
  next() {
    const newIndex = this.state.index + this.getAmountOfVisibleProjects()
    if (newIndex >= this.state.total) {
      this.setState({index: this.state.total})
    }
    this.setState({index: newIndex})
    this.updateDeckOffset(newIndex)
  }

  getAmountOfVisibleProjects() {
    if (typeof window === "undefined") return 1 // Server side render
    if (window.innerWidth > 1000) return 3
    if (window.innerWidth > 800) return 2
    return 1
  }

  isPreviousDisabled() {
    return this.state.index - this.getAmountOfVisibleProjects() < 0
  }

  isNextDisabled() {
    return this.state.index + this.getAmountOfVisibleProjects() >= this.state.total
  }
  
  render() {
    return (
      <Container className={this.props.className}>
        <Arrow direction={"left"} disabled={this.isPreviousDisabled()} onClick={this.previous.bind(this)} />
        <Projects>
          <ProjectDeck ref={this.projectDeckRef} style={{marginLeft: -this.state.deckOffset + "px"}}>
            <Project to={"/projects/someLink"}></Project>
            <Project to={"/projects/someLink"}></Project>
            <Project to={"/projects/someLink"}></Project>
            <Project to={"/projects/someLink"}></Project>
            <Project to={"/projects/someLink"}></Project>
            <Project to={"/projects/someLink"}></Project>
            <Project to={"/projects/someLink"}></Project>
          </ProjectDeck>
        </Projects>
        <Arrow direction={"right"} disabled={this.isNextDisabled()} onClick={this.next.bind(this)} />
      </Container>
    )
  }

}

ProjectSlider.propTypes = {
  className: PropTypes.string,
  projects: PropTypes.object
};

export default ProjectSlider
