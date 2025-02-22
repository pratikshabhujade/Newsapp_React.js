import React, { useState } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import About from "./components/About";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from "react-top-loading-bar";


const App = () => {
  const [progress, setProgress] = useState(0);
  const apiKey = process.env.REACT_APP_NEWS_API

  return (
    <div>
      <Router>
        <Navbar />
        <div>
          <LoadingBar
            color="#f11946"
            progress={progress}
          />
        </div>

        <Routes>
          <Route exact path="/" element={<News setProgress={setProgress} key='business' pageSize={8} countryName="us" category="business" apiKey={apiKey} />} />
          <Route exact path="/entertainment" element={<News setProgress={setProgress} key='entertainment' pageSize={8} countryName="us" category="entertainment" apiKey={apiKey} />} />
          <Route exact path="/general" element={<News setProgress={setProgress} key='general' pageSize={8} countryName="us" category="general" apiKey={apiKey} />} />
          <Route exact path="/health" element={<News setProgress={setProgress} key='health' pageSize={8} countryName="us" category="health" apiKey={apiKey}/>} />
          <Route exact path="/science" element={<News setProgress={setProgress} key='science' pageSize={8} countryName="us" category="science" apiKey={apiKey} />} />
          <Route exact path="/sports" element={<News setProgress={setProgress} key='sports' pageSize={8} countryName="us" category="sports" apiKey={apiKey} />} />
          <Route exact path="/technology" element={<News setProgress={setProgress} key='technology' pageSize={8} countryName="us" category="technology" apiKey={apiKey} />} />
          <Route exact path="/about" element={<About setProgress={setProgress} key='about' pageSize={8} countryName="us" category="about" />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
