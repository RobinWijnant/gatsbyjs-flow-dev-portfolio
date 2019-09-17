// @flow
import * as React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import styleVars from "../styles/vars"
import type { FooterProject } from "../query-parsers/footer-project"

const Container = styled.div`
  display: flex;
  margin: ${styleVars.spacing.sectionMargin} 0
    calc(${styleVars.spacing.sectionMargin} / 5 * 3);
`
const ContentBlock = styled.div`
  &.recent-projects {
    flex-grow: 1;
  }

  & + & {
    margin-left: 8%;
  }

  @media (max-width: 500px) {
    &:first-of-type {
      flex-grow: 1;
    }

    &.recent-projects {
      display: none;
    }
  }
`
const Title = styled.span`
  font-weight: 500;
  margin-bottom: 20px;
  display: block;
`
const Listing = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`
const Item = styled.li`
  font-size: 13px;
  display: flex;

  & + & {
    margin-top: 15px;
  }
`
const ItemLink = styled(Link)`
  color: inherit;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`
const Color = styled.div`
  background-color: ${props => props.hex};
  border-radius: 50%;
  width: 14px;
  height: 14px;
  margin-right: 10px;
`
const Font = styled.span`
  &::before {
    content: "Aa";
    font-weight: 600;
    margin-right: 10px;
  }
`

type Props = {
  className?: string,
  projects: FooterProject[],
}

const Footer = ({ className, projects }: Props) => (
  <Container className={className}>
    <ContentBlock>
      <Title>Dev portfolio</Title>
      <Listing>
        <Item>
          <ItemLink to={"/"}>Home</ItemLink>
        </Item>
        <Item>
          <ItemLink to={"/projects"}>Projects</ItemLink>
        </Item>
        <Item>&copy; {new Date().getFullYear()} RW</Item>
      </Listing>
    </ContentBlock>
    <ContentBlock className={"recent-projects"}>
      <Title>Recent projects</Title>
      <Listing>
        {projects.map((project: FooterProject, index: number) => (
          <Item key={index}>
            <ItemLink to={project.url}>{project.brand}</ItemLink>
          </Item>
        ))}
      </Listing>
    </ContentBlock>
    <ContentBlock>
      <Title>Styles</Title>
      <Listing>
        <Item>
          <Color hex={styleVars.colors.yellow} />
          {styleVars.colors.yellow.toLowerCase()}
        </Item>
        <Item>
          <Color hex={styleVars.colors.blue} />
          {styleVars.colors.blue.toLowerCase()}
        </Item>
        <Item>
          <Font>Montserrat</Font>
        </Item>
      </Listing>
    </ContentBlock>
  </Container>
)

export default Footer
