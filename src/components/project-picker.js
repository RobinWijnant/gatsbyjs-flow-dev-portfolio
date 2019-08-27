import React from "react"
import styled from "@emotion/styled"
import Wrapper from "./wrapper"
import ShevronRightImage from "../images/chevron-right.svg"
import GreyPolygonImage from "../images/shapes/polygon-grey.svg"
import YellowPolygonImage from "../images/shapes/polygon-yellow.svg"
import BluePolygonImage from "../images/shapes/polygon-blue.svg"

const WrapperStyled = styled(Wrapper)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`
const GreyPolygon = styled.img`
  position: absolute;
  width: 30%;
  left: -4%;
  bottom: -40%;
  z-index: -1;
`
const YellowPolygon = styled.img`
  position: absolute;
  width: 10%;
  left: 8%;
  top: -22%;
  z-index: -1;
`
const BluePolygon = styled.img`
  position: absolute;
  width: 45%;
  right: -4%;
  top: -25%;
  z-index: -1;
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
  cursor: pointer;
  transform: ${props => (props.direction === "left" ? "rotate(180deg)" : 0)};
  opacity: ${props => (props.disabled ? 0.3 : 1)};
`
const Projects = styled.div`
  flex-grow: 1;
  margin: 0 5%;
`
const ProjectDeck = styled.div`
  width: 100%;
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
`

const ProjectPicker = ({ className }) => (
  <WrapperStyled className={className}>
    <GreyPolygon src={GreyPolygonImage} alt={"Polygon background shape"} />
    <YellowPolygon src={YellowPolygonImage} alt={"Polygon background shape"} />
    <BluePolygon src={BluePolygonImage} alt={"Polygon background shape"} />
    <Arrow direction={"left"} disabled />
    <Projects>
      <ProjectDeck>
        <Project></Project>
        <Project></Project>
        <Project></Project>
      </ProjectDeck>
    </Projects>
    <Arrow direction={"right"} />
  </WrapperStyled>
)

export default ProjectPicker
