import React, {useEffect} from "react";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import "../components/link.css";
import TypeWriter from "../components/Typewriter";
import { FlatTree } from "framer-motion";
import 'react-iv-viewer/dist/react-iv-viewer.css';
import { ImageViewer, FullScreenViewer } from 'react-iv-viewer';

const Projects: React.FC = () => {
    return(
        <div>
            <h1 style={{ textAlign: "center" }}><TypeWriter
            words={["projects"]}
            cursor
            cursorStyle
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          /></h1>
            <VerticalTimeline>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{borderWidth: "3px", borderColor: "rgb(167, 51, 74)", background: '#fff', color: 'rgb(167, 51, 74)' }}
                contentArrowStyle={{ borderRight: '7px solid  #fff' }}
                date="Jan 2024 - Current"
                iconStyle={{ background: 'rgb(167, 51, 74)', color: '#fff' }}
                icon={<img src={"softwareicon_processed.png"} style={{display: "flex", justifyContent: "center", width: "100%", height:"100%"}}/>}
            >
                <h3 className="vertical-timeline-element-title"><a className={"link"} href={"https://www.github.com/jeremypoulin/studious"}>Studious</a></h3>
                <h4 className="vertical-timeline-element-subtitle">React, JavaScript, MySQL</h4>
                <p>
                    Full stack development of a social media app which allows users to track and share studying stats with friends. (DESIGN STAGE)
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="Aug 2024 - Current"
                contentStyle={{ background: '#fff', color: 'rgb(162, 53, 159)' }}
                iconStyle={{ background: 'rgb(162, 53, 159)', color: '#fff' }}
                icon={<img src={"softwareicon_processed.png"} style={{display: "flex", justifyContent: "center", width: "100%", height:"100%"}}/>}
            >
                <h3 className="vertical-timeline-element-title"><a className={"link"} href={"https://www.github.com/sleepwalker-studios/qir"}>QIR</a></h3>
                <h4 className="vertical-timeline-element-subtitle">GDScript, Godot</h4>
                <p>
                    A cross-platform arcade game inspired by air hockey, in which players are immersed in the arena. (UNDER CONSTRUCTION)
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="Sep 2024 - Nov 2024"
                contentStyle={{ background: '#fff', color: 'rgb(97, 53, 162)' }}
                iconStyle={{ background: 'rgb(97, 53, 162)', color: '#fff' }}
                icon={<img src={"hardwareicon_processed.png"} style={{display: "flex", justifyContent: "center", width: "100%", height:"100%"}}/>}
            >   <div style={{display: "flex"}}>
                <FullScreenViewer defaultZoom={100} img={"LNM.jpg"} width="60%" height="60%"/>
                {<FullScreenViewer defaultZoom={100} img={"img4.jpg"} width="37%" height="37%"style={{marginLeft: "10px"}}/>}
                </div>
                <h3 className="vertical-timeline-element-title"><a className={"link"} href={"https://www.github.com/ariatgz/library-sound-monitor"}>Library Noise Monitor</a></h3>
                <h4 className="vertical-timeline-element-subtitle">C, Microcontroller, Signal analysis</h4>
                <p>
                    A device which monitors the ambient sound of an environment and outputs warning lights relative to the analyzed noise level.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="Aug 2023 - Dec 2023"
                contentStyle={{ background: '#fff', color: 'rgb(53, 71, 162)' }}
                iconStyle={{ background: 'rgb(53, 71, 162)', color: '#fff' }}
                icon={<img src={"softwareicon_processed.png"} style={{display: "flex", justifyContent: "center", width: "100%", height:"100%"}}/>}
            >   <div style={{display: "flex"}}>
                <video src={"spacevid2.mp4"} width="50%" height="50%" controls/>
                <div>
                <video src={"spacevid2small.mp4"} width="97%" height="97%" controls style={{marginLeft: "5px", marginTop: "-3px"}}/>
                </div>
                </div>
                <h3 className="vertical-timeline-element-title"><a className={"link"} href={"https://www.github.com/jeremypoulin/space"}>space</a></h3>
                <h4 className="vertical-timeline-element-subtitle">Java</h4>
                <p>
                    A 2D RPG game developed with Java and the JFrame library. All assets created by me.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="Mar 2021 - Dec 2023"
                contentStyle={{ background: '#fff', color: 'rgb(53, 131, 162)' }}
                iconStyle={{ background: 'rgb(53, 131, 162)', color: '#fff' }}
                icon={<img src={"hardwareicon_processed.png"} style={{display: "flex", justifyContent: "center", width: "100%", height:"100%"}}/>}
            >   <div style={{display: "flex"}}>
                <FullScreenViewer defaultZoom={100} img={"img2.jpg"} width="35%"/>
                <FullScreenViewer defaultZoom={100} img={"img3.jpg"} width="65%" height="65%"style={{marginLeft: "10px"}}/>
                </div>
                <div>
                <h3 className="vertical-timeline-element-title"><a className={"link"} href={"https://www.github.com/jeremypoulin/fpv-drone"}>Custom FPV Drone</a></h3>
                <h4 className="vertical-timeline-element-subtitle">Design, Soldering, Testing</h4>
                <p>
                    A custom built functioning FPV (First Person View) drone with integrated safety mechanisms and legal status, capable of flying 100km\h+.
                </p>
                </div>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                iconStyle={{ background: 'rgb(46, 175, 134)', color: '#fff' }}
                //icon={<StarIcon />}
            />
            </VerticalTimeline>
        </div>
    )
};

export default Projects
