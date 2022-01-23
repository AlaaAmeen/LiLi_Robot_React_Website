import React from 'react'
import './style.css'
import LiLiVideo from "../../videos/LiliRobot2.mp4";


function About() {
    return (
        <div id = 'AboutContainer'>
            <h3 className = 'AboutHeading'>About</h3>
            <div>
                LiLi Robot is an educational game, it targets the primary stage. It can be used in school under the teachers supervision or at home under the parent supervision.
                One of our future phases is to automate the supervision process by combining our creative robot with a mobile application that will automate the correction process.
                The purpose of this educational game is to help the students to know the letters and be able to construct words and sentences by moving the robot to the cells that contain the correct letters or words. The level can be determine according to the child’s level.
                This game combines education, fun and movement for students because at this stage they love to move and play with games. 
                <span>For more information please play the video :)</span>
            </div>

            <video src = {LiLiVideo} height="300" width="60%" controls />
        </div>
    )
}

export default About
