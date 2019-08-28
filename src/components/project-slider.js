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
    slideIndex: 0,
    total: 7
  }

  constructor(props) {
    super(props)
    this.projectDeckRef = React.createRef()
  }

  componentDidMount() {
    this.projectDeckRef.current.addEventListener("onresize", this.calculateMarginOffset)
  }

  componentWillUnmount() {
    this.projectDeckRef.current.removeEventListener("onresize", this.calculateMarginOffset)
  }

  previous() {
    if (this.state.slideIndex - 1 < 0) return
    this.setState({slideIndex: this.state.slideIndex - 1})
  }

  next() {
    if (this.state.slideIndex + 1 === this.state.total) return
    this.setState({slideIndex: this.state.slideIndex + 1})
  }
  
  calculateMarginOffset() {
    console.log(this.projectDeckRef)
    if (!this.projectDeckRef.current) {
      return 0
    }
    let margin =  this.projectDeckRef.current.offsetWidth * this.state.slideIndex
    margin += this.state.slideIndex * deckMargin
    return -margin + "px"
  }

  render() {
    return (
      <Container className={this.props.className}>
        <Arrow direction={"left"} disabled={this.state.slideIndex === 0} onClick={this.previous.bind(this)} />
        <Projects>
          <ProjectDeck ref={this.projectDeckRef} style={{marginLeft: this.calculateMarginOffset()}}>
            <Project to={"/projects/someLink"}></Project>
            <Project to={"/projects/someLink"}></Project>
            <Project to={"/projects/someLink"}></Project>
            <Project to={"/projects/someLink"}></Project>
            <Project to={"/projects/someLink"}></Project>
            <Project to={"/projects/someLink"}></Project>
            <Project to={"/projects/someLink"}></Project>
          </ProjectDeck>
        </Projects>
        <Arrow direction={"right"} disabled={this.state.slideIndex + 1 === this.state.total} onClick={this.next.bind(this)} />
      </Container>
    )
  }

}

ProjectSlider.propTypes = {
  className: PropTypes.string,
  projects: PropTypes.object
};

export default ProjectSlider
