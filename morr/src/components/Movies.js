import React from 'react';
import mov from "./mov.jpeg";
function Movies(){
    return<>
    <div className = "image">
        <img src = {mov} alt="series image" height ={200}/>
        <img src = {mov} alt="series image" height ={200}/>
        <img src = {mov} alt="series image" height ={200}/>
        <img src = {mov} alt="series image" height ={200}/>
    </div>
    </>
}

export default Movies;