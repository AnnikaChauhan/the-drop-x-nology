import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.module.scss';
// import LandingPage from '../../components/LandingPage';
import ReleaseCardList from '../../components/ReleaseCardList';

function App() {
  return (
    <main>
       {/* <LandingPage /> */}
       <ReleaseCardList />
    </main>
  );
}

export default App;
