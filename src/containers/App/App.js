import React from 'react';
import './App.module.scss';
import LandingPage from '../../components/LandingPage';
import Navbar from '../../components/Navbar';
import FanDashboardTitle from '../../components/Fan Dashboard/FanDashboardTitle';
import FanArtistSearch from '../../components/Fan Dashboard/Fan-ArtistSearch/Fan-ArtistSearch';
import ReleaseCardContainers from '../../components/Fan Dashboard/ReleaseCardContainers/ReleaseCardContainers';

function App() {
    return (
        <main>
            {/* <LandingPage /> */}
            <FanDashboardTitle />
            <FanArtistSearch />
            <ReleaseCardContainers />


        </main>
    );
}

export default App;
