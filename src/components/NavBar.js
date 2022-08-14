import React from "react";
import styled from "styled-components";


const NavBar = () => {


    return(

        <>
            <Nav>
                <List>
                    <Items href="">Lewis Sykes</Items>
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
list-style: none;
justify-content: flex-start;
background-color: grey;
`
const List = styled.ul`
display: flex;
`
const Items = styled.a`
list-style: none;
padding-right: 20px;
`