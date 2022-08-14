import React, {useState} from "react";
import styled from "styled-components";
import PortfolioTitle from "../components/Title";
import NavBar from "../components/NavBar";
import ProfileImage from "../components/ProfileImage";
import SocialIcons from "../components/SocialIcons";
import ProjectSelect from "../components/Select";
import Footer from "../components/Footer";


const PortfolioContainter = () => {


    const [projects, setProjects] = useState([
        {name: 'Python Project', url:""},
        {name: 'JavaScript Project', url:""},
        {name: 'Java Project', url:""}
    ])

    const [selectedProject, setSelectedProject] = useState('')


    const handleProjectSelected = name => {
        setSelectedProject(name)
      }



    return (

        <>
            <NavBar/>
            <ProjectSelect projects={projects} onProjectSelected={handleProjectSelected}/>
            <Section>
                <Info>
                    <PortfolioTitle/>
                    <SocialIcons/>
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
justify-content: space-between;

`
const Info = styled.div`
display: flex;
justify-content: space-between;
flex-direction: column;
`
