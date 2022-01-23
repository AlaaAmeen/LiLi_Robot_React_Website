import React from 'react'
import './style.css'
import wheelRotatorVideo from "../../videos/wheelRotator.mp4";

function UpcomingGames() {
    return (
        <div id = 'UpcomingGamesContainer'>
            <h3 className = "AboutHeading UpcomingGamesHeading">Upcoming Games</h3>
            <div>
                The most important thing we have is your son or daughter, so we try hard to provide them with interesting information. Wait for us in other games like what will be explained in the video below and others.
            </div>
            <video src = {wheelRotatorVideo} height="300" width="60%" controls />
        </div>
    )
}

export default UpcomingGames
