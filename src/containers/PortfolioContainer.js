import React, {useState} from "react";
import styled from "styled-components";
import PortfolioTitle from "../components/Title";
import NavBar from "../components/NavBar";
import ProfileImage from "../components/ProfileImage";
import SocialIcons from "../components/SocialIcons";
import ProjectSelect from "../components/Select";
import Footer from "../components/Footer";


const PortfolioContainter = () => {


    const [title, setTitle] = useState("")

    const projects = [
        {name: 'Python Project', url:"https://github.com/lewissykes95/travel_app_project"},
        {name: 'JavaScript Project', url:"https://github.com/Naefunn/JS_Flag_Project"},
        {name: 'Java Project', url:""}
    ]

    const [selectedProject, setSelectedProject] = useState('')


    const handleProjectSelected = name => {
        setSelectedProject(name)
      }

    return (

        <>
            <NavBar/>
            <Section>
                <Info>
                    <PortfolioTitle/>
                    <SocialIcons/>
                    <ProjectSelect projects={projects} onProjectSelected={handleProjectSelected}/>
                </Info>
                <ProfileImage/>
            </Section>
            <Footer/>
        </>


    );
}

export default PortfolioContainter;


const Section = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-between;

`
const Info = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
margin-left: 70px;
`
