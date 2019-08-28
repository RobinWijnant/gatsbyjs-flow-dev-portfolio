import React from "react"
import styled from "@emotion/styled"
import Wrapper from "./wrapper"
import GreyPolygonImage from "../images/shapes/polygon-grey.svg"
import YellowPolygonImage from "../images/shapes/polygon-yellow.svg"
import BluePolygonImage from "../images/shapes/polygon-blue.svg"
import DottedCurveImage from "../images/shapes/curve-dotted.svg"

const Container = styled.div`
  width: 100%;
  padding: 50px 0 80px;
  overflow: hidden;
`
const WrapperStyled = styled(Wrapper)`
  position: relative;
`
const GreyPolygon = styled.img`
  position: absolute;
  z-index: -1;
  width: 400px;
  left: -4%;
  bottom: -10%;

  @media (max-width: 1000px) {
    left: -10%;
  }

  @media (max-width: 500px) {
    width: 330px;
    left: -180px;
    bottom: -90px;
  }
`
const YellowPolygon = styled.img`
  position: absolute;
  z-index: -1;
  width: 135px;
  left: 8%;
  top: 0;

  @media (max-width: 1000px) {
    left: 6%;
  }

  @media (max-width: 500px) {
    left: -2%;
    top: -10%;
  }
`
const BluePolygon = styled.img`
  position: absolute;
  z-index: -2;
  width: 600px;
  right: -2%;
  top: -4%;

  @media (max-width: 1000px) {
    right: -10%;
  }

  @media (max-width: 800px) {
    right: -330px;
    top: 0;
  }

  @media (max-width: 500px) {
    right: -450px;
    top: -20%;
  }
`
const DottedCurve = styled.img`
  position: absolute;
  z-index: -1;
  width: 675px;
  bottom: -16%;
  right: -10%;

  @media (max-width: 1000px) {
    right: -20%;
  }

  @media (max-width: 800px) {
    right: -400px;
  }

  @media (max-width: 500px) {
    right: -450px;
    bottom: -30%;
  }
`

const ShapeWrapper = ({className, children}) => (
  <Container className={className}>
    <WrapperStyled>
      <GreyPolygon src={GreyPolygonImage} alt={"Grey polygon background shape"} />
      <YellowPolygon src={YellowPolygonImage} alt={"Yellow polygon background shape"} />
      <DottedCurve src={DottedCurveImage} alt={"Dotted curve background shape"} />
      <BluePolygon src={BluePolygonImage} alt={"Blue polygon background shape"} />
      {children}
    </WrapperStyled>
  </Container>
)

export default ShapeWrapper
