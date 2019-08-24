import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import Banner from "../components/banner"
import Page from "../components/page"

export default ({ data }) => (
  <Page>
    <SEO title="Home" />
    <Banner
      image={data.file.childImageSharp.fluid}
    />
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