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

  @media (max-width: 500px) {
    flex-direction: column;
    align-items: flex-start;
  }
`
const TypeFilterStyled = styled(TypeFilter)`
  margin: 0 0 0 8%;

  @media (max-width: 500px) {
    margin: 14% 0 0;
  }
`

type Props = {
  data: any,
}

type State = {
  projects: ProjectListItem[],
}

export default class Projects extends React.Component<Props, State> {
  footerProjects: FooterProject[]
  types: string[]

  constructor(props: Props) {
    super(props)
    this.state = {
      projects: this.props.data.allCockpitProjects.nodes.map(node =>
        ProjectListItemParser.parse(node)
      ),
    }
    this.footerProjects = this.props.data.allCockpitProjects.nodes
      .slice(0, 3)
      .map(node => FooterProjectParser.parse(node))
    this.types = this.getTypes(this.state.projects)
  }

  getTypes(projects: ProjectListItem[]): string[] {
    const types: string[] = projects.map(p => p.type)
    return [...new Set(types)] // distinct
  }

  onFilter(types: string[]) {
    let projects
    if (types.length === 0) {
      projects = this.state.projects.map(p => {
        p.visible = true
        return p
      })
    } else {
      projects = this.state.projects.map(p => {
        if (types.includes(p.type)) {
          p.visible = true
        } else {
          p.visible = false
        }
        return p
      })
    }
    this.setState({ projects })
  }

  render() {
    return (
      <Page>
        <SEO title="Projects" />
        <Wrapper>
          <Header />
          <TopContainer>
            <PageHeading>Projects</PageHeading>
            <TypeFilterStyled
              onFilter={this.onFilter.bind(this)}
              types={this.types}
            ></TypeFilterStyled>
          </TopContainer>
          <ProjectList projects={this.state.projects} />
          <Footer projects={this.footerProjects} />
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
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
        title {
          value
        }
        description {
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
