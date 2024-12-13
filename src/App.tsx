import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Resume from './components/Resume';

const App: React.FC = () => {
  return (
    <BrowserRouter basename="/my_resume">
      <div className="App">
        <Resume />
      </div>
    </BrowserRouter>
  );
}

export default App;