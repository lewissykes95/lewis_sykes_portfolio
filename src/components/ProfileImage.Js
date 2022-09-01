import React from "react";
import styled from "styled-components";
// import profile from './profile-image.jpg'
import '../App.css'



const ProfileImage = () => {


    return (

        <>

        
            {/* <Section>

                <Image src = {require('./profile-image.jpeg')} />

            </Section>
            */}


            <div className="img-card">
                <img src = {require('./profile-image.jpeg')}></img>
                <div className="card-details">
                    <h1>Technical Skills</h1>
                    <div className="list-details">

                    <label>Languages</label>
                    <ul>
                        <li>Python</li>
                        <li>Java</li>
                        <li>JavaScript</li>
                        <li>HTML</li>
                        <li>CSS</li>
                    </ul>
                    <label>Frameworks</label>
                    <ul>
                        <li>React</li>
                        <li>Flask</li>
                    </ul>
                    <label>Databases</label>
                    <ul>
                        <li>PostgeSQL</li>
                        <li>MongoDB</li>
                    </ul>
                    <label>Test Driven Development (TDD)</label>
                    <ul>
                        <li>Unit, System and Integration</li>
                        <li>Experience with Cypress</li>
                    </ul>
                    <label>Version Controlling</label>
                    <ul>
                        <li>Git</li>
                        <li>GitHub</li>
                    </ul>
                    </div>


                </div>




                    
                    
            </div>
        
        </>

    );
}

export default ProfileImage;


// const Image = styled.img`
// display: flex;
// /* max-width: auto;  */
// height: 600px;
// width: 500px;
// margin-top: 20px;
// margin-right: 150px;
// margin-left:20px;
// border-radius: 30px;
// border: 2px purple solid;
// &:hover {
//     opacity: 0.8;
//     transform: scale(0.99);
//   }
// `

// const Section = styled.div``


