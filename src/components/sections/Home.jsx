import React, { useState } from 'react';
import githubIcon from '../../images/icons/github.png';
import styled from 'styled-components';

const HomeSection = styled.section`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    background-color: #212121;
`

const ContentContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;  
    background-color: none;
    padding: 240px 0;
`

const HeaderText = styled.h1`
    color: white;
    font-family: 'Roboto', sans-serif;
    font-weight: 600;
    font-size: 45px;
    text-align: center;
    padding-bottom: 30px;
`
const SubHeaderText = styled.h3`
    color: white;
    font-family: 'Roboto', sans-serif;
    font-weight: 200;
    font-size: 30px;
    text-align: center;
    opacity: 0.7;
    padding-bottom: 40px;
`

const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-around;
    width: 74%;
    padding-bottom: 40px;
`

const PageButton = styled.button`
    color: white;
    font-size: 15px;
    width: 46%;
    padding: 6px 0;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    opacity: 0.7;
    &:hover {
        opacity: 1;
    }
`

const GithubContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    opacity: 0.5;
    &:hover {
        opacity: 1;
    }
`

const LogoIcon = styled.img`
    height: 40px;
    width: 40px;
`

const GithubUN = styled.p`
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    color: white;
    font-size: 12px;
    margin-left: 12px;
`

const Home = () => {
    return (
        <HomeSection>
            <ContentContainer>
                <HeaderText>Web Designer and Full Stack Developer</HeaderText>
                <SubHeaderText>I simply make websites... in a complicated way.</SubHeaderText>
                <ButtonContainer>
                    <PageButton style={{backgroundColor: '#6F5CB7'}}>My Work</PageButton>
                    <PageButton style={{backgroundColor: 'transparent', 
                        border: '1px solid white'}}>Contact</PageButton>
                </ButtonContainer>
                <GithubContainer>
                    <LogoIcon src={githubIcon}/>
                    <GithubUN>RichardsDigital</GithubUN>
                </GithubContainer>
            </ContentContainer>
        </HomeSection>
    )
}

export default Home;