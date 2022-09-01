import React from "react";
// import {Link, Routes, Route, useNavigate} from 'react-router-dom';
import styled from 'styled-components'



const ProjectSelect = ({ projects, onProjectSelected }) => {


    const handleChange = event => {
        onProjectSelected(event.target.value)
    }

    return (
        <>
        <Form>

        <Select defaultValue="" onChange = { handleChange } >
        <Option value = "" disabled > Choose Project </Option> {
            projects.map(project => {
                return ( <option key = { project.name } value = { project.name } > { project.name }</option>
                )
            })
        }

        </Select>
        <Button type="submit" value="Go to Project"/>


        </Form>


        

        
     
        
        </>
    );
}



export default ProjectSelect; 


const Form = styled.form`
position: relative;
right: 5px;
display: flex;
margin: 20px;

`

const Select = styled.select`
text-align: center;
font-family: 'M PLUS 1 Code', sans-serif;
margin: 10px;
color: purple;
width: 150px;
height: 30px;
border-radius: 15px;
border: 1px purple solid;
`


const Option = styled.option``



const Button = styled.input`
font-family: 'M PLUS 1 Code', sans-serif;
margin: 10px;
color: purple;
width: 100px;
height: 30px;
border-radius: 15px;
border: 1px purple solid;
&:hover {
    background-color: purple;
    color: white;
    cursor: pointer;
  }
`




