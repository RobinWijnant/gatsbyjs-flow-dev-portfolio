// @flow
import * as React from "react"
import styled from "@emotion/styled"
import styleVars from "../styles/vars"
import type { ProjectListItem } from "../query-parsers/project-list-item"
import Img from "gatsby-image"
import LinkWrapper from "./link-wrapper"

const Container = styled.ul`
  width: 100%;
`
const Project = styled.li``
const Title = styled.span``
const MetaInfo = styled.span``
const Image = styled(Img)``

type Props = {
  className?: string,
  projects: ProjectListItem[],
}

const ProjectList = ({ className, projects }: Props) => (
  <Container className={className}>
    {projects.map((project: ProjectListItem, index: number) => {
      return (
        <Project>
          <Title>
            <LinkWrapper to={project.url}>{project.title}</LinkWrapper>
          </Title>
          {/* <MetaInfo>
            <ProjectType>Design</ProjectType>
            <Date>{project.date}</Date>
          </MetaInfo> */}
          {/* <ShapedImage fluid={project.featuredImage.fluid} alt={} /> */}
        </Project>
      )
    })}
  </Container>
)

export default ProjectList
