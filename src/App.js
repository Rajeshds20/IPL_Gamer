import React, { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import PlayersDetailsPage from './pages/PlayersDetailsPage';
import TeamDetailsPage from './pages/TeamDetailsPage';
import PointstablePage from './pages/PointsTablePage';
import NavBar from './components/NavBar';
import SchedulePage from './pages/SchedulePage';
import StatsPage from './pages/StatsPage';
import EachTeamPage from './pages/EachTeamPage';
import EachPlayerPage from './pages/EachPlayerPage.jsx';


function App() {
  const [darkMode, setDarkMode] = useState("true");
  const handleDarkMode = () => {
    setDarkMode((darkMode) => !darkMode);
  };

  document.getElementsByTagName("body")[0].style.backgroundColor = darkMode ? "black" : "white";

  const routes = createBrowserRouter([
    {
      path: '/',
      element: <HomePage darkMode={darkMode} />
    },
    {
      path: '/details/teams/',
      element: <TeamDetailsPage darkMode={darkMode} />
    },
    {
      path: '/teams/:teamName',
      element: <EachTeamPage darkMode={darkMode} />

    },
    {
      path: '/details/players/',
      element: <PlayersDetailsPage darkMode={darkMode} />
    },
    {
      path: '/player',
      element: <EachPlayerPage darkMode={darkMode} />
    },
    {
      path: '/about',
      element: <AboutPage darkMode={darkMode} />
    },
    {
      path: '/stats',
      element: <StatsPage darkMode={darkMode} />
    },
    {
      path: '/pointstable',
      element: <PointstablePage darkMode={darkMode} />
    },
    {
      path: '/schedule',
      element: <SchedulePage darkMode={darkMode} />
    },
    {
      path: '*',
      element: <h1 style={{ color: darkMode ? "white" : "black", textAlign: "center" }}>Page Not Found</h1>
    }
  ])


  return (
    <div style={{ backgroundColor: darkMode ? "black" : "white" }}>
      <NavBar handleDarkMode={handleDarkMode} darkMode={darkMode} />
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
