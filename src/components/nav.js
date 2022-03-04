import * as React from 'react';
import {Component} from 'react';
import styled from 'styled-components';
import { navLinks } from '../config';


const Styled = styled.div`
    background-color: var(--navy);
    margin: 0em 0em 3em 0em;
    box-shadow: 0em 0.5em 1em var(--dark-navy);
    color: var(--white);
    /* overflow: hidden; */
    position: relative;
    ol{
        margin: 0em;
        display: flex;
        justify-content: space-between;

    }

    li{
        padding: 1em 0em;
    }
`;


class Nav extends Component {
    render() {
        return (
            <div>
                <Styled>
                    <ol>
                    {navLinks &&
                  navLinks.map(({ url, name }, i) => (
                    <li key={i}>
                      {name}
                    </li>
                  ))}
                    </ol>
                </Styled>
            </div>
        )
    }
}

export default Nav
