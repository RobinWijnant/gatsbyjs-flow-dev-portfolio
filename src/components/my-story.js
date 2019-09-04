// @flow
import * as React from "react"
import styled from "@emotion/styled"
import styleVars from "../styles/vars"

const Container = styled.div`
  text-align: center;
  margin: 0;
`

const Text = styled.p`
  color: ${styleVars.colors.black};
  line-height: 180%;
`

const Quote = styled.blockquote`
  font-size: 20px;
  margin: 80px auto;
  position: relative;
  display: table;

  &::before {
    content: "“";
    font-weight: 700;
    font-size: 250px;
    color: rgba(0, 0, 0, 0.04);
    position: absolute;
    top: -80px;
    left: -60px;
  }
`

type Props = {
  className?: string,
}

const MyStory = ({ className }: Props) => (
  <Container className={className}>
    <Text>
      My story started when I was 16. I created a website, from start to finish,
      for a local association in my town, Oudenaarde (Belgium). I taught myself
      some basic PHP and built my own, super secure, Content Management System
      (CMS). This wonky house of cards was replaced later with a WordPress
      implementation which is still actively used today. My urge to design and
      develop impressive digital experiences was like vitamin D for my body.
      Soon other clients and websites followed which empowered me to level up my
      soft and hard skills.
    </Text>
    <Quote>Creativity is just connecting things.</Quote>
    <Text>
      Today, not much has changed. I still delay meals for amazing web designs
      and stunning photo’s. When new projects pop up, I like to pick just the
      right tool for the job. First, I warm up with documentation about that new
      tool or framework. This foundation allows me to instantly implement
      features the most recommended way. This is how I stay on top of the
      contiguous, digital changes. How do you stay on top?"
    </Text>
  </Container>
)

export default MyStory
