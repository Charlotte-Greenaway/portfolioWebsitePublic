import React, { useRef, useState} from 'react';
import './css/contact.css'
import axios from 'axios';


const Contact = ({ ScreenWidth }) => {
    const [isPopped, setPopped]= useState("none");
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const messageRef = useRef(null);
    
    const sendData =(e)=>{
        setPopped("block");
        e.preventDefault();
        //console.log("data sent");
        const formData = new FormData();
        formData.append('name', nameRef.current.value);
        formData.append('email', emailRef.current.value);
        formData.append('message', messageRef.current.value);

        axios.post('/submit-form', [...formData])
        .then(response => {
            console.log(response.data);
            // Handle successful response
          })
          .catch(error => {
            console.error(error);
            // Handle error
          });
        console.log([...formData]);
        nameRef.current.value="";
        emailRef.current.value="";
        messageRef.current.value="";
    }   
    const togglePopup=()=>{
        setPopped("none");
    }

  return (
    <main className={ScreenWidth === 'active' ? 'half' : 'full'} style={{display:"grid"}}>
      <h1>Contact Me</h1>
    <div id="popup" style={{display:isPopped}}>
        <h3>Success!</h3>
        <p>Thank you for sending me a message, I will be in touch shortly.</p>
        <button onClick={togglePopup}>Exit</button>
    </div>
    <form  onSubmit={sendData} id="contactForm">
        <label htmlFor='name'>Name:</label>
        <input type="text" name="name" ref={nameRef} placeholder='Your name' required></input>
        <label htmlFor='email'>Email:</label>
        <input
            type="email"
            name="email"
            ref={emailRef}
            placeholder="youremail@yourprovider.com"
            required
        />
        <label htmlFor='message'>Message</label>
        <textarea name="message" ref={messageRef} spellCheck="true" placeholder='Write your message here...'></textarea>
        <input type='submit'></input>
    </form>

    </main>
  );
};

export default Contact;
