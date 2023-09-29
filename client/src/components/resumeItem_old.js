import React,{useState, useEffect} from 'react';
import './css/resumeItem.css';


const ResumeItem = ({section, title,dates,info}) => {
  const [displaySetUp,setDisplayUp]= useState("");
  const [displaySetDwn,setDisplayDwn]= useState("");
  const [itemClass,setItemClass]= useState("item");


  useEffect(()=>{
    if(section[2]==="#"){
      setDisplayDwn("none");
    }
    if(section[1]==="#"){
      setDisplayUp("none");
    }
    if(section[0]==="page-1"){
      setItemClass("item1");
    }
   


  },[section])
  return (
    <div id={section[0]} className={itemClass} >
      <div className="jobContainer" >
      <a  href={section[1]} style={{display:displaySetUp}} className="linkUp">&#8593;</a><br/>
        <div className="job">
          <div className="JT"><h2 className="jobTitle">{title}</h2></div>
          
          <h3 className="dates">{dates}</h3>
          
          <p className="info">{info}</p>
        </div>
        <a  href={section[2]} style={{display:displaySetDwn}} className="linkDown">&#8595;</a>
        </div>
   </div>
  );
};

export default ResumeItem;
