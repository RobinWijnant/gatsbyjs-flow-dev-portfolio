import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import Banner from "../components/banner"

export default ({ data }) => (
  <>
    <Banner
      image={data.file.childImageSharp.fluid}
    />
    <SEO title="Home" />
  </>
)

export const query = graphql`
  query {
    file(relativePath: { eq: "home/sky-towers.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`