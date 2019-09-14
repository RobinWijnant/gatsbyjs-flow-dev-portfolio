// @flow
import * as React from "react"
import styled from "@emotion/styled"
import styleVars from "../styles/vars"
import type { ProjectListItem } from "../query-parsers/project-list-item"
import LinkWrapper from "./link-wrapper"
import ProjectType from "./project-type"
import ShapedImage from "./shaped-image"
import TextTruncate from "react-text-truncate"

const Container = styled.ul`
  width: 100%;
  padding: 0;

  @media (max-width: 600px) {
    margin-top: 20%;
  }
`
const Project = styled.li`
  margin: 8% 0;
  display: grid;
  list-style-type: none;
  grid-template-columns: auto 50%;
  grid-template-rows: auto auto 1fr;
  grid-column-gap: 6%;
  grid-template-areas:
    "title image"
    "description image"
    "meta image";
  display: ${props => (props.visible ? "grid" : "none")};

  &:nth-of-type(even) {
    grid-template-areas:
      "image title"
      "image description"
      "image meta";
    grid-template-columns: 50% auto;
  }

  @media (max-width: 600px) {
    margin: 12% 0;
    &,
    &:nth-of-type(even) {
      grid-template-areas:
        "image"
        "title"
        "meta";
      grid-template-columns: auto;
      grid-template-rows: auto auto auto;
    }
  }
`
const Title = styled.span`
  grid-area: title;
  align-self: bottom;
  color: ${styleVars.colors.black};
  font-size: 24px;
  font-weight: 600;
  margin-top: 10%;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 800px) {
    font-size: 20px;
  }

  @media (max-width: 600px) {
    margin-top: 8%;
  }
`
const Description = styled.div`
  grid-area: description;
  margin: 5% 0;
  line-height: 24px;

  @media (max-width: 800px) {
    display: none;
  }
`
const MetaInfo = styled.span`
  grid-area: meta;
  margin: 0;

  @media (max-width: 800px) {
    margin: 5% 0;
  }
`
const Date = styled.span`
  margin-left: 20px;
`
const LinkImageWrapper = styled(LinkWrapper)`
  grid-area: image;
  align-self: center;
`

type Props = {
  className?: string,
  projects: ProjectListItem[],
}

const ProjectList = ({ className, projects }: Props) => (
  <Container className={className}>
    {projects.map((project: ProjectListItem, index: number) => {
      return (
        <Project key={index} visible={project.visible}>
          <Title>
            <LinkWrapper to={project.url}>{project.title}</LinkWrapper>
          </Title>
          <Description>
            <TextTruncate
              line={2}
              element="span"
              truncateText="…"
              text={project.description}
            />
          </Description>
          <MetaInfo>
            <ProjectType>{project.type}</ProjectType>
            <Date>{project.date}</Date>
          </MetaInfo>
          <LinkImageWrapper to={project.url}>
            <ShapedImage
              fluid={project.featuredImage.fluid}
              alt={"Featured image of the project"}
            />
          </LinkImageWrapper>
        </Project>
      )
    })}
  </Container>
)

export default ProjectList
