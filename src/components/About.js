import React from 'react';
import './style.css';

class About extends React.Component{
    render(){
        return(
            <div className="about-div" id="about">
                <h2>About Me</h2>
                <p>I am Manav Kapoor, a student pursuing B.Tech in Computer Science and Engineering from Maharaja Surajmal Institute of Technology, New Delhi.
                    I am fond of web development and have knowledge of ReactJS with Redux. Apart from front end, I am learning backend technologies(Node js and MongoDB) also. Looking for opportunities.
                </p>
            </div>
        )
    }
}
export default About;