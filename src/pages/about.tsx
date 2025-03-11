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
            <h2 style={{ textAlign: "center", color: "rgb(145, 0, 58)"}}>general</h2>
            <p style={{marginLeft: "80px", marginRight: "80px", padding: "30px", color: "rgb(165, 118, 0)"}}>Born and raised in Edmonton, Alberta, I moved across Canada to attend the University of Waterloo's renowned Computer Engineering program. 
                Alongside my studies, I have a variety of interests which I pursue daily.
            </p>
            <h2 style={{ textAlign: "center", color: "rgb(145, 0, 58)" }}>tech</h2>
            <p style={{marginLeft: "80px", marginRight: "80px", padding: "30px", color: "rgb(165, 118, 0)" }}>Since I was first introduced to the world of computers as a young child marvelling at the magic black boxes that were called cell phones, 
                my passion for computer technology has grown exponentially. <br></br>
                Upon the discovery of FPV drones, I immediately became obsessed with the world of UAVs (Unmanned Aerial Vehicles). 
                Unfortunately, the high cost of these devices was a tall barrier that stood in the way of the hobby.
                To get around this, with the help of YouTube and other online resources, I designed and built a custom FPV drone from components, which took it's maiden flight in December of 2023.
                My initial encounter with programming was in 2022, when I discovered a music composition tool named Sonic Pi. 
                Tinkering with this unique application piqued my interest in the world of software development. This newfound interest formed a base for what you see in the "projects" section.
                </p>
            <h2 style={{ textAlign: "center", color: "rgb(145, 0, 58)" }}>sports</h2>
            <p style={{marginLeft: "80px", marginRight: "80px", padding: "30px", color: "rgb(165, 118, 0)" }}>As a lifelong athlete, sport has always played a significant role in my everyday life. Though training is as fun as a hobby to me, 
                my athletic endeavours have opened unprecedented doors. In 2022 and 2023, I represented Canada at the Junior Marathon World Championships in the sport of Canoe/Kayak. <br></br>
                Some of my earlier accomplishments include winning the Alberta Summer Games Individual Triathlon event, and competing at the Canada Summer Games for Sprint Canoe. <br></br>
                Currently, I compete for the University of Waterloo's Varsity Nordic Ski Team.
            </p>
            <h2 style={{ textAlign: "center", color: "rgb(145, 0, 58)" }}>music</h2>
            <p style={{marginLeft: "80px", marginRight: "80px", padding: "30px", color: "rgb(165, 118, 0)" }}>Music was my first love. For as long as I can remember, I have been playing and performing music, whether it be the piano, cello, or trombone.
                For the past 5 years, I have also been recording music, and working with DAWs (Digital Audio Workstations). I aspire to continue to progress in music,
                and plan on pursuing composition as a hobby.
            </p>
        </section>
    )
}

export default About