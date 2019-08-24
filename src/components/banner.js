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
`
const BadgeShape = styled.div`
  width: 80%;
  max-width: ${styleVars.maxWidth};
  min-height: 45.694%;
  margin: 0 auto;
  background-image: url(${badgeShapeFile});
  background-size: 100% auto;
  background-position: center bottom;
  padding: 60px 8% 20px;
  box-sizing: border-box;
`
const Slogan = styled.h2`
  margin: 12% 0;
  font-size: 26px;
  font-weight: 700;
  line-height: 40px;
  letter-spacing: 0.04em;
`
const ScrollSuggestionStyled = styled(ScrollSuggestion)`
  margin: 0 0 20px 4%;
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

// Banner.defaultProps = {
//   image: "",
// }

// SEO.propTypes = {
//   image: PropTypes.string,
// }

export default Banner
