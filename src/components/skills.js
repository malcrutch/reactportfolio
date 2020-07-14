import React from "react";
import "../styles/skills.css";

class Skills extends React.Component {


render(){
    var headerStyle ={
        textAlign: "center",
    };
    var hideTextStyle ={
visibility: "hidden"

    };
   
    function myFunction (){
        
var hideText = document.getElementById("hideText");

if(hideText.style.visibility ==="hidden") {
    hideText.style.visibility = "visible"
}

};
    
    
    return (
<div id = "skillsDiv">
    <div style ={headerStyle} >

    <button id = "button" onClick={myFunction} type="button" class="btn btn-primary"><h3>Techincal Skills</h3></button>
    </div>

    <div id ="hideText" style={hideTextStyle}>
    <p><b>Languages:</b>HTML5,CSS3,Jquery, and Javascript.</p>
    <br />
<p><b>Applications:</b></p>

    </div>





</div>
);




}




}

export default Skills;