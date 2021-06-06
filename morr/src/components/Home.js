import React from 'react';

import mov from "./mov.jpeg";
import ser from "./ser.jpeg";

import { Link } from "react-router-dom";

//--------------------------------------------------
// creating an fuction with function keyword like javascript function
//-------------------------------------------------

// function Home(props){
//     return<h1>{props.passingprop}</h1>
// }

//--------------------------------------------------
// creating an arrow fuction for the same Worker
//-------------------------------------------------

const Home = () =>{
    return<>
    
    <Link to="/Series" className="nav-link" exact>
    <img src = {ser} alt="series image" height ={200}/> 
    
    </Link>
    <p>Popular Series</p> 

    <Link to="/Movies" className="nav-link" exact>
    <img src = {mov} alt="movies image" height ={200}/> 
    </Link>

    <p>Popular Movies</p>
        

        

    </>
}


export default Home;