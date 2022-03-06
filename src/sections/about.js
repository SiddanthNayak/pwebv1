import React, { Component } from 'react'
import styled from 'styled-components'

const StyledAboutSection = styled.section`
    margin: 10em auto;
`;

const StyledText = styled.div`

`;

const StyledPic = styled.div`
    display: flex;
    justify-content: center;
.img{
    @media (max-width: 600px){
    width: 150px;
    height: 150px
}
}
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
            <StyledPic>
                <img className="img" src={require('./profileHeadshot.jpg')} alt='Headshot'/>
            </StyledPic>
        </StyledAboutSection>
      
    )
  }
}

export default About