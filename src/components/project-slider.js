// @flow
import * as React from "react"
import styled from "@emotion/styled"
import styleVars from "../styles/vars"
import ShevronRightImage from "../images/icons/chevron-right.svg"
import { Link } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import type { FeaturedProject } from "../query-parsers/featured-project"
import LinkWrapper from "./link-wrapper"
import ProjectType from "./project-type"

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const Arrow = styled.button`
  padding: 0;
  border: none;
  outline: none;
  font: inherit;
  color: inherit;
  background: none;
  background-image: url(${ShevronRightImage});
  background-position: right center;
  background-size: contain;
  background-repeat: no-repeat;
  flex-shrink: 0;
  display: block;
  width: 40px;
  height: 60px;
  transform: ${props =>
    props.direction === "left" ? "rotate(180deg)" : "none"};
  opacity: ${props => (props.disabled ? 0.3 : 1)};
  cursor: ${props => (props.disabled ? "auto" : "pointer")};

  @media (max-width: 500px) {
    width: 30px;
    height: 40px;
  }
`
const Projects = styled.div`
  flex-grow: 1;
  padding: 50px;
  overflow: hidden;

  @media (max-width: 500px) {
    padding: 30px;
  }
`
const ProjectDeck = styled.div`
  white-space: nowrap;
  width: 100%;
  transition: margin 0.8s ease-in-out;
`
const deckMargin = 150
const Project = styled(BackgroundImage)`
  text-decoration: none;
  color: inherit;
  box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.1);
  padding-bottom: 22%;
  display: inline-block;
  width: 30%;
  transition: transform 0.5s ease-out;
  border-radius: 30px;
  position: relative;

  &::before,
  &::after {
    border-radius: 30px;
  }

  &:hover {
    transform: scale(1.05);
  }

  & + & {
    margin-left: 5%;
  }

  & + &:nth-of-type(3n + 1) {
    margin-left: ${deckMargin}px;
  }

  @media (max-width: 1000px) {
    width: 46%;
    padding-bottom: 32%;

    & + &,
    & + &:nth-of-type(3n + 1) {
      margin-left: 8%;
    }

    & + &:nth-of-type(2n + 1) {
      margin-left: ${deckMargin}px;
    }
  }

  @media (max-width: 800px) {
    width: 100%;
    padding-bottom: 70%;
    transition-duration: 0.3s;

    & + &,
    & + &:nth-of-type(3n + 1) {
      margin-left: ${deckMargin}px;
    }
  }

  @media (max-width: 500px) {
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.06);
  }
`
const ProjectLink = styled(LinkWrapper)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(
    204.93deg,
    rgba(255, 255, 255, 0.2) 2%,
    white 70%
  );
  border-radius: 30px;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
`
const ProjectTypeStyled = styled(ProjectType)`
  margin: 0 0 6% 7%;
`

type Props = {
  className?: string,
  projects: FeaturedProject[],
}

type State = {
  index: number,
  total: number,
  deckOffset: number,
}

class ProjectSlider extends React.Component<Props, State> {
  state = {
    index: 0,
    total: 999,
    deckOffset: 0,
  }
  updateDeckOffsetBinded: () => {}
  projectDeckRef: { current: ProjectDeck }

  constructor(props: Props) {
    super(props)
    this.projectDeckRef = React.createRef<ProjectDeck>()
    this.updateDeckOffsetBinded = this.updateDeckOffset.bind(this)
  }

  componentDidMount() {
    this.setState({ total: this.projectDeckRef.current.children.length })
    this.updateDeckOffset(this.state.index)
    window.addEventListener("resize", this.updateDeckOffsetBinded)
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDeckOffsetBinded)
  }

  updateDeckOffset(index: number = this.state.index) {
    const deckIndex = Math.floor(index / this.getAmountOfVisibleProjects())
    let offset = this.projectDeckRef.current.offsetWidth * deckIndex
    offset += deckMargin * deckIndex
    this.setState({ deckOffset: offset })
  }

  previous() {
    const newIndex = this.state.index - this.getAmountOfVisibleProjects()
    if (newIndex < 0) {
      this.setState({ index: 0 })
    }
    this.setState({ index: newIndex })
    this.updateDeckOffset(newIndex)
  }

  next() {
    const newIndex = this.state.index + this.getAmountOfVisibleProjects()
    if (newIndex >= this.state.total) {
      this.setState({ index: this.state.total })
    }
    this.setState({ index: newIndex })
    this.updateDeckOffset(newIndex)
  }

  getAmountOfVisibleProjects(): number {
    if (typeof window === "undefined") return 1 // Server side render
    if (window.innerWidth > 1000) return 3
    if (window.innerWidth > 800) return 2
    return 1
  }

  isPreviousDisabled(): boolean {
    return this.state.index - this.getAmountOfVisibleProjects() < 0
  }

  isNextDisabled(): boolean {
    return (
      this.state.index + this.getAmountOfVisibleProjects() >= this.state.total
    )
  }

  render() {
    return (
      <Container className={this.props.className}>
        <Arrow
          aria-label={"previous"}
          direction={"left"}
          disabled={this.isPreviousDisabled()}
          onClick={this.previous.bind(this)}
        />
        <Projects>
          <ProjectDeck
            ref={this.projectDeckRef}
            style={{ marginLeft: -this.state.deckOffset + "px" }}
          >
            {this.props.projects.map(
              (project: FeaturedProject, index: number) => (
                <Project
                  key={index}
                  tag={"div"}
                  fluid={project.featuredImage.fluid}
                  fadeIn={"soft"}
                >
                  <ProjectLink
                    to={project.url}
                    aria-label={`Go to project: ${project.title}`}
                  >
                    <ProjectTypeStyled>{project.type}</ProjectTypeStyled>
                  </ProjectLink>
                </Project>
              )
            )}
          </ProjectDeck>
        </Projects>
        <Arrow
          aria-label={"next"}
          direction={"right"}
          disabled={this.isNextDisabled()}
          onClick={this.next.bind(this)}
        />
      </Container>
    )
  }
}

export default ProjectSlider
