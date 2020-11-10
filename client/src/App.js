import { useEffect, useState } from "react";
import AuthContext from "./context/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { setAxiosDefaults } from "./utils/axiosDefaults";
import axios from "axios";
import Home from "./pages/Home";
import Footer from "./components/Footer/Footer";
// import Header from "./components/Header/Header";

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

  return (
    <div className='App'>
      <Router>
        <AuthContext.Provider value={{ jwt, setJwt }}>
          <Switch>
            <Route exact path='/' component={Home} />
          </Switch>
          <Footer />
        </AuthContext.Provider>
      </Router>
    </div>
  );
}

export default App;
