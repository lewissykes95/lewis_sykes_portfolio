import React from "react";
import styled from 'styled-components'



const ProjectSelect = ({ projects, onProjectSelected }) => {


    const handleChange = event => {
        onProjectSelected(event.target.value)
    }


    return (
        <>
        
        <Select defaultValue="" onChange = { handleChange } >
        <Option value = "" disabled > Choose Project </Option> {
            projects.map(project => {
                return ( <option key = { project.name } value = { project.name } > { project.name } </option>
                )
            })
        }
        </Select>
        
        </>
    );
}



export default ProjectSelect; 


const Select = styled.select`
position: relative;
top: 400px;
right: 310px;
font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
color: purple;
width: 150px;
height: 30px;
border-radius: 15px;
border: 1px purple solid;



`


const Option = styled.option``





