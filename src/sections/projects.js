import React, { Component } from 'react';
import styled from 'styled-components';
import IconExternal from '../components/icons/external';
import IconGitHub from '../components/icons/github';
import IconFolder from '../components/icons/folder';


const StyledProjectSection = styled.section`
     margin: 10em auto;
     svg{
         color: var(--green);
         margin-bottom: 1em;
         width: 40px;
         height: 40px;
     }
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

    
    @media (min-width: 1200px){
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-column-gap: 2em;
    }

    .linkGit{
        position: relative;
        left: 70%;
        bottom: 3%;
        svg{
            color: var(--slate);
            width: 25px;
            height: 25px;
        }
        svg:hover{
            color: var(--green);
        }
    }
    .linkExternal{
        position: relative;
        left: 73%;
        bottom: 3%;
        svg{
            color: var(--slate);
            width: 25px;
            height: 25px;
        }
        svg:hover{
            color: var(--green);
        }
    }
    h3{
        margin-bottom: 1em;
        font-size: var(--fz-xxl);
        color: var(--lightest-slate);
    }
    .cardComponent{
        transition: var(--transition);
        margin-bottom: 2em;
    }

    .cardComponent:hover{
        /* cursor: pointer; */
        box-shadow: 0 10px 30px -15px var(--navy-shadow);
        transform: translateY(-7px);
        cursor: pointer;
        h3{
          color: var(--green);
        }
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
                    <IconFolder className="folder"></IconFolder>
                    <a className="linkGit" href='https://github.com/SiddanthNayak/FourCardFeature' target='_blank' rel='noreferrer'><IconGitHub/></a>
                    <a className="linkExternal" href='https://vigilant-bhabha-f67b04.netlify.app' target='_blank' rel='noreferrer'><IconExternal/></a>
                    <h3 className = "projectTitle">
                         Four Card Feature
                    </h3>
                    <p className="projectDesc">
                        FrontEnd Mentor Challenge featuring a static one-page responsive website containing four cardes developed using CSS Flexbox.
                    </p>
                </div>
                <div className ='cardComponent'>
                    <IconFolder className="folder"></IconFolder>
                    <a className="linkGit" href='https://github.com/SiddanthNayak/NFT-Preview-Card' target='_blank' rel='noreferrer'><IconGitHub/></a>
                    <a className="linkExternal" href='https://vigorous-lumiere-fb16ca.netlify.app' target='_blank' rel='noreferrer'><IconExternal/></a>
                    <h3 className = "projectTitle">
                        NFT Card Component
                    </h3>
                    <p className="projectDesc">
                        FrontEnd Mentor Challenge featuring a static one-page responsive website containing a NFT preview component card built using CSS Flexbox.
                    </p>
                </div>
                <div className ='cardComponent'>
                    <IconFolder className="folder"></IconFolder>
                    <a className="linkGit" href='https://github.com/SiddanthNayak/Stats-Preview-Card' target='_blank' rel='noreferrer'><IconGitHub/></a>
                    <a className="linkExternal" href='https://agitated-bassi-f13d3b.netlify.app' target='_blank' rel='noreferrer'><IconExternal/></a>
                    <h3 className = "projectTitle">
                        Stats Preview Component
                    </h3>
                    <p className="projectDesc">
                        FrontEnd Mentor Challenge featuring a static one-page responsive website containing a stats preview card component built using CSS Flexbox.
                    </p>
                </div>
                <div className ='cardComponent'>
                    <IconFolder className="folder"></IconFolder>
                    <a className="linkGit" href='https://github.com/SiddanthNayak/Tip-Calculator' target='_blank' rel='noreferrer'><IconGitHub/></a>
                    <a className="linkExternal" href='https://optimistic-galileo-8025a9.netlify.app' target='_blank' rel='noreferrer'><IconExternal/></a>
                    <h3 className = "projectTitle">
                        Tip Calculator App
                    </h3>
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