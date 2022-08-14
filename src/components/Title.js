import React from "react";
import styled from "styled-components";


const PortfolioTitle = () => {


    return(

        <>
        
            <Title>Lewis Sykes Portfolio</Title>
            <About>I am a Junior Software Developer from Edinburgh</About>
            <Skills>
                <Items>Python</Items>
                <Items>JavaScript</Items>
                <Items>HTML + CSS</Items>
            </Skills>

            <Frameworks>
                <Items>Flask</Items>
                <Items>React</Items>
            </Frameworks>
            
        </>



    );
}


export default PortfolioTitle;

const Title = styled.h1`
font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;

`

const About = styled.h3`
font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
`

const Skills = styled.div``


const Frameworks = styled.div``


const Items = styled.h4`
font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
`