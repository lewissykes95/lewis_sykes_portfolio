import React from "react";
import styled from "styled-components";


const NavBar = () => {


    return(

        <>
            <Nav>
                <Title>Lewis Sykes</Title>
                <List>
                    <Items href="">Projects</Items>
                    <Items href="">About Me</Items>
                    <Items href="">Contact Me</Items>
                </List>
            </Nav>
         
        </>
    );
}


export default NavBar;

const Nav = styled.div`
display: flex;
justify-content: space-between;
list-style: none;
background-image: linear-gradient(to bottom, #635ad9 , white);
`

const Title = styled.a`
position: relative;
top: 10px;
font-size: 20px;
font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
list-style: none;
text-decoration: none;
color: purple;
margin-left: 30px;
text-shadow: 0px 0.5px 0px purple;
padding-right: 20px;
&:hover {
    color: white;
    text-shadow: 0px 2px 10px purple;
    cursor: pointer;
  }

`

const List = styled.ul`
display: flex;

`
const Items = styled.a`
font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
list-style: none;
text-decoration: none;
color: purple;
margin-left: 30px;
text-shadow: 0px 0.5px 0px purple;
padding-right: 20px;
&:hover {
    color: white;
    text-shadow: 0px 2px 10px purple;
  }
`


