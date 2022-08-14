import React from "react";
import styled from "styled-components";


const PortfolioTitle = () => {


    return(

        <>
        <Section>

        <Title>Lewis Sykes | Junior Software Developer.</Title>
            <About>A Software Developer that has a passion to create...</About>
            <Skills>
                <Items></Items>
                <Items></Items>
                <Items></Items>
            </Skills>

            <Frameworks>
                <Items></Items>
                <Items></Items>
            </Frameworks>   
        </Section>
            
        </>

    );
}


export default PortfolioTitle;

const Section = styled.div`
position: relative;
top: 200px;
left: 100px;
`

const Title = styled.h1`
font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
color: white;
text-shadow: 0px 1px 5px purple;
/* position: relative;
right: 30%;
top: 50%; */

`

const About = styled.h3`
font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
color: purple;
position: relative;
/* right: 30%; */
`

const Skills = styled.div``


const Frameworks = styled.div``


const Items = styled.h4`
font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
position: relative;
/* right: 30%; */
`