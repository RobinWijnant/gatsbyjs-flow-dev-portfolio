// @flow
import React from "react"
import { graphql } from "gatsby"
import Page from "../components/page"
import type { HomePageData } from "../query-parsers/home"
import SEO from "../components/seo"
import Banner from "../components/banner"
import SectionHeading from "../components/section-heading"
import ProjectSlider from "../components/project-slider"
import ShapeWrapper from "../components/shape-wrapper"
import MyStory from "../components/my-story"
import HomeQueryParser from "../query-parsers/home"
import TightWrapper from "../components/tight-wrapper"
import SocialLinks from "../components/social-links"
import Wrapper from "../components/wrapper"
import Footer from "../components/footer"

export default ({ data }: any) => {
  const pageData: HomePageData = HomeQueryParser.parse(data)

  return (
    <Page>
      <SEO title="Home" />
      <Banner image={pageData.bannerImage} />
      <TightWrapper>
        <SectionHeading>Some of my latest work</SectionHeading>
      </TightWrapper>
      <ShapeWrapper>
        <ProjectSlider projects={pageData.projects} />
      </ShapeWrapper>
      <TightWrapper>
        <SectionHeading>This is my story</SectionHeading>
        <MyStory />
      </TightWrapper>
      <Wrapper>
        <SocialLinks />
        <Footer projects={pageData.projects.slice(0, 3)} />
      </Wrapper>
    </Page>
  )
}

export const query = graphql`
  {
    cockpitHome {
      banner_image {
        value {
          childImageSharp {
            fluid(maxWidth: 2000) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
    allCockpitProjects(
      filter: { published: { value: { eq: true } } }
      sort: { fields: date___value, order: DESC }
      limit: 6
    ) {
      nodes {
        cockpitId
        featured_image {
          value {
            childImageSharp {
              fluid(maxWidth: 500) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
        brand {
          value
        }
        type {
          value
        }
        title {
          value
        }
      }
    }
  }
`
