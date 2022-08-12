import React from "react";


const NavBar = () => {


    return(

        <>
            <Nav>
                <List>
                    <Items>Home</Items>
                    <Items>Projects</Items>
                    <Items>About Me</Items>
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