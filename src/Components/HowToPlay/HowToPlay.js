import React from 'react'
import './style.css'

function HowToPlay() {
    return (
        <div id = 'HowToPlayContainer'>
            <h4>Very easy steps to use LiLi Robot (Current Version):</h4>
            <ol>
              <li>Switch on the Robot</li>
              <li>The teacher/parent will ask you a question <br/> (ex: Construct a word start with letter M)</li>
              <li>Use the onboard keypad to navigate the robot to the desired cells.<br/>(ex: if the answer is MAN, move the robot to M then A then N)</li>
              <li>The letters will be shown in order on the LCD</li>
              <li>Read the word</li>
            </ol>
        </div>
    )
}

export default HowToPlay
