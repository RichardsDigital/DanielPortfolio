import React, { useState } from 'react';
import styled from 'styled-components';
import downloadIcon from '../../images/icons/download.png';
import logoIcon from '../../images/icons/DanielPortfolio-logo.png';

const StyledNav = styled.div`
    position: fixed;
    z-index: 2;
    height: 80px;
    width: 100%;
    background-color: #212121;
    display: flex;
`
const PageLogoContainer = styled.div`
    position: relative;
    height: 100%;
    display: flex;
    align-items: center;
    margin-left: 40px;
`

const LogoIcon = styled.img`
    height: 30px;
    width: 30px;
`

const PageTitlesContainer = styled.div`
    position: absolute;
    right:0;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-right: 40px;
`

const PageTitle = styled.a`
    margin: 0 0 0 60px;
    color: white;
    font-family: 'Roboto', sans-serif;
    font-weight: 200;
    font-size: 15px;
    opacity: 0.5;
    cursor: pointer;
    &:hover {
        opacity: 1;
    }
`

const ResumeButton = styled.div`
    margin: 0 0 0 60px;
    display: flex;
    align-items: flex-end;
    opacity: 0.5;
    cursor: pointer;
    &:hover {
        opacity: 1;
    }
`

const ResumeText = styled.p`
    color: white;
    font-family: 'Roboto', sans-serif;
    font-weight: 200;
    font-size: 15px;
`

const DownloadIcon = styled.img`
    height: 22px;
    width: 22px;
    margin-right: 15px;
`

const Nav = () => {
    return (
        <StyledNav>
            <PageLogoContainer>
                <LogoIcon src={logoIcon}/>
            </PageLogoContainer>

            <PageTitlesContainer>
                <PageTitle>About</PageTitle>
                <PageTitle>Work</PageTitle>
                <PageTitle>Contact</PageTitle>
                <ResumeButton>
                    <DownloadIcon src={downloadIcon}/>
                    <ResumeText>Resume</ResumeText>
                </ResumeButton>
            </PageTitlesContainer>
        </StyledNav>
    )
}

export default Nav;