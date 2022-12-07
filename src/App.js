import React from "react";


import Navbar from "./components/Navbar/Navbar"
import Jobs from "./Pages/Jobs"
import Resumes from "./Pages/Resumes"
import Questions from "./Pages/Questions"
import { Route, Routes } from "react-router-dom"


import "./App.css";


function App() {
  return (
  <>  
  <Navbar />
  
    <div className="App">
    <Routes>
          <Route path="/" element={<Resumes />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/questions" element={<Questions />} />
          
    </Routes>  
    
    </div>
  </>  
  );
}

export default App;
