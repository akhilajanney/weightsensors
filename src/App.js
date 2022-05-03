import React,{Component} from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Homepage from "./components/Homepage";
import Livedata from "./components/Livedata";

function App() {
  return (
    <div>
     {/* <Router>   */}
      <Homepage/>
      {/* <Routes>
           
            <Route exact path="/livedata" element={<Livedata/>}  />
          
        </Routes>
      </Router> */}
    </div>
  );
}

export default App;
