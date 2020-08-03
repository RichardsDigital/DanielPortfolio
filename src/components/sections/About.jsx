import React, { useState } from 'react';
import styled from 'styled-components';
import purpleBullet from '../../images/icons/pBullet.png';
import blueBullet from '../../images/icons/bBullet.png';
import greenBullet from '../../images/icons/gBullet.png';

const AboutSection = styled.section`
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

const DescriptionContainer = styled.div`
    margin: 50px 0;
    width: 600px;
`

const Paragraph = styled.p`
    color: white;
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    font-size: 15px;
    text-align: center;
`

const SkillBoxContainer = styled.div`
    background-color: #1C1C1C;
    border-radius: 8px;
    width: 100%;
`

const InnerSkillBoxContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1px 1fr 1px 1fr;
`
const SkillBox = styled.div`
    display: flex;
    flex-direction: column;
    padding: 70px 0;
`
const SkillHeader = styled.div`
    font-family: 'Roboto', sans-serif;
    font-weight: 600;
    font-size: 20px;
    text-align: center;
    justify-content: center;
    margin-bottom: 30px;
`
const SkillBullet = styled.div`
    display: flex;
    align-items: center;
    margin:  0 30% 15px 32%;
`
const SkillBulletImage = styled.img`
    height: 12px;
    width: auto;
    margin-right: 12px;
`
const SkillBulletText = styled.p`
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    font-size: 13px;
    color: white;
`
const SplitLine = styled.div`
    width: 100%;
    height: 70%;
    background-color: white;
    align-self: center;
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
                <SkillBoxContainer>
                    <InnerSkillBoxContainer>
                        <SkillBox style={{gridColumn: '1/2'}}>
                            <SkillHeader style={{color: '#6F5CB7'}}>UI Design</SkillHeader>
                            <SkillBullet>
                                <SkillBulletImage src={purpleBullet}/>
                                <SkillBulletText>Adobe XD</SkillBulletText>
                            </SkillBullet>
                            <SkillBullet>
                                <SkillBulletImage src={purpleBullet}/>
                                <SkillBulletText>Adobe Illustrator</SkillBulletText>
                            </SkillBullet>
                            <SkillBullet>
                                <SkillBulletImage src={purpleBullet}/>
                                <SkillBulletText>Adobe Photoshop</SkillBulletText>
                            </SkillBullet>
                        </SkillBox>
                        <SplitLine style={{gridColumn: '2/3'}}/>
                        <SkillBox style={{gridColumn: '3/4'}}>
                            <SkillHeader style={{color: '#405CA0'}}>Client-side</SkillHeader>
                            <SkillBullet>
                                <SkillBulletImage src={blueBullet}/>
                                <SkillBulletText>HTML & CSS</SkillBulletText>
                            </SkillBullet>
                            <SkillBullet>
                                <SkillBulletImage src={blueBullet}/>
                                <SkillBulletText>Javascript (ES6)</SkillBulletText>
                            </SkillBullet>
                            <SkillBullet>
                                <SkillBulletImage src={blueBullet}/>
                                <SkillBulletText>React.js</SkillBulletText>
                            </SkillBullet>
                        </SkillBox>
                        <SplitLine style={{gridColumn: '4/5'}}/>
                        <SkillBox style={{gridColumn: '5/6'}}>
                            <SkillHeader style={{color: '#3F909E'}}>Server-side</SkillHeader>
                            <SkillBullet>
                                <SkillBulletImage src={greenBullet}/>
                                <SkillBulletText>Node.js</SkillBulletText>
                            </SkillBullet>
                            <SkillBullet>
                                <SkillBulletImage src={greenBullet}/>
                                <SkillBulletText>Express.js</SkillBulletText>
                            </SkillBullet>
                            <SkillBullet>
                                <SkillBulletImage src={greenBullet}/>
                                <SkillBulletText>MongoDB</SkillBulletText>
                            </SkillBullet>
                        </SkillBox>
                    </InnerSkillBoxContainer>
                </SkillBoxContainer>
            </ContentContainer>
        </AboutSection>
    );
}

export default About;