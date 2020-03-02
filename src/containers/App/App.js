import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.module.scss';
import LandingPage from '../../components/LandingPage';
import DraftRelease from "../../components/DraftRelease/DraftRelease";

function App() {
  return (
    <main>
      <LandingPage />
      <DraftRelease />
    </main>
  );
}

export default App;
