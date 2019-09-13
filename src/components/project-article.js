// @flow
import * as React from "react"
import styled from "@emotion/styled"
import styleVars from "../styles/vars"
import TightWrapper from "./tight-wrapper"
import Wrapper from "./wrapper"
import Img from "gatsby-image"
import ShapedImage from "./shaped-image"
import type { DetailedProject } from "../query-parsers/detailed-project"

const Article = styled.article`
  margin-top: 40px;
  margin-bottom: 40px;
`
const UpperMeta = styled.span`
  text-transform: uppercase;
  letter-spacing: 1.3px;
  font-size: 13px;

  @media (max-width: 600px) {
    letter-spacing: 0.6px;
    font-size: 11px;
  }
`
const Brand = styled.span`
  &::before {
    content: "//";
    line-height: 0px;
    margin: 0px 15px;
  }
`
const Title = styled.h1`
  color: ${styleVars.colors.black};
  margin: 30px 0;

  @media (max-width: 600px) {
    font-size: 20px;
    margin-top: 20px;
  }
`
const ShapedImageStyled = styled(ShapedImage)`
  margin: 80px 0;
`
const ProjectInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 80px 0;

  @media (max-width: 500px) {
    flex-direction: column;
  }
`
const PropertyList = styled.dl`
  margin: 0;

  @media (max-width: 500px) {
    display: grid;
    grid-template-rows: auto auto;
    grid-auto-flow: column;
    grid-column-gap: 10%;
  }
`
const Dt = styled.dt`
  font-weight: 600;
  margin-bottom: 15px;

  &:nth-of-type(n + 2) {
    margin-top: 50px;
  }

  @media (max-width: 500px) {
    &:nth-of-type(n + 2) {
      margin-top: 0;
    }
  }
`
const Dd = styled.dd`
  margin: 0;
  line-height: 25px;
`
const DescriptionBlock = styled(PropertyList)`
  width: 70%;
  margin-left: 10%;

  @media (max-width: 500px) {
    width: 100%;
    margin: 50px 0 0;
  }
`
const ResultImage = styled(Img)`
  border-radius: 20px;
  margin: 50px auto;
  max-width: ${props => `calc(${props.maxWidth}px / 5 * 4)`};
`
const ResultTextBlock = styled(PropertyList)`
  margin: 80px 0;
`

type Props = {
  className?: string,
  project: DetailedProject,
}

const ProjectArticle = ({ className, project }: Props) => (
  <Article className={className}>
    <TightWrapper>
      <UpperMeta>
        Project<Brand>{project.brand}</Brand>
      </UpperMeta>
      <Title>{project.title}</Title>
    </TightWrapper>
    <Wrapper>
      <ShapedImageStyled
        fluid={project.featuredImage.fluid}
        alt={"Featured image of this project"}
      />
    </Wrapper>
    <TightWrapper>
      <ProjectInfo>
        <PropertyList>
          <Dt>Project</Dt>
          <Dd>
            {project.type}
            <br />
            {project.date}
          </Dd>
          <Dt>Tech Stack</Dt>
          <Dd>{project.techStack.join(", ")}</Dd>
        </PropertyList>
        <DescriptionBlock>
          <Dt>The challenge</Dt>
          <Dd>{project.description}</Dd>
        </DescriptionBlock>
      </ProjectInfo>
      {project.resultImages &&
        project.resultImages.map((image: any, index: number) => {
          return (
            <ResultImage
              key={index}
              fluid={image.fluid}
              maxWidth={image.fluid.presentationWidth}
              alt={"Extra result image of this project"}
            />
          )
        })}
      {project.resultText && (
        <ResultTextBlock>
          {project.resultTitle && <Dt>{project.resultTitle}</Dt>}
          <Dd>{project.resultText}</Dd>
        </ResultTextBlock>
      )}
    </TightWrapper>
  </Article>
)

export default ProjectArticle
