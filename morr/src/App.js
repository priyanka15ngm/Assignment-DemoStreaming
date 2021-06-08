import Home from "./components/Home";
import Movies from "./components/Movies";
import Series from "./components/Series"; 
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import sample from "./feed/sample.json";




function App() {
  return (
    <Router>
      <div className="App">
        {/* <Header/> */}
        <Switch>
        <Route path="/" exact component={Home} />
            <Route path="/Series" exact component={Series} />
            {/* passing props in component series */}
            {/* <Route path="/Series" exact component={() => <Series title={`SeriesList`} />}  /> */}
            <Route path="/Movies" exact component={Movies} />
        </Switch>
        <Footer/>
        
      </div>
    </Router>
    
  );
}

export default App;
