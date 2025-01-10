import React from "react";
import TypeWriter from "../components/Typewriter";


const About = () => {
    return(
        <section id="about me">
            <h1 style={{ textAlign: "center" }}><TypeWriter
            words={["about me"]}
            cursor
            cursorStyle
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          /></h1>
            <h2 style={{ textAlign: "center"}}>general</h2>
            <p style={{padding: "30px", color: "lightgray"}}>Born and raised in Edmonton, Alberta, I moved across Canada to attend the University of Waterloo's reknowned Computer Engineering program. 
                Alongside my studies, I have a variety of interests which I pursue daily.
            </p>
            <h2 style={{ textAlign: "center" }}>tech</h2>
            <p style={{padding: "30px", color: "lightgray" }}>Since I was first introduced to the world of computers as a young child marvelling at the magic black boxes that were cell phones, 
                my passion for computer technology has grown exponentially. <br></br>
                <strong>tech timeline:</strong> <br></br>
                - Spring 2021: Upon the discovery of FPV drones, I immediately became obsessed with the world of UAVs (Unmanned Aerial Vehicles). 
                Unfortunately, the high cost of these devices was a tall barrier that stood in the way of the hobby.
                To get around this, with the help of YouTube and other online resources, I designed and built a custom FPV drone from components, which took it's maiden flight in December of 2023.
                - My initial encounter with programming was in 2022, when I discovered a music composition tool named Sonic Pi. 
                Tinkering with this unique application piqued my interest in the world of software development.<br></br>
                - Spring 2023: I began learning the basics of web development (HTML, CSS) and took multiple online courses in an attempt to build my knowledge base.<br></br>
                - Summer 2023: Upon stumbling upon some intriguing YouTube tutorials, I began dipping my toes in game development. Eventually, I chose to spend the closing
                half of the year creating a video game in Java as a gift for a friend, learning as I progressed through the development. 
                I also built a small hardware console for the game from a Raspberry Pi, a screen, and other components. <br></br>
                - Summer 2024: Upon meeting an English major from another university, my perspective on video games was abruptly reinvented.
                This resulted in the beginning of one of my current projects: a collaborative game project named QIR.
                - January 2025: Recently, I have began dipping my toes into web/app development with React, and am currently in the design phases of a collaborative social media app project.
                </p>
            <h2 style={{ textAlign: "center" }}>sports</h2>
            <p style={{padding: "30px", color: "lightgray" }}>As a lifelong athlete, sport has always played a significant role in my everyday life. Though training is as fun as a hobby to me, 
                my athletic endeavours have opened unprecedented doors. In 2022 and 2023, I represented Canada at the Junior Marathon World Championships in the sport of Canoe/Kayak. <br></br>
                Some of my earlier accomplishments include winning the Alberta Summer Games Individual Triathlon event, and competing at the Canada Summer Games for Sprint Canoe. <br></br>
                Currently, I compete for the University of Waterloo's Varsity Nordic Ski Team.
            </p>
            <h2 style={{ textAlign: "center" }}>music</h2>
            <p style={{padding: "30px", color: "lightgray" }}>Music was my first love. For as long as I can remember, I have been playing and performing music, whether it be the piano, cello, or trombone.
                For the past 5 years, I have also been recording music, and working with DAWs (Digital Audio Workstations). I aspire to continue to progress in music,
                and plan on pursuing composition as a hobby.
            </p>
        </section>
    )
}

export default About