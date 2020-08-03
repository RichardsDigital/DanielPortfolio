import React, { useState } from 'react';
import styled from 'styled-components';

const ContactSection = styled.section`
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
    width: 450px;
`

const Paragraph = styled.p`
    color: white;
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    font-size: 15px;
    text-align: center;
`

const PageButton = styled.button`
    color: white;
    background-color: #6F5CB7;
    font-size: 15px;
    width: 22%;
    padding: 6px 0;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    opacity: 0.7;
    &:hover {
        opacity: 1;
    }
`

const Contact = () => {
    return (
        <ContactSection>
            <ContentContainer>
                <HeaderContainer>
                    <HeaderLine />
                        <HeaderText>Contact</HeaderText>
                    <HeaderLine />
                </HeaderContainer> 
                <DescriptionContainer>
                    <Paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                    ullamco laboris nisi ut aliquip ex ea commodo.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
                    dolore eu fugiat <span style={{color: '#6F5CB7'}}>nulla pariatur</span>.
                    </Paragraph>
                </DescriptionContainer>
                <PageButton>Get in touch</PageButton>
            </ContentContainer>
        </ContactSection>
    );
}

export default Contact;