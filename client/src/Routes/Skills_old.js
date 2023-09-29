import React from 'react';
import './css/Skills.css';
import {useState, useEffect, useMemo} from 'react';
import {Link } from 'react-router-dom';
import windows from '../images/windows.jpg'

const Skills = ({ScreenWidth}) => {
    //sets all available results
    const results = useMemo(() => [
      "Node.js",
      "Html",
      "Css",
      "React",
      "Javascript",
      "Python",
      "Problem solving",
      "Research",
      "Google Ad Manager",
      "Google Ads API",
      "Google Tag Manager",
      "Prebid"
    ], []);
      const descriptions=[
        "I have gained valuable experience with this in my current role while building a google ads API with a front end.",
        "I have a solid understanding of HTML, I am able to easily create websites and elements using it.",
        "I have a good understanding of css and can appply css to my projects in react and node.",
        "I have completed several courses in Udemy on react and I am starting to apply this knowledge to several projects.",
        "I have a great understanding of vanilla javascript and I am advancing my knowledge of JS frameworks such as React and Node.",
        "I am learning and advancing on my knowledge in python in my degree.",
        "In my current role I have effectively learnt to problem solve and independantly find solutions to technical problems.",
        "In my current role, I have learnt to 'figure things out' on my own and have been given the independance to research tasks, I have really great research skills.",
        "In my current role I use Google Ad Manager everyday and have experience making and implementing ad tags.",
        "I have experience using the google ads api in my node projects to speed up longer tasks.",
        "I have some experience creating and testing tags in google tag manager",
        "I have experience in implementing prebid and the relevant ad code onto websites."
      ];
      //sets default search value
    const [searchInput, setSearchInput]= useState("");
    //sets the displayed default searches to results
    const [searchResults, setSearchResults] = useState(results.map(skill => skill.name));
    //defines default selected search to null
    const [selectedResult, setSelectedResult] = useState(null);
    //set default description
    const [selectedDescription, setSelectedDescription] = useState(null);
    //filters the results by user input and sets the display variable to this filter, updates on search input change
    const [homepage,setHomepage]= useState(false);
    useEffect(() => {
        var filteredResults = results.filter((result) =>
            result.toLowerCase().includes(searchInput.toLowerCase())
        );
        filteredResults = (searchInput !=="" && filteredResults.length=== 0)?[<p> No results</p>]:filteredResults;
        setSearchResults((searchInput==="")?results:filteredResults)
        
      }, [searchInput, results]);
      //handles change on text input
    const handleInputChange = (event) => {
     setSearchInput(event.target.value);
    };
    //handles click of result
    const handleResultClick = (result) => {
        const resultIndex = results.indexOf(result);
        setSelectedResult(result);
        setSelectedDescription(descriptions[resultIndex]);
      };
    const handleBack =()=>{
        setSelectedResult(null);
    }
    const handleHomepage=()=>{
      setHomepage(!homepage)
      
    }
      return (
        <main className={ScreenWidth === 'active' ? 'half' : 'full'} style={{display:"grid"}}>
          <h1>Skills</h1>
          <div id="comp_container">
            <div id="outerrim">
                <div id="innerrim">
                    <div className={selectedResult === null && homepage=== false ? "searchTab" : "searchTabClosed" }>
                    <button id="exitButton" onClick={handleHomepage}>X</button>
                        <label>Search:</label>
                        <input name= "searchBox" type="text" value={searchInput} onChange={handleInputChange} style={{disply:"inline"}}></input>
                        <div id="results">
                            {searchResults.map((result, index) => (
                            <div style={{cursor:"pointer", color:"blue" }} key={index} onClick={() => handleResultClick(result)}>{result}</div>
                            ))}
                        </div>
                    </div>
                    <div className="resultsTab" style={{ display: selectedResult !== null && homepage=== false ? 'block' : "none" }}>
                        <button onClick={handleBack}>back</button>
                        <div><h2>{selectedResult}</h2></div>
                        <div><p>{selectedDescription}</p></div>
                    </div>
                    <div className="homepageMini" style={{backgroundSize: "auto", backgroundImage:'url('+windows+')', display: homepage=== true ? 'block' : "none",  }}>
                          <div className="windowsScreen">
                          <div className="windowContent"> 
                            <Link to="/" >&#127968;</Link> 	<br/>
                            <small>About Me</small><br/>
                            <code onClick={handleHomepage}>&#127758;</code> <br/>
                            <small>Skills</small><br/>
                             <Link to="/certifications" >&#9997;</Link> <br/>
                             <small>Certifications</small>	<br/>
                             <Link to="/resume" >&#128221; </Link>	<br/>
                             <small>Resume</small><br/>
                              <Link to="/contact" >&#128222;</Link>	<br/>
                              <small>Contact</small><br/>
                          </div>
                          <div className="taskbar">
                            <p><Link to="/" >&#127968;</Link> 	<code onClick={handleHomepage}>&#127758;</code>  <Link to="/certifications" >&#9997;</Link> 	<Link to="/resume" >&#128221; </Link>	 <Link to="/contact" >&#128222;</Link>	</p>
                          </div>
                      </div>
                      </div>
                </div>
                <div id="stalk"></div>
                <div id="base"></div>
            </div>
	    </div>
         
        </main>
      );
    };

export default Skills;