// @flow
import React from "react"
import { graphql } from "gatsby"
import Page from "../components/page"
import FeaturedProjectParser from "../query-parsers/featured-project"
import type { FeaturedProject } from "../query-parsers/featured-project"
import FooterProjectParser from "../query-parsers/footer-project"
import type { FooterProject } from "../query-parsers/footer-project"
import SEO from "../components/seo"
import Banner from "../components/banner"
import SectionHeading from "../components/section-heading"
import ProjectSlider from "../components/project-slider"
import ShapeWrapper from "../components/shape-wrapper"
import MyStory from "../components/my-story"
import TightWrapper from "../components/tight-wrapper"
import SocialLinks from "../components/social-links"
import Wrapper from "../components/wrapper"
import Footer from "../components/footer"

type HomePageData = {
  bannerImage: any,
  recentProjects: FeaturedProject[],
  footerProjects: FooterProject[],
}

export default ({ data }: any) => {
  const pageData: HomePageData = {
    bannerImage: data.cockpitHome.banner_image.value.childImageSharp,
    recentProjects: data.allCockpitProjects.nodes.map(node =>
      FeaturedProjectParser.parse(node)
    ),
    footerProjects: data.allCockpitProjects.nodes
      .slice(0, 3)
      .map(node => FooterProjectParser.parse(node)),
  }

  return (
    <Page>
      <SEO title="Home" />
      <Banner image={pageData.bannerImage} />
      <TightWrapper>
        <SectionHeading>Some of my latest work</SectionHeading>
      </TightWrapper>
      <ShapeWrapper>
        <ProjectSlider projects={pageData.recentProjects} />
      </ShapeWrapper>
      <TightWrapper>
        <SectionHeading>This is my story</SectionHeading>
        <MyStory />
      </TightWrapper>
      <Wrapper>
        <SocialLinks />
        <Footer projects={pageData.footerProjects} />
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
