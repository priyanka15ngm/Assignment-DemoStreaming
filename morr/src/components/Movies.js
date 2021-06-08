import React from 'react';
import mov from "./mov.jpg";
import Header from "./Header";
function Movies({title}){
    return<>

    <Header title={`MoviesList`}/>
    <div className = "body">
        <img src = {mov} alt="series image" height ={200}/>
        <img src = {mov} alt="series image" height ={200}/>
        <img src = {mov} alt="series image" height ={200}/>
        <img src = {mov} alt="series image" height ={200}/>
        
    </div>
    </>
}

export default Movies;