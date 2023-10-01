import React from 'react'; 
import './App.css';
import bioehsc from './pages/bioehsc';
import committees from './pages/committees';
import courseMap from './pages/coursemap';
import decal from './pages/decal';
import home from './pages/home';
import leadership from './pages/leadership';

function App() {
    return <div className="App">
    <home />
    <bioehsc/>
    </div>
  }
export default App;