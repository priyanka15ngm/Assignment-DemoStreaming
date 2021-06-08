import Home from "./components/Home";
import Movies from "./components/Movies";
import Series from "./components/Series"; 
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";




function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Switch>
        <Route path="/" exact component={Home} />
            <Route path="/Series" exact component={Series} />
            <Route path="/Movies" exact component={Movies} />
        </Switch>
        <Footer/>
        
      </div>
    </Router>
    
  );
}

export default App;