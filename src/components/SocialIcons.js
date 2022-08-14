import React from "react";
import styled from 'styled-components'


const SocialIcons = () => {

    
    return (

        <>


            <Icons>
                <CV type="button">CV</CV>
                <a href="https://www.instagram.com/lewissykes95/"><Items src="https://cdn-icons-png.flaticon.com/512/87/87390.png"/></a>
                <a href="https://www.linkedin.com/in/lewis-sykes-b6979b115/"><Items src="https://cdn-icons-png.flaticon.com/512/25/25320.png"/></a>
            </Icons>

        

        </>

    );
}

export default SocialIcons;


const Icons = styled.div``


const Items = styled.img`
position: relative;
bottom: 240px;
left: 80px;
margin: 10px;
width: 30px;
&:hover {
    transform: scale(1.1);
    cursor: pointer;
  }

`

const CV = styled.button`
position: relative;
bottom: 260px;
left: 80px;
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








