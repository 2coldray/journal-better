import { useEffect } from "react";
import axios from "axios";
import Home from "./pages/Home"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"

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
    <div className="App">
      <Header/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
