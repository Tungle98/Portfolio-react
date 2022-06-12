import "./App.css";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import Product from "./component/Product";
import {Switch, Router} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <>
      <Navbar />
      <Switch>
        <Router exact path="/" component={Home} />
        <Router exact path="/products" component={Product} />
      </Switch>
    
      </>
    </div>
  );
}

export default App;
