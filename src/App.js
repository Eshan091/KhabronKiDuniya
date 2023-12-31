import "./App.css";
import { useState } from "react";
import React from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App=()=>{
  const [progress, setProgress] = useState(0);

  
  
    return (
      <div>
        <Router >
          <Navbar />
          <LoadingBar
          height={3}
          style={{
            backgroundImage: 'linear-gradient(to right, white,red)',
          }}
          progress={progress}
       
      />
          <Routes>
            <Route
              exact
              path="/"
              element={<News setProgress={setProgress}   key="general" pageSize={5} country="in" category="general" />}
            ></Route>
            <Route exact
              
              path="/business"
              element={<News setProgress={setProgress}  key="business" pageSize={5} country="in" category="business" />}
            ></Route>
           <Route exact path="/entertainment" element={<News setProgress={setProgress} key="entertainment" pageSize={5} country="in" category="entertainment" />}></Route>
           <Route exact path="/general" element={<News setProgress={setProgress}  key="general"pageSize={5} country="in" category="general" />}></Route>
           <Route exact path="/health" element={<News setProgress={setProgress} key="health"pageSize={5} country="in" category="health" />}></Route>
           <Route exact path="/science" element={<News setProgress={setProgress} key="science" pageSize={5} country="in" category="science" />}></Route>
           <Route exact path="/sports" element={<News setProgress={setProgress} key="sports"pageSize={5} country="in" category="sports" />}></Route>
           <Route exact path="/technology" element={<News setProgress={setProgress} key="technology"pageSize={5} country="in" category="technology" />}></Route>
          </Routes>
        </Router>
      </div>
    );
  
}
export default App
    
