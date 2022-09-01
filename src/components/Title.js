import React from "react";
import styled from "styled-components";


const PortfolioTitle = () => {


    return(

        <>
        <Section>

        <Title>Lewis Sykes | Junior Software Developer.</Title>
            <About>A Software Developer with a passion to create...</About>
        </Section>
            
        </>

    );
}


export default PortfolioTitle;

const Section = styled.div`
`

const Title = styled.h1`
font-family: 'M PLUS 1 Code', sans-serif;
color: white;
text-shadow: 0px 1px 5px purple;
`

const About = styled.h3`
text-align: center;
font-family: 'M PLUS 1 Code', sans-serif;
color: purple;
`

const Skills = styled.div``


const Frameworks = styled.div``


const Items = styled.h4`
font-family: 'M PLUS 1 Code', sans-serif;

`