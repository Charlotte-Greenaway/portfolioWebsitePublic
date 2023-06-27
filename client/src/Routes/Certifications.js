import React from 'react';
import './css/certifications.css';
import Card from '../components/card';

const Certifications = ({ScreenWidth}) => {

    return(
        <main className={(ScreenWidth==='active')?"half":"full"} >
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