import React from "react";
 
class Projects extends React. Component {



render (){
    var projects = {
        textAlign: "center"
    };
    var hideTextStyle ={
        visibility: "hidden"
        
            };
           
            function myFunction (){
                
        var hideText = document.getElementById("projectHide");
        
        if(hideText.style.visibility ==="hidden") {
            hideText.style.visibility = "visible"
        }
        
        
        
        
            };
    
    
    return (
        <div>
        <div style ={ projects}>
            <button onClick={myFunction} type="button" class="btn btn-primary"> <h3 >Projects</h3></button>
 </div>
            <div id="projectHide" style={hideTextStyle}>
                 <a href="https://movieclubs.herokuapp.com/"> 
    <button type="button" class="btn btn-primary">
        <i><h3>Movie Club App</h3></i></button></a> 

        <ul>
            <li>The Movie Club App allows you to create movie clubs where you and your friends can schedule a movie event and watch it as a club on prefered day.</li>
            <li>My main responsibility in this project was developing some front end elements and some routes and controllers for the sever.</li>
            <li>Html,CSS,Javascript,Jquery,MySql, and Sequilize.</li>
        </ul>
               
               


                </div>
           
   

           
      
      



        </div>
        
    );
}



}

export default Projects; 
