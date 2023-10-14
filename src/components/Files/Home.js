 import "./home.css"
 import logo from "../assets/logo-removebg-preview.png"
 import  homebg from '../assets/homebg-removebg-preview.png'
import Header from "./Header";
import Prefooter from "./Prefooter";
 
 function Home(){
return(<div className="home_body">
    <div className="div_body">
<img src={logo}  className="logo"/>
<img src={homebg} className="homebg"></img>
<div className="headerSection"><Header/></div>


<div className="banner_text">
<h1 >Coffee Makes Mood</h1>
<h2>"Indulge in Every Sip: Experience the Richness of Coffee!"</h2>

</div>

    </div>
    <Prefooter/>
    </div>
)
 }

 export default Home;