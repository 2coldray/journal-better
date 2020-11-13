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
import Header from "./components/Header/Header";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";


function App() {
  const [jwt, setJwt] = useState("");

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

//   const style = {
//     showRomanNumbers: false,
//     showMinuteScale: true,
//     showHourScale: true,
//     showNumbers: true,
//     radialDirectionOfNumbers: false,
//     colorOfScalesAndNumbers: `black`,
//     hourHandColor: `#151515`,
//     minuteHandColor: `black`,
//     secondHandColor: `red`,
//     firstCircleColor: `white`,
//     secondCircleColor: `white`,
//     thirdCircleColor: `white`,
//     fourthCircleColor: `black`,
//     centerDotColor: `black`,
//     width: 200,
//     numberSize: 100,
//     iana: `America/Cancun`
// }

  return (
    <div className='App'>
      <Router>
        <Header/>
        <div>
      </div>
        <AuthContext.Provider value={{ jwt, setJwt }}>
          <Switch>
            <ProtectedRoute exact path="/Week" component={Week}/>
            <Route exact path="/Auth" component={Auth} />
            <Route exact path="/Home" component={Home} />
            <Route exact path="/DaySummary" component={DaySummary} />
            <ProtectedRoute exact path="/DayJournal" component={DayJournal} />
            <ProtectedRoute exact path="/Journal" component={Journal} />
            <Route exact path="/" component={Auth} />
            <Route exact path="/" component={Home} />
          </Switch>
          <Footer />
        </AuthContext.Provider>
      </Router>
    </div>
  );
}

export default App;
