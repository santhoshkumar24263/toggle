import React from 'react'
import './PageCss.css'
import profile from '../assets/car.jpg'
const PageCom = () => {
    function showButton(){
        let x=document.getElementById("show").innerText
        console.log(x);
        if(x=="Show Details"){
            document.getElementById("show").innerText="Hide Details"
            document.getElementById("details").style.display="block"
            document.getElementById("maindiv").style.height="320px"
        }
        else{
            document.getElementById("show").innerText="Show Details"
            document.getElementById("details").style.display="none"
            document.getElementById("maindiv").style.height="256px"
        }
    }
    return (
        <React.Fragment>
            <div id="maindiv">
                <img src={profile} alt="profile" />
                <h1>B Santhosh Kumar</h1>
                <p>Registration No. : 212221040127</p>
                <button onClick={showButton} id="show">Show Details</button>
                <p id="details">Department : CSE<br/>Year :  IV<br/>College : SEC<br/></p>
            </div>
        </React.Fragment>
    )
}

export default PageCom