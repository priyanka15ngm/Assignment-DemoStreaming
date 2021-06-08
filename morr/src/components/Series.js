import React from "react";
import ser from "./ser.jpg";
import Header from "./Header";
function Series({ title }){
    return<>
    {/* <h3>{title}</h3> */}
    <Header title={`SeriesList`}/>
    <div className = "body">
        
        <img src = {ser} alt="series image" height ={200}/>
        <img src = {ser} alt="series image" height ={200}/>
        <img src = {ser} alt="series image" height ={200}/>
        <img src = {ser} alt="series image" height ={200}/>
    </div>
    </>
}


export default Series;