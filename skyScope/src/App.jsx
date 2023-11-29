
import "./App.css";
import React from "react";
import { Home,AstronomyPage ,WeatherPage} from './pages';

import {Routes,Route} from 'react-router-dom';
import { Amplify } from 'aws-amplify';
import { withAuthenticator} from '@aws-amplify/ui-react';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsExports from './aws-exports';
Amplify.configure(awsExports);


function App() {
  return (
    <Authenticator>
    {() => (
      <main>
        <div className="App">
          <header className="App-header">
          </header>
          <Routes>
        <Route path="/" element={<Home />} />
        <Route path="astronomy" element={<AstronomyPage />} />
        <Route path="weather/*" element={<WeatherPage />} />
      </Routes>
        </div>
      </main>
    )}
  </Authenticator>
    
  );
}

export default withAuthenticator(App);
