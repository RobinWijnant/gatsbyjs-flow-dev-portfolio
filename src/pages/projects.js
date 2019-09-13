// @flow
import React from "react"
import { graphql } from "gatsby"
import Page from "../components/page"
import Header from "../components/header"
import Footer from "../components/footer"
import FooterProjectParser from "../query-parsers/footer-project"
import type { FooterProject } from "../query-parsers/footer-project"
import ProjectListItemParser from "../query-parsers/project-list-item"
import type { ProjectListItem } from "../query-parsers/project-list-item"
import SEO from "../components/seo"
import Wrapper from "../components/wrapper"
import styled from "@emotion/styled"
import PageHeading from "../components/page-heading"
import TypeFilter from "../components/type-filter"
import ProjectList from "../components/project-list"

const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 30px 0 -20px;
`

type Props = {
  data: any,
}

type ProjectsPageData = {
  projects: ProjectListItem[],
  footerProjects: FooterProject[],
}

export default class Projects extends React.Component<Props> {
  onFilter(types: string[]) {}

  render() {
    const pageData: ProjectsPageData = {
      projects: this.props.data.allCockpitProjects.nodes.map(node =>
        ProjectListItemParser.parse(node)
      ),
      footerProjects: this.props.data.allCockpitProjects.nodes
        .slice(0, 3)
        .map(node => FooterProjectParser.parse(node)),
    }
    return (
      <Page>
        <SEO title="Projects" />
        <Wrapper>
          <Header />
          <TopContainer>
            <PageHeading>Projects</PageHeading>
            <TypeFilter onFilter={this.onFilter.bind(this)}></TypeFilter>
          </TopContainer>
          <ProjectList projects={pageData.projects} />
          <Footer projects={pageData.footerProjects} />
        </Wrapper>
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
