import * as React from 'react';
// import {Component} from 'react';
import styled from 'styled-components';
import { navLinks } from '../config';
import {bool} from 'prop-types';


const Styled = styled.div`
    background-color: var(--navy);
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin: 0em 0em 3em 0em;
    width: 100vw;
    height: 100%;
    color: var(--white);
    @media (max-width: 1200px){
        transform: ${({open}) => open? 'translateY(100)' : 'translateY(-120%)'};
        transition: var(--transition);
        box-shadow: 0em 0.5em 1em var(--dark-navy);
        flex-direction: column;
    }
    overflow: hidden;
    position: relative;

    ol{
        /* color: var(--green); */
        margin: 0em;
        display: flex;

        @media (max-width: 1200px){
            flex-direction: column;
            align-items: center;
        }
        @media (min-width: 1200px){
            list-style-type: none;
        }
        

    }
    li{
        color: var(--white);
        padding: 1em 0em;
        @media (min-width: 1200px){
            padding: 0em 2em;
        }
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
        @media (min-width: 1200px){
            margin-right: 2em;
        }
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
