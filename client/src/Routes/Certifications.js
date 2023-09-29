import React from 'react';
import './css/certifications.css';
import Card from '../components/card';
import ProjectCard from '../components/projectCard';
import snapImage from '../images/logo.png'
const Certifications = ({ScreenWidth}) => {

    return(
        <main className={(ScreenWidth==='active')?"half":"full"} >
            <h1>Projects</h1>
            <div className="cardsContainer">
                <ProjectCard title="Snap Talk" content="SnapTalk is an instant messaging service built using React, MongoDB and Node.js. It allows users to send and receive messages in real-time through webSockets." link="https://github.com/Charlotte-Greenaway/SnapTalk" img={snapImage}/>
                <ProjectCard title="Portfolio site" content="The site you are currently viewing! Made with React and Node.js." link="https://github.com/Charlotte-Greenaway/portfolioWebsitePublic" img={false}/>
                <ProjectCard title="Google Ads Web Scraper" content="Using Node.js and puppeteer I created a website scraper that retrieved information of ads on sites, this reduced and automated several tasks at my current role." link={false} img={false}/>
                <ProjectCard title="Google Ad Manager Automation" content="Using Node.js, React and the google ads api, I made a user-friendly app that helps the user bulk edit aspects of their google ads account - this was a helpful tool for both clients and the company." link={false} img={false}/>
                <ProjectCard title="Solar System" content="I built solar system with react and A-frame, it allows a user to navigate the solar system and find out information about each planet - in 3D!" link="https://github.com/Charlotte-Greenaway/solarsystem" img={false}/>
            </div>
            <h1>Certifications</h1>
            <div className="cardsContainer">
               <Card title="BSC Computing With Electronic Engineering" content="Specialisng in Software Development, with modules on Python, Java and Web technologies. Passed my first year with 85% average score."/>
               <Card title="GCSEs" content="Achieved an A in Computer science and won the Computer Science Award in secondary school. I worked extremely hard in Computer Science and also won the Progress Award"/>
               <Card title="Udemy" content="I have completed several courses in Javascript, React and Node. Which, along side textbooks and other materials, have allowed me to develop a good understanding of these JS frameworks."/>
               <Card title="Google Ad Manager Certificate" content="In my current role I have completed the Google Ad Manager Certificate, I have a really good understanding of Google Ad Manager and Ad code."/>
               <Card title="Display 360 Certificate" content="In my current role I have completed the Display 360 certification."/>
               <Card title="Codecademy" content="I started my web development journey by learning HTML, CSS and Javascript on Codeacdemy"/>
            </div>
        </main>
    )
}
export default Certifications;