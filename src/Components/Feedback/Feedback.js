import React from 'react'
import './style.css'

function Feedback() {
    return (
        <div id = 'FeedbackContainer'>
            Leaving feedbacks means a lot to me, I will receive all via email :)
            <form action="https://formsubmit.co/alaaameen34@gmail.com" method="POST">
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_subject" value="New Feedback about LiLi Robot Website" />
                <input type="email" name="email" placeholder="Email Address" required /><br/>
                <input type="text" name="feedback" placeholder="Write your feedback here with your name :)" required /><br/>
                <button id="send" className="btn btn-primary" onsubmit="alert('Thank you for sharing your feedback with me!')" type="submit">Send</button>
            </form>

            <footer>&copy; Alaa Amin 2021</footer>
        </div>
    )
}

export default Feedback
