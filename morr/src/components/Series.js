import React from "react";
import ser from "./ser.jpeg";
function Series(){
    return<>
    <div className = "image">
        <img src = {ser} alt="series image" height ={200}/>
        <img src = {ser} alt="series image" height ={200}/>
        <img src = {ser} alt="series image" height ={200}/>
        <img src = {ser} alt="series image" height ={200}/>
    </div>
    </>
}


export default Series;