import { useEffect } from "react";
import axios from "axios";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Week from "./pages/Week"
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  useEffect(() => {
    console.log("Make an API call");
    axios
      .get("/api/config")
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <Router>
      <div className="App">
        <Header />
        <Route exact path="/Auth" component={Auth}/>
        <Route exact path="/Home" component={Home}/>
        <Route exact path="/Week" component={Week}/>
        <Route exact path="/" component={Auth}/>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
