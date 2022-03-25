import React  from "react";
import background from './bg.jpg'
// import Button from 'react-bootstrap/Button';
function Header(){
    return(
        <>
        <div 
        style={{backgroundImage:`url(${background})` , position:"relative" , height:"450px"}}
            >
            <div style={{padding:"100px 800px 150px 50px" ,
                         color:"white"}}>
                <p className="fs-1 fw-bold" >
                   Ahmed El Manzlawy
                </p>
                <p className="fs-4 fw-bold">
                   Web Developer
                </p>
                <button className="btn-register btn btn-lg btn-outline-light   rounded-pill border-light fw-bold fs-6 ">Contact US</button>
                
            </div>
        </div>
        

        </>
    )
}

export default Header;