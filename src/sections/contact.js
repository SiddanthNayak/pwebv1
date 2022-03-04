import React, { Component } from 'react'
import styled from 'styled-components'

const StyledAboutSection = styled.section`
    max-width: 900px;
    margin: 0 auto;
`;



class About extends Component {
  render() {
    return (
        <StyledAboutSection id="about">
            <h2 className = "heading">Contact</h2>
        </StyledAboutSection>
      
    )
  }
}

export default About