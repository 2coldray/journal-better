import { useEffect } from "react";
import axios from "axios";
import Footer from "./components/Footer/Footer"

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
      <Footer/>
    </div>
  );
}

export default App;
