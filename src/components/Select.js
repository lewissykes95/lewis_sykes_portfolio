import React from "react";
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
                return ( <option key = { project.name } value = { project.name } > { project.name } </option>
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
top: 400px;
right: 390px;
`

const Select = styled.select`
text-align: center;
font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
color: purple;
width: 150px;
height: 30px;
border-radius: 15px;
border: 1px purple solid;
`


const Option = styled.option``



const Button = styled.input`
margin-left: 10px;
font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
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




