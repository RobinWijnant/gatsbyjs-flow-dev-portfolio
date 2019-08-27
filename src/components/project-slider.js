import React from "react"
import PropTypes from 'prop-types';
import styled from "@emotion/styled"
import Wrapper from "./wrapper"
import ShevronRightImage from "../images/chevron-right.svg"
import GreyPolygonImage from "../images/shapes/polygon-grey.svg"
import YellowPolygonImage from "../images/shapes/polygon-yellow.svg"
import BluePolygonImage from "../images/shapes/polygon-blue.svg"
import DottedCurveImage from "../images/shapes/curve-dotted.svg"

const WrapperStyled = styled(Wrapper)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`
const GreyPolygon = styled.img`
  position: absolute;
  z-index: -1;
  width: 30%;
  left: -4%;
  bottom: -12%;
`
const YellowPolygon = styled.img`
  position: absolute;
  z-index: -1;
  width: 10%;
  left: 8%;
  top: 2%;
`
const BluePolygon = styled.img`
  position: absolute;
  z-index: -1;
  width: 45%;
  right: -4%;
  top: -2%;
`
const DottedCurve = styled.img`
  position: absolute;
  z-index: -1;
  width: 50%;
  top: 30%;
  right: -2%;
`
const Arrow = styled.button`
  padding: 0;
  border: none;
  outline: none;
  font: inherit;
  color: inherit;
  background: none;
  background-image: url(${ShevronRightImage});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  width: 30px;
  height: 60px;
  transform: ${props => (props.direction === "left" ? "rotate(180deg)" : 0)};
  opacity: ${props => (props.disabled ? 0.3 : 1)};
  cursor: ${props => (props.disabled ? "auto" : "pointer")};
`
const Projects = styled.div`
  flex-grow: 1;
  padding: 50px;
  overflow: hidden;
`
const ProjectDeck = styled.div`
  white-space: nowrap;
  width: 100%;
  transition: margin 0.8s ease-in-out;
`
const Project = styled.a`
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

  & + & + & + & {
    margin-left: 150px;
  }
`

class ProjectSlider extends React.Component {
  state = {
    slideIndex: 0,
    total: 2
  }

  constructor(props) {
    super(props)
    this.projectsDeckRef = React.createRef()
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
    if (!this.projectsDeckRef.current) {
      return 0
    }
    const margin =  -(this.projectsDeckRef.current.offsetWidth * this.state.slideIndex + this.state.slideIndex * 150)
    return margin + "px"
  }

  render() {
    return (
      <WrapperStyled className={this.props.className}>
        <GreyPolygon src={GreyPolygonImage} alt={"Grey polygon background shape"} />
        <YellowPolygon src={YellowPolygonImage} alt={"Yellow polygon background shape"} />
        <DottedCurve src={DottedCurveImage} alt={"Dotted curve background shape"} />
        <BluePolygon src={BluePolygonImage} alt={"Blue polygon background shape"} />
        <Arrow direction={"left"} disabled={this.state.slideIndex === 0} onClick={this.previous.bind(this)} />
        <Projects>
          <ProjectDeck ref={this.projectsDeckRef} style={{marginLeft: this.calculateMarginOffset()}}>
            <Project></Project>
            <Project></Project>
            <Project></Project>
            <Project></Project>
          </ProjectDeck>
        </Projects>
        <Arrow direction={"right"} disabled={this.state.slideIndex + 1 === this.state.total} onClick={this.next.bind(this)} />
      </WrapperStyled>
    )
  }

}

ProjectSlider.propTypes = {
  className: PropTypes.string,
  projects: PropTypes.object
};

export default ProjectSlider
