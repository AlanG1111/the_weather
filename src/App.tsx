import React from 'react';
import logo from './logo.svg';
import './App.css';
import Weather from './components/Weather';

const App: React.FC = () => {
  return (
    <div className="App">
      <Weather />
    </div>
  );
}

export default App;
