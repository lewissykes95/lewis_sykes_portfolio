import React from "react";
import styled from "styled-components";
import Projects from "./Projects";



const NavBar = () => {


    return(

        <>
            <Nav>
                <a href=""><Home src="https://cdn-icons-png.flaticon.com/512/25/25694.png"></Home></a>
                <List>
                    <Items path="/Projects" element={< Projects />} >Projects</Items>
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

const Home = styled.img`
position: relative;
top: 10px;
text-decoration: none;
color: purple;
margin-left: 30px;
width: 30px;
&:hover {
    transform: scale(1.1);
    cursor: pointer;
  }


`

const List = styled.ul`
display: flex;

`
const Items = styled.a`
font-family: 'M PLUS 1 Code', sans-serif;
font-size: 18px;
list-style: none;
text-decoration: none;
color: purple;
margin-left: 10px;
margin-right: 30px;
text-shadow: 0px 0.5px 0px purple;
padding-right: 20px;
&:hover {
    color: white;
    text-shadow: 0px 2px 10px purple;
  }
`


