// @flow
import React from "react"
import { graphql } from "gatsby"
import Page from "../components/page"
import SEO from "../components/seo"
import ProjectQueryParser from "../query-parsers/project"
import type { ProjectPageData } from "../query-parsers/project"
import TightWrapper from "../components/tight-wrapper"

export default ({ data }: any) => {
  const pageData: ProjectPageData = ProjectQueryParser.parse(data)
  console.log(pageData)
  return (
    <Page>
      <SEO title="Project" />
      {/* <ProjectArticle project={pageData} /> */}
    </Page>
  )
}

export const query = graphql`
  query ProjectTemplateQuery($cockpitId: String!) {
    cockpitProjects(
      cockpitId: { eq: $cockpitId }
      published: { value: { eq: true } }
    ) {
      date {
        value(formatString: "MMM YYYY")
      }
      brand {
        value
      }
      description {
        value
      }
      featured_image {
        value {
          childImageSharp {
            fluid(maxWidth: 1500) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
      links {
        value {
          value
        }
      }
      title {
        value
      }
      type {
        value
      }
      result_images {
        value {
          childImageSharp {
            fluid(maxWidth: 1500) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
      result_text_block {
        value {
          text {
            value
          }
          title {
            value
          }
        }
      }
      tech_stack {
        value
      }
    }
  }
`
