import React from "react"
import styled from "@emotion/styled"
import styleVars from "../styles/vars"
import Header from "./header"
import Slogan from "./slogan"
import ScrollSuggestion from "./scroll-suggestion"
import BackgroundImage from "gatsby-background-image"
import croppingShapeFile from "../images/banner-crop.svg"
import badgeShapeFile from "../images/banner-badge.svg"

const CroppingShape = styled.div`
  width: 100%;
  padding-bottom: 8.307%;
  background-image: url(${croppingShapeFile});
  background-size: 112.5%;
  background-position: 35% center;

  @media (max-width: 1000px) {
    background-position-x: 100%;
  }
`
const BadgeShape = styled.div`
  width: calc(100% - 2 * ${styleVars.spacing.sideMargin});
  max-width: ${styleVars.spacing.maxWidth};
  min-height: 45.694%;
  margin: 0 auto;
  background-image: url(${badgeShapeFile});
  background-size: 100% auto;
  background-position: center bottom;
  padding: 60px ${styleVars.spacing.sideMargin} 20px;
  box-sizing: border-box;

  @media (max-width: 1000px) {
    width: 100%;
    background-size: 110%;
    padding-top: 40px;
    margin-bottom: 20px;
  }
`
const ScrollSuggestionStyled = styled(ScrollSuggestion)`
  margin: 0 0 20px 4%;
  transition: opacity 0.5s ease-in 1s;
  opacity: ${props => props.show ? 1 : 0};

  @media (max-width: 600px) {
    margin-left: 0;
  }
`

class Banner extends React.Component {
  state = {
    sloganLoaded: false
  }

  render() {
    return (
      <div className={this.props.className}>
        <BackgroundImage tag={"div"} fluid={this.props.image} fadeIn={"soft"}>
          <BadgeShape>
            <Header />
            <Slogan onLoaded={() => this.setState({sloganLoaded: true})} />
            <ScrollSuggestionStyled show={this.state.sloganLoaded} />
          </BadgeShape>
          <CroppingShape />
        </BackgroundImage>
      </div>
    )
  }
}

export default Banner
