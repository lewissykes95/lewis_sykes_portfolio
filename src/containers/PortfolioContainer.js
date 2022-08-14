import React from "react";
import styled from "styled-components";
import PortfolioTitle from "../components/Title";
import NavBar from "../components/NavBar";
import ProfileImage from "../components/ProfileImage";
import SocialIcons from "../components/SocialIcons";


const PortfolioContainter = () => {


    return (

        <>
            <NavBar/>
            <Section>
                <Info>
                    <PortfolioTitle/>
                    <SocialIcons/>
                </Info>
                <ProfileImage/>  
            </Section>
            
        </>


    );
}

export default PortfolioContainter;


const Section = styled.div`
display: flex;
justify-content: space-between;

`
const Info = styled.div`
display: flex;
justify-content: space-between;
flex-direction: column;
`
