import * as React from 'react';
// import {Component} from 'react';
import styled from 'styled-components';
import { navLinks } from '../config';
import {bool} from 'prop-types';


const Styled = styled.div`
    background-color: var(--navy);
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0em 0em 3em 0em;
    box-shadow: 0em 0.5em 1em var(--dark-navy);
    width: 100vw;
    height: 100%;
    color: var(--white);
    transform: ${({open}) => open? 'translateY(100)' : 'translateY(-120%)'};
    transition: var(--transition);
    overflow: hidden;
    position: relative;

    ol{
        color: var(--green);
        margin: 0em;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;

    }
    li{
        color: var(--white);
        padding: 1em 0em;
    }
    .resume{

        border: 0.5px solid var(--green);
        margin-bottom: 1em;
        color: var(--green);
        padding: 0.75em 1.25em;
        font-weight: 400;
        font-family: var(--font-mono);
        font-size: medium;
        background-color: var(--navy);
        border-radius: var(--border-radius);
        cursor: pointer;
    }
    .resume:hover{
        background-color: var(--green-tint);
        transition: var(--transition); 
    }
    /* a{
        transition: var(--transition);
    } */
`;


const Nav=({open}) => {
        return (
            <div>
                <Styled open={open}>
                    <ol>
                    {navLinks &&
                  navLinks.map(({ url, name }, i) => (
                    <li key={i}>
                      <a href={url}>{name}</a>
                    </li>
                  ))}
                    </ol>
                    <a className="resume" href="https://tinyurl.com/nayaksiddanth" rel ='noopener noreferrer' target='_blank'>
                        Resumé
                    </a>
                </Styled>
            </div>
        )
    }
Nav.propTypes ={
    open: bool.isRequired,
};
export default Nav
