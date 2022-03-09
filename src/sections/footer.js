import React, { Component } from 'react'
import IconGitHub from '../components/icons/github'
import IconLinkedin from '../components/icons/linkedin';
import IconTwitter from '../components/icons/twitter';
import IconInstagram from '../components/icons/instagram';
import styled from 'styled-components'

const StyledFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  a{
    color: var(--slate);
  }
  a:hover{
    color: var(--green);
  }
  svg{
    margin: 0em 1em 1em 0em;
    width: 25px;
    height: 25px;
  }
`;

class Footer extends Component {
  render() {
    return (
      <StyledFooter>
        <a href='https://github.com/SiddanthNayak' target='_blank' rel='noreferrer'><IconGitHub /></a>
        <a href='https://www.linkedin.com/in/siddanthnayak/' target='_blank' rel='noreferrer'><IconLinkedin /></a>
        <a href='https://twitter.com/siddanth_nayak' target='_blank' rel='noreferrer'><IconTwitter /></a>
        <a href='https://www.instagram.com/nayak__sid/?hl=en' target='_blank' rel='noreferrer'><IconInstagram /></a>
      </StyledFooter>
    )
  }
}

export default Footer