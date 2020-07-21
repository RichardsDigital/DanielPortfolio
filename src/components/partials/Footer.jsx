import React, { useState } from 'react';
import styled from 'styled-components';
import linkedinIcon from '../../images/icons/linkedin.png';
import githubIcon from '../../images/icons/github.png';
import stackOverflowIcon from '../../images/icons/stack-overflow.png';

const StyledFooter = styled.div`
    position: fixed;
    z-index: 1;
    right:0;
    height: 100%;
    width: 100px;
    display: grid;
    grid-template-rows: 40px 64% 1fr 40px;
`

const IconContainer = styled.div`
    grid-row: 3/4;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`

const LogoIcon = styled.img`
    opacity: 0.5;
    height: 22px;
    width: 22px;
    cursor: pointer;
    &:hover {
        opacity: 1;
    }
`

const Footer = () => {
    return (
        <StyledFooter>
            <IconContainer>
                <LogoIcon src={linkedinIcon}/>
                <LogoIcon src={githubIcon}/>
                <LogoIcon src={stackOverflowIcon}/>
            </IconContainer>
        </StyledFooter>
    )
}

export default Footer;