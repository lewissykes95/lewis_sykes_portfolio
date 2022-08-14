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
margin-top: 20px;
margin-right: 120px;
width: 480px;
height: 600px;
border-radius: 15px;
border: 1px purple solid;
&:hover {
    opacity: 0.8;
    transform: scale(0.99);
  }
`


