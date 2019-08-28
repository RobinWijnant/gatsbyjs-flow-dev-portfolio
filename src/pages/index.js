import React from "react"
import styled from "@emotion/styled"
import { graphql } from "gatsby"
import Page from "../components/page"
import SEO from "../components/seo"
import Banner from "../components/banner"
import SectionHeading from "../components/section-heading"
import ProjectSlider from "../components/project-slider"
import ShapeWrapper from "../components/shape-wrapper";

const ShapeWrapperStyled = styled(ShapeWrapper)`
  /* margin: 100px auto; */
`

export default ({ data }) => (
  <Page>
    <SEO title="Home" />
    <Banner image={data.file.childImageSharp.fluid} />
    <SectionHeading>Some of my latest work</SectionHeading>
    {/* <ShapeWrapperStyled>
      <ProjectSlider projects={data.projects} />
    </ShapeWrapperStyled> */}
  </Page>
)

export const query = graphql`
  query {
    file(relativePath: { eq: "home/sky-towers-edit.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
