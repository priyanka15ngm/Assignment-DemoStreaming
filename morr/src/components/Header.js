import "../css/Header.css";


function Header({title}){
        return<>
                <div className = "heading">
                        <div className = "left_heading">
                        <h1>DEMO</h1>
                        <h3>Streaming</h3>
                        </div>
                        
                        <div className = "right_heading">
                        <p>Login</p>
                        <button class="btn">Start your free trial</button>
                        </div>




                </div>
                <div className="second_heading">
                        <p>Popular {title}</p>

                </div>
        
        
        
        
        </>
 }


 export default Header;