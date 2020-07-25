import React, { useState } from 'react';
import styled from 'styled-components';

const AboutSection = styled.section`
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

const HeaderContainer = styled.div`
    /* background-color: blue; */
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
    /* background-color: green; */
    color: white;
    font-family: 'Roboto', sans-serif;
    font-weight: 600;
    font-size: 35px;
    text-align: center;
    margin: 0 20px;
`

const DescriptionContainer = styled.div`
    margin: 50px 0;
    width: 60%;
`

const Paragraph = styled.p`
    color: white;
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    font-size: 15px;
    text-align: center;
`

const About = () => {
    return (
        <AboutSection>
            <ContentContainer>
                <HeaderContainer>
                    <HeaderLine />
                        <HeaderText>About Me</HeaderText>
                    <HeaderLine />
                </HeaderContainer> 
                <DescriptionContainer>
                    <Paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud 
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
                    dolore eu fugiat <span style={{color: '#6F5CB7'}}>nulla pariatur</span>.
                    <br></br><br></br>
                    Excepteur sint occaecat cupidatat <span style={{color: '#6F5CB7'}}>non proident </span>, 
                    sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </Paragraph>
                </DescriptionContainer>
            </ContentContainer>
        </AboutSection>
    )
}

export default About;