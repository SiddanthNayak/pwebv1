import React, { Component } from 'react'
import styled from 'styled-components'

const StyledAboutSection = styled.section`
    max-width: 900px;
    margin: 0 auto;
`;

const StyledText = styled.div`

`;

class About extends Component {
  render() {
    return (
        <StyledAboutSection id="about" className='StyledSection'>
            <h2 className = "heading">About Me</h2>
            <StyledText>
                <p>
                    Hi, I am Siddanth Nayak, a CSE graduate from Sahyadri College of Engineering and Management.
                </p>
                <p>
                    Here is my Resumé if you would like to know more about my skills and Experience.
                </p>
                <p> Apart from my skills and Experience, I am an avid reader, gamer, and swimmer. I love swimming and consider myself to be a Thalassophile.</p>
            </StyledText>
        </StyledAboutSection>
      
    )
  }
}

export default About