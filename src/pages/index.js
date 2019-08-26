import React from "react"
import { graphql } from "gatsby"
import Page from "../components/page"
import SEO from "../components/seo"
import Banner from "../components/banner"
import SectionHeading from "../components/section-heading"
import ProjectPicker from "../components/project-picker"

export default ({ data }) => (
  <Page>
    <SEO title="Home" />
    <Banner image={data.file.childImageSharp.fluid} />
    <SectionHeading>My recent projects</SectionHeading>
    <ProjectPicker projects={data.projects} />
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
