import React from 'react';
import './css/AboutMe.css';
import {useState, useEffect, useMemo} from 'react';
import profilePic from '../images/charlotte_illustration.png';


const AboutMe = ({ScreenWidth}) => {

  const words = useMemo(() =>  ["Computer Science Student", "Tech Ops Executive"],[]);
  //sets which header word to use
  const [header, setHeader] = useState(0);
  //initialises the first letter to be "written"
  const [typingRange, setTypingRange] = useState(1);
  //sets length of header string
  const [stringLen, setStringLen] = useState(words[header].length);
  //tells the cursor when to flash 
  const[flash,setFlash]= useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      if (typingRange === stringLen) {
        setTimeout(()=>{
        setTypingRange(1);
        const newHeader = header === 1 ? 0 : 1;
        setHeader(newHeader);
        setStringLen(words[newHeader].length);
        setFlash(false)
        },3000)
        setFlash(true);
      } else {
        setTypingRange(typingRange + 1);
        setFlash(false);
      }
    }, 100);
 
    return () => {
      clearTimeout(timer);
    };
  }, [typingRange, header, stringLen, words]);
 

    return(
        <main className={(ScreenWidth==='active')?"half":"full"}>
          <h1> Hey I'm Charlotte  &#128075; </h1>
          <div className="subheader">
                  <p>I'm A {words[header].substring(0,typingRange)}</p><div className={(flash)?"cursorflash":"cursor"}>|</div>   
          </div>
          <img alt= "Charlotte Greenaway" src= {profilePic} style={{float:"right"}}></img>       
          <p>As an aspiring Junior developer, I am enthusiastic about expanding my expertise in web development, particularly in the areas of React and Node.js.</p>
          <p>Currently pursuing a university course focused on software development, I am actively seeking opportunities to further advance my knowledge and practical experience in these technologies.</p>
          <p>With a deep passion for coding and a natural inclination for problem-solving, I am committed to continuous learning and staying abreast of the latest advancements in the field.</p>
          <p>My goal is to become a highly skilled and accomplished developer who can contribute effectively to innovative projects and create impactful solutions.</p>
          <p className="bulletPoint"> &#x1F4BB; Current Role: Tech Ops Executive</p>
          <p className="bulletPoint"> &#128301; Current Project: Google Ad Mananger API in Node.js </p>
          <p className="bulletPoint">&#128640; Aspirations: Build a full stack application, learn next.js, become a full stack developer </p>
          <p className="bulletPoint">&#9889; Facts About Me: I enjoy learning about electronics in my spare time and I am working on designing a mechanical armed toy for my cat!</p>
          <p className="bulletPoint">&#x1f331; Skills: In my current role I am gaining skills and knowledge of ad code and experience with Prebid and google Ad Manager</p>
        </main>
    );
}

export default AboutMe;