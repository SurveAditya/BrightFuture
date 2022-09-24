import React from 'react'
import { Link } from 'react-router-dom';
import "./Blogs.scss";

const Blogs = () => {
  return (
    <>
        <div id="container">
        <nav id="navbar">
            <ul>
            <ul>
				<li><Link to='/login'>Login</Link></li>

				<li><Link to='/Assignment'>Assignment Section</Link></li>

				<li><Link to='/Blogs'>Blogs</Link></li>

				<li><Link to='/Remidies'>Remedies</Link></li>
			</ul>
            </ul>
        </nav>
        </div>
        <h1>Motivational Blogs</h1>
        <div id="section">
        <div class="text">
            <a href="https://addicted2success.com/motivation/heres-why-you-need-to-make-motivation-personal/"><img
                    src="https://addicted2success.com/wp-content/uploads/2022/08/Heres-Why-You-Need-to-Make-Motivation-Personal.png" alt="" /></a>
            <h2>Here's Why You Need to Make Motivation Personal</h2>
            <p>You put down your self-help book and you feel ready. You are ready to conquer any Herculean task that
                is
                standing
                in your way to success...
            </p>
        </div>
        <hr />
        <div class="text">
            <a href="https://addicted2success.com/motivation/this-isnt-a-disney-movie-no-one-is-going-to-save-you/"><img
                    src="https://addicted2success.com/wp-content/uploads/2022/06/This-Isnt-a-Disney-Movie-No-One-Is-Going-to-Save-You.jpg" alt="" /></a>
            <h2>This Isn't a Disney Movie: No One Is Going to Save You </h2>
            <p>I think we’ve all been hypnotized. Hypnotized by movies, books, and stories that we’ve heard growing
                up
                as a
                children.
                All of these stories can provide...
            </p>

        </div>
        <hr />
        <div class="text">

            <a href="https://addicted2success.com/motivation/the-myth-of-motivation-how-to-get-unstuck/"><img src="https://addicted2success.com/wp-content/uploads/2022/06/The-Myth-of-Motivation-How-to-Get-Unstuck.jpg"
                    alt="" /></a>
            <h2>The Myth of Motivation: How To Get Unstuck</h2>
            <p>Many of us get stuck in the trap that motivation is something we need to have first to start or
                finish a
                task.
                Unfortunately, that's not...</p>

        </div>
        <hr />
        <div class="text">

            <a
                href="https://addicted2success.com/motivation/a-step-by-step-process-that-will-help-you-make-the-impossible-possible/"><img
                    src="https://addicted2success.com/wp-content/uploads/2018/03/A-Step-by-Step-Process-That-Will-Help-You-Make-the-Impossible-Possible.jpg" alt="" /></a>

            <h2>A Step by Step Process That Will Help You Make the Impossible, Possible</h2>
            <p>We have all been there, looking at something and wishing we had it. The girl, the car, the money, the
                family, the lifestyle…but then... </p>
        </div>
        
    </div>
    <div id="section">
        <div class="text">
            <a href="https://addicted2success.com/motivation/how-to-stay-motivated-to-achieve-your-goals/"> <img src="https://addicted2success.com/wp-content/uploads/2021/09/How-to-Stay-Motivated-to-Achieve-Your-Goals.png"
                    alt="" /></a>

            <h2>How to Stay Motivated to Achieve Your Goals</h2>
            <p>Time is the raw material of our lives. How we choose to spend it, shapes our life accordingly. So
                having
                the motivation to spend it on...</p>
        </div>
        <hr />
        <div class="text">
            <a
                href="https://addicted2success.com/motivation/what-is-dark-motivation-and-how-can-i-use-it-to-my-advantage/">
                <img src="https://addicted2success.com/wp-content/uploads/2021/08/What-Is-Dark-Motivation-and-How-Can-I-Use-It-to-My-Advantage.png" alt="" /></a>

            <h2>What Is Dark Motivation and How Can I Use It to My Advantage?</h2>
            <p>It’s Thursday, 8 PM. I’m relaxing at home, doing normal things, and scrolling social media. Tomorrow
                is a
                big day. There are lots of things to ...</p>
        </div>
        <hr />
        <div class="text">
            <a href="https://addicted2success.com/motivation/the-killer-morning-routine-to-boost-motivation/"><img src="https://addicted2success.com/wp-content/uploads/2021/07/The-Killer-Morning-Routine-to-Boost-Motivation.png" alt="" ></img></a>

            <h2>The Killer Morning Routine to Boost Motivation</h2>
            <p>If you’re anything like me, waking up in the morning is a hard task. Over the course of a number of years I’ve built a routine...</p>
        </div>
       
        
        <div class="text">
            <a
                href="https://addicted2success.com/motivation/you-cant-create-success-without-tapping-into-your-sources-of-motivation/"><img
                    src="https://addicted2success.com/wp-content/uploads/2021/02/You-Cant-Create-Success-Without-Tapping-Into-Your-Sources-of-Motivation-.png" alt="" /></a>

            <h2>You Can’t Create Success Without Tapping Into Your Sources of Motivation</h2>
            <p>Sometimes life doesn’t work out as planned no matter what you do. You start each day with the best of
                intentions and expect to achieve success...</p>
        </div>
    </div> 
    </>
  )
}

export default Blogs
