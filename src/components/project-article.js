// @flow
import * as React from "react"
import styled from "@emotion/styled"
import styleVars from "../styles/vars"
import TightWrapper from "./tight-wrapper"
import Wrapper from "./wrapper"
import Img from "gatsby-image"
import ShapedImage from "./shaped-image"
import type { DetailedProject } from "../query-parsers/detailed-project"
import ButtonLinkFactory from "./button-link-factory"

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
  display: grid;
  grid-auto-columns: auto 70%;
  grid-auto-rows: auto 1fr;
  grid-column-gap: 10%;
  grid-row-gap: 50px;
  grid-template-areas:
    "project description"
    "techstack description";
  margin: 80px 0;

  @media (max-width: 500px) {
    grid-auto-columns: auto auto;
    grid-template-areas:
      "project techstack"
      "description description";
  }
`
const PropertyList = styled.dl`
  margin: 0;
`
const ProjectBlock = styled(PropertyList)`
  grid-area: project;
`
const TechStackBlock = styled(PropertyList)`
  grid-area: techstack;
`
const DescriptionBlock = styled(PropertyList)`
  grid-area: description;
`
const Dt = styled.dt`
  font-weight: 600;
`
const Dd = styled.dd`
  margin: 0;
  margin-top: 15px;
  line-height: 25px;
`
const ButtonsContainer = styled(Dd)`
  margin: 10px 0 0 -15px;
`
const ButtonLinkFactoryStyled = styled(ButtonLinkFactory)`
  margin: 25px 0 0 15px;
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
        <ProjectBlock>
          <Dt>Project</Dt>
          <Dd>
            {project.type}
            <br />
            {project.date}
          </Dd>
        </ProjectBlock>
        <TechStackBlock>
          <Dt>Tech Stack</Dt>
          <Dd>{project.techStack.join(", ")}</Dd>
        </TechStackBlock>
        <DescriptionBlock>
          <Dt>The challenge</Dt>
          <Dd>{project.description}</Dd>
          <ButtonsContainer>
            {project.links &&
              project.links.map((link: string, index: number) => {
                return <ButtonLinkFactoryStyled to={link} key={index} />
              })}
          </ButtonsContainer>
        </DescriptionBlock>
      </ProjectInfo>
      {project.resultImages && project.resultImages[0] && (
        <ResultImage
          fluid={project.resultImages[0].fluid}
          maxWidth={project.resultImages[0].fluid.presentationWidth}
          alt={"Extra result image of this project"}
        />
      )}
      {project.resultText && (
        <ResultTextBlock>
          {project.resultTitle && <Dt>{project.resultTitle}</Dt>}
          <Dd>{project.resultText}</Dd>
        </ResultTextBlock>
      )}
      {project.resultImages &&
        project.resultImages.slice(1).map((image: any, index: number) => {
          return (
            <ResultImage
              key={index}
              fluid={image.fluid}
              maxWidth={image.fluid.presentationWidth}
              alt={"Extra result image of this project"}
            />
          )
        })}
    </TightWrapper>
  </Article>
)

export default ProjectArticle
