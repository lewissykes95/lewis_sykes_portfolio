import React from "react";
import styled from "styled-components";
// import profile from './profile-image.jpg'


const ProfileImage = () => {


    return (

        <>

            <Image src = {require('./profile-image.jpeg')} /> 
        
        </>

    );
}

export default ProfileImage;


const Image = styled.img`
margin-right: 150px;
width: 500px;
height: 600px;
border-radius: 30px;
border: 2px purple solid;
&:hover {
    opacity: 0.8;
    transform: scale(0.99);
  }
`


