import React, { Component } from 'react'
import styled from 'styled-components'

const StyledProjectSection = styled.section`
    /* max-width: 900px; */
`;


const StyledText = styled.div`

    .skillsList{
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-column-gap: 30px;
        grid-row-gap: 10px;
        color: var(--light-slate);
        list-style-type: none;
        padding: 0px;
        margin: 20px 0px 20px 20px;
        font-size: small;
    }
    li{
        &:before{
            content:"▹";
            margin-right: 5px;
        }
    }
`;

const StyledCardComponent = styled.div`
    .cardComponent{
        transition: var(--transition);
    }
    .projectDesc{
        font-weight: 400;
        color: var(--slate);
    }
`;

class Projects extends Component {
   
  render() {
    const skills = ['JavaScript (ES6)', 'HTML5', 'CSS3', 'React.js','Styled Componenets'];
    return (
        <StyledProjectSection id="project" className='StyledSection'>
            <h2 className = "heading">My Projects</h2>
            <StyledText>
                <p> Over the past few months, I've really taken interest in FrontEnd Development. Here are some of the
                    technologies I've worked on. 
                </p>
                <ul className = "skillsList">
                    {skills && skills.map((skill,i) => <li key={i}>{skill}</li>)}
                </ul>
                <p>Here are some of the FrontEnd projects that I worked on :).</p>
            </StyledText>
            <StyledCardComponent>
                <div className = 'cardComponent'>
                    <h3 className = "projectTitle">
                        <a href="https://vigilant-bhabha-f67b04.netlify.app" rel ='noopener noreferrer'  target = '_blank'> Four Card Feature </a>
                    </h3>
                    <p className='projectSource'>
                        <a href="https://www.frontendmentor.io/challenges/four-card-feature-section-weK1eFYK" rel ='noopener noreferrer' target='_blank'>FrontEndMentor Challenge</a>
                    </p>
                    <p className="projectDesc">
                        FrontEnd Mentor Challenge featuring a static one-page responsive website containing four cardes developed using CSS Flexbox.
                    </p>
                </div>
                <div className ='cardComponent'>
                    <h3 className = "projectTitle">
                        <a href="https://vigorous-lumiere-fb16ca.netlify.app" rel ='noopener noreferrer'  target = '_blank'> NFT Card Component</a>
                    </h3>
                    <p className='projectSource'>
                        <a href="https://www.frontendmentor.io/challenges/nft-preview-card-component-SbdUL_w0U"  rel ='noopener noreferrer'  target = '_blank'>FrontEndMentor Challenge</a>
                    </p>
                    <p className="projectDesc">
                        FrontEnd Mentor Challenge featuring a static one-page responsive website containing a NFT preview component card built using CSS Flexbox.
                    </p>
                </div>
                <div className ='cardComponent'>
                    <h3 className = "projectTitle">
                        <a href="https://agitated-bassi-f13d3b.netlify.app" rel ='noopener noreferrer'  target = '_blank'>Stats Preview Component</a>
                    </h3>
                    <p className='projectSource'>
                        <a href="https://www.frontendmentor.io/challenges/stats-preview-card-component-8JqbgoU62"  rel ='noopener noreferrer'  target = '_blank'>FrontEndMentor Challenge</a>
                    </p>
                    <p className="projectDesc">
                        FrontEnd Mentor Challenge featuring a static one-page responsive website containing a stats preview card component built using CSS Flexbox.
                    </p>
                </div>
                <div className ='cardComponent'>
                    <h3 className = "projectTitle">
                        <a href="https://optimistic-galileo-8025a9.netlify.app" rel ='noopener noreferrer'  target = '_blank'>Tip Calculator App</a>
                    </h3>
                    <p className='projectSource'>
                        <a href="https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX"  rel ='noopener noreferrer'  target = '_blank'>FrontEndMentor Challenge</a>
                    </p>
                    <p className="projectDesc">
                        FrontEnd Mentor Challenge featuring a responsive website app to calculate tip and total bill amount based on bill, tip percentage and number of people as input.
                    </p>
                </div>
            </StyledCardComponent>
        </StyledProjectSection>
      
    )
  }
}

export default Projects