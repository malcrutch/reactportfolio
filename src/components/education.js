import React from "react";

class Education extends React.Component {
    render(){
        var headerStyle = {
            textAlign: "center"
        };
        var hideTextStyle = {
            visibility: "hidden"
            
                };
               
        function myFunction() {
                    
            var hideText = document.getElementById("hideEdu");
            
            if(hideText.style.visibility ==="hidden") {
                hideText.style.visibility = "visible"
            } 

            else if (hideText.style.visibility ==="hidden") {
                hideText.style.visibility = "visible"   
            };
        
        }
            
            
    
    
    return(
        <div>
            <div style={headerStyle}>
            <button onClick={myFunction} type="button" class="btn btn-primary"> <h3 >Education</h3></button>
           
            </div>
            
            <div id="hideEdu" style={hideTextStyle}>
            <p><b>Bootcamp Certificate:</b> Case Western Reserve University, Cleveland, OH</p>
    <p>A 24-week intensive program focused on gaining technical programming skills in HTML5, CSS3, Javascript, JQuery, Bootstrap, Firebase, Node Js, MySQL, MongoDB, Express, Handelbars.js & ReactJS. </p>
    <p><b>Bachelor's Degree in Promotional Communications(2015)</b> Cleveland State University, Cleveland, OH</p>
    
    
            </div>
    
        </div>
    
    
    
    
    
    );

}
}
    









export default Education; 