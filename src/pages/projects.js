// @flow
import React from "react"
import { graphql } from "gatsby"
import Page from "../components/page"
import FooterProjectParser from "../query-parsers/footer-project"
import type { FooterProject } from "../query-parsers/footer-project"
import ProjectListItemParser from "../query-parsers/project-list-item"
import type { ProjectListItem } from "../query-parsers/project-list-item"
import SEO from "../components/seo"

type Props = {
  data: any,
}

type State = {
  typeFilters: string[],
}

type ProjectsPageData = {
  projects: ProjectListItem[],
  footerProjects: FooterProject[],
}

export default class Projects extends React.Component<Props, State> {
  state = {
    typeFilters: [],
  }

  render() {
    const pageData: ProjectsPageData = {
      projects: this.props.data.allCockpitProjects.nodes.map(node =>
        ProjectListItemParser.parse(node)
      ),
      footerProjects: this.props.data.allCockpitProjects.nodes
        .slice(0, 3)
        .map(node => FooterProjectParser.parse(node)),
    }
    console.log(pageData)
    return (
      <Page>
        <SEO title="Projects" />
      </Page>
    )
  }
}

export const query = graphql`
  {
    allCockpitProjects(
      filter: { published: { value: { eq: true } } }
      sort: { fields: date___value, order: DESC }
    ) {
      nodes {
        date {
          value(formatString: "MMM YYYY")
        }
        featured_image {
          value {
            childImageSharp {
              fluid(maxWidth: 2000) {
                src
              }
            }
          }
        }
        title {
          value
        }
        type {
          value
        }
        cockpitId
        brand {
          value
        }
      }
    }
  }
`
