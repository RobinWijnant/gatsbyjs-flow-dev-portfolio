// @flow
import * as React from "react"
import styled from "@emotion/styled"
import BackgroundImage from "gatsby-background-image"
import featuredImageFrame from "../images/featured-image-frame.svg"

const FeaturedImage = styled(BackgroundImage)`
  width: 100%;
  padding-bottom: 60%;
  display: flex;
  position: relative;
`
const Frame = styled.img`
  width: 102%;
  height: 102%;
  display: block;
  position: absolute;
  top: -1%;
  left: -1%;
  right: 0;
  bottom: 0;
`

type Props = {
  className?: string,
  fluid: any,
  alt: string,
}

const ShapedImage = ({ className, fluid, alt }: Props) => (
  <FeaturedImage
    className={className}
    tag={"div"}
    fluid={fluid}
    alt={alt}
    fadeIn={"soft"}
  >
    <Frame src={featuredImageFrame} alt={"Image frame"} />
  </FeaturedImage>
)

export default ShapedImage
