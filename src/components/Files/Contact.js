import "./contact.css";
import Header from "./Header";
import React,{useState} from 'react';
function Contact() {

const[name, setName]= useState(" ")
const[email, setEmail]= useState(" ")
const[text, setText]= useState(" ")


// InputChangeHandler Fi=unction
function inputChangeHandler(event){
event.preventDefault();
setName(event.target.value);
console.log(name);

}

function emailChangeHandler(event){
  setEmail(event.target.value);
  console.log(email); 
}

// TextareaChangeHandler 
function textareaChangeHandler(event){
  event.preventDefault();
setText(event.target.value);
console.log(text);

}

 //Form controlling
function submitHandler(event){
setName(" ");
setEmail(" ");
setText(" ");
}

  return (
    <div>
      <div className="contact-body">
        <div className="Contact-head">
          <Header />
          <h1>Send us a message</h1>
          <form onSubmit={submitHandler} className="form-section">
            <input type="text" placeholder="Full Name" onChange={inputChangeHandler}/><br></br>
            <input type="text" placeholder="Your Email" onChange={emailChangeHandler}/><br></br>
            <textarea type="text" placeholder="Message" onChange={textareaChangeHandler}/><br></br>
            <button type="submit" >SUBMIT</button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Contact;
