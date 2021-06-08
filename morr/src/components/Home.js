import React from 'react';
import mov from "./mov.jpg";
import ser from "./ser.jpg";
import "../css/Home.css";
import Header from "./Header";
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
    <Header title={`title`}/>
    <div className = "body">
        <div className="div1">
                    <Link to="/Series" className="nav-link" exact>
                            <img src = {ser} alt="series image" height ={200}/> 
                
                    </Link><p><b>Popular Series</b></p> 
                                                
        </div>
    

        <div className="div1">
            <Link to="/Movies" className="nav-link" exact>
                <img src = {mov} alt="movies image" height ={200}/> 
                </Link> <p><b>Popular Movies</b></p>

   
        </div>
        
    </div>

        

    </>
}


export default Home;