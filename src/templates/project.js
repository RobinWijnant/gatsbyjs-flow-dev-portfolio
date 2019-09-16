// @flow
import React from "react"
import { graphql } from "gatsby"
import Page from "../components/page"
import SEO from "../components/seo"
import DetailedProjectParser from "../query-parsers/detailed-project"
import type { DetailedProject } from "../query-parsers/detailed-project"
import FooterProjectParser from "../query-parsers/footer-project"
import type { FooterProject } from "../query-parsers/footer-project"
import Wrapper from "../components/wrapper"
import Header from "../components/header"
import Footer from "../components/footer"
import ProjectArticle from "../components/project-article"

type ProjectPageData = {
  detailedProject: DetailedProject,
  footerProjects: FooterProject[],
}

export default ({ data }: any) => {
  const pageData: ProjectPageData = {
    detailedProject: DetailedProjectParser.parse(data.cockpitProjects),
    footerProjects: data.allCockpitProjects.nodes.map(node =>
      FooterProjectParser.parse(node)
    ),
  }
  return (
    <Page>
      <SEO title="Project" />
      <Wrapper>
        <Header />
      </Wrapper>
      <ProjectArticle project={pageData.detailedProject} />
      <Wrapper>
        <Footer projects={pageData.footerProjects} />
      </Wrapper>
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
            fluid(maxWidth: 1500, quality: 90) {
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
            fluid(maxWidth: 1500, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
              presentationWidth
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
    allCockpitProjects(limit: 3) {
      nodes {
        cockpitId
        brand {
          value
        }
        title {
          value
        }
      }
    }
  }
`
