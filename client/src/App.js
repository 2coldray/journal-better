import { useEffect, useState } from "react";
import AuthContext from "./context/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { setAxiosDefaults } from "./utils/axiosDefaults";
import axios from "axios";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Week from "./pages/Week";
import Journal from "./pages/Journal";
import DayJournal from "./pages/DayJournal";
import DaySummary from "./pages/DaySummary";
import Footer from "./components/Footer/Footer";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import desktopImage from "./assets/images/happy-book.jpg";

function App() {
  const [jwt, setJwt] = useState("");
  const imageUrl = desktopImage;

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

  useEffect(() => {
    const localJwt = localStorage.getItem("jwt");
    if (localJwt) {
      setJwt(localJwt);
    }
  }, []);

  useEffect(() => {
    if (jwt) {
      setAxiosDefaults(jwt);
      localStorage.setItem("jwt", jwt);
    }
  }, [jwt]);

  return (
    <div className="App" style={{backgroundImage: `url(${imageUrl})`}}>
      <Router>
        <AuthContext.Provider value={{ jwt, setJwt }}>
          <Switch>
            <Route exact path="/Week" component={Week} />
            <Route exact path="/" component={Auth} />
            <Route exact path="/Tutorial" component={Home} />
            <Route exact path="/DaySummary" component={DaySummary} />
            <ProtectedRoute exact path="/DayJournal" component={DayJournal} />
            <ProtectedRoute exact path="/Journal" component={Journal} />
          </Switch>
        </AuthContext.Provider>
      </Router>
    </div>
  );
}

export default App;
