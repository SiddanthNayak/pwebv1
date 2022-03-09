import React, { Component } from 'react'
import styled from 'styled-components'

const StyledAboutSection = styled.section`
    margin: 10em auto;
`;

const StyledText = styled.div`
    .Resume{
        color: var(--green)
    }

`;

const StyledPic = styled.div`
    display: flex;
    justify-content: center;
.img{
    margin-top: 5em;
    border-radius: var(--border-radius);
    @media (max-width: 1200px){
    width: 200px;
    height: 200px;
}
    @media (min-width: 1200px){
        width: 300px;
        height: 300px;
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
                    After my graduation in August 2020, I worked briefly as a General Operative at Prashanth Enterprises, a B2B Wholesale Enterprise. After a period of 7months, I decided to pursue my intrests in Marketing.
                </p>
                <p>I then proceeded to work as a Marketing Intern from July 2021 - December 2021 at MuxEmail and then as a Marketing Associate for a period of 1 month.</p>
                <p> To know more about my skills and experience, here is my <a className="Resume" href='https://tinyurl.com/nayaksiddanth' rel ='noopener noreferrer' target='_blank'>Resumé</a></p>
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