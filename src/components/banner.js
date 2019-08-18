import React from "react"
import styled from "@emotion/styled"
import Header from "./header"
import BackgroundImage from "gatsby-background-image"

import shapeCropFile from "../images/banner-crop.svg"

const ShapeCrop = styled.div`
  width: 100%;
  padding-bottom: 8.307%;
  background-image: url(${shapeCropFile});
  background-size: 110%;
  background-position: center;
`

const Banner = ({image}) => (
  <div>
    <BackgroundImage
      tag={"div"}
      fluid={image}
      backgroundColor={"#CCCCCC"}
    >
      <Header />
      <ShapeCrop />
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