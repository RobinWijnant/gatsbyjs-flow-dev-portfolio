import React from "react"
import styled from "@emotion/styled"
import styleVars from "../styles/vars"
import Header from "./header"
import ScrollSuggestion from "./scroll-suggestion"
import BackgroundImage from "gatsby-background-image"

import croppingShapeFile from "../images/banner-crop.svg"
import badgeShapeFile from "../images/banner-badge.svg"

const CroppingShape = styled.div`
  width: 100%;
  padding-bottom: 8.307%;
  background-image: url(${croppingShapeFile});
  background-size: 112.5%;
  background-position: 25% center;

  @media (max-width: 1000px) {
    background-position-x: 100%;
  }
`
const BadgeShape = styled.div`
  width: calc(100% - 2 * ${styleVars.wrapperPadding});
  max-width: ${styleVars.maxWidth};
  min-height: 45.694%;
  margin: 0 auto;
  background-image: url(${badgeShapeFile});
  background-size: 100% auto;
  background-position: center bottom;
  padding: 60px 8% 20px;
  box-sizing: border-box;

  @media (max-width: 1000px) {
    width: 100%;
    background-size: 110%;
    padding-left: ${styleVars.wrapperPadding};
    padding-right: ${styleVars.wrapperPadding};
    margin-bottom: 20px;
  }
`
const Slogan = styled.h2`
  margin: 12% 0;
  font-size: 26px;
  font-weight: 700;
  line-height: 150%;
  letter-spacing: 0.04em;

  @media (max-width: 600px) {
    font-size: 20px;
    margin: 60px 0;
  }
`
const ScrollSuggestionStyled = styled(ScrollSuggestion)`
  margin: 0 0 20px 4%;

  @media (max-width: 600px) {
    margin-left: 0;
  }
`

const Banner = ({ className, image }) => (
  <div className={className}>
    <BackgroundImage tag={"div"} fluid={image} fadeIn={"soft"}>
      <BadgeShape>
        <Header />
        <Slogan>
          Hi, I am Robin Wijnant.
          <br />I create digital experiences.
        </Slogan>
        <ScrollSuggestionStyled />
      </BadgeShape>
      <CroppingShape />
    </BackgroundImage>
  </div>
)

export default Banner
