import React, { useState } from 'react';
import styled from 'styled-components';
import openIcon from '../../images/icons/open.png';

const WorkSection = styled.section`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 720px;
    background-color: #212121;
`

const ContentContainer = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;  
    background-color: none;
    padding: 0 100px;
`

const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
`

const HeaderLine = styled.div`
    height: 1px;
    width: 150px;
    background-color: white;
`

const HeaderText = styled.h1`
    color: white;
    font-family: 'Roboto', sans-serif;
    font-weight: 600;
    font-size: 35px;
    text-align: center;
    margin: 0 20px;
`

const ProjectsContainer = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
    margin: 50px 0;
`

const ProjectBox = styled.div`
    height: 184px;
    width: 184px;
    display: grid;
    grid-template-rows: 20% 1fr 20%;
    padding: 16px;
    margin: 0 10px;
`
const ProjectBoxTitle = styled.h2`
    color: white;
    font-family: 'Roboto', sans-serif;
    font-weight: 600;
    font-size: 15px;
    text-align: center;
    grid-row: 1/2;
`
const ProjectBoxBigLetter = styled.h1`
    color: white;
    font-family: 'Roboto', sans-serif;
    font-weight: 600;
    font-size: 80px;
    text-align: center;
    justify-self: center;
    align-self: center;
    grid-row: 2/3;
    opacity: 0.7;
`
const OpenIcon = styled.img`
    grid-row: 3/4;
    align-self: center;
    justify-self: end;
    height: 22px;
    width: 22px;
    cursor: pointer;
`

const Work = () => {
    return (
        <WorkSection>
            <ContentContainer>
                <HeaderContainer>
                    <HeaderLine />
                        <HeaderText>Projects</HeaderText>
                    <HeaderLine />
                </HeaderContainer> 
                <ProjectsContainer>
                    <ProjectBox style={{backgroundColor: '#6F5CB7'}}>
                        <ProjectBoxTitle>CovidCount</ProjectBoxTitle>
                        <ProjectBoxBigLetter>C</ProjectBoxBigLetter>
                        <OpenIcon src={openIcon}/>
                    </ProjectBox>
                    <ProjectBox style={{backgroundColor: '#405CA0'}}>
                        <ProjectBoxTitle>RichardsDigital</ProjectBoxTitle>
                        <ProjectBoxBigLetter>R</ProjectBoxBigLetter>
                        <OpenIcon src={openIcon}/>
                    </ProjectBox>
                    <ProjectBox style={{backgroundColor: '#3F909E'}}>
                        <ProjectBoxTitle>Studio26</ProjectBoxTitle>
                        <ProjectBoxBigLetter>S</ProjectBoxBigLetter>
                        <OpenIcon src={openIcon}/>
                    </ProjectBox>
                    <ProjectBox style={{backgroundColor: '#3E9B64'}}>
                        <ProjectBoxTitle>Bytehunt</ProjectBoxTitle>
                        <ProjectBoxBigLetter>B</ProjectBoxBigLetter>
                        <OpenIcon src={openIcon}/>
                    </ProjectBox>
                </ProjectsContainer>
            </ContentContainer>
        </WorkSection>
    );
}

export default Work;