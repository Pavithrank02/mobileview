import './App.css';
import React from 'react';
import SideNav from './components/SideNav/SideNav';
import { Routes, Route } from 'react-router-dom';
import About from './view/About';
import Contact from './view/Contact';
import Home from './view/Home';
import Project from './view/Project';
import Service from './view/Service';
import { Grid } from '@mui/material';
import { useTheme } from './ThemeContext';
import { AppCss } from './constants';

function App() {
  const { theme } = useTheme();

  // You can adjust the sx prop directy in your component
  return (
    <Grid container
      sx={{
        ...AppCss.outerGrid // Ensure it covers at least the full height of the viewport
      }}
    >
      {/* SideNav - Make it take full width on xs screens and auto height */}
      <Grid item xs={12} sm={3}
        sx={{
          background: theme === 'light' ? '#FFF' : 'black',
          color: theme === 'light' ? 'black' : 'white',
          // Apply fixed positioning only for md screens and up
          ...AppCss.innerGrid
        }}
      >
        <SideNav />
      </Grid>

      {/* Main content - Allow it to be pushed to the right on md screens and up */}
      <Grid item xs={12} sm={9}
        sx={{
          background: theme === 'light' ? '#F7F7F7' : '#131314',
          color: theme === 'light' ? 'black' : '#FAFAFA',
          // marginTop: { xs: '1rem', md: 0 }, // Add top margin only on xs screens
          ...AppCss.innerGrid2
          // Match the minimum height of the SideNav
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
        </Routes>
      </Grid>
    </Grid>
  );
}

export default App;

import { Grid, Typography } from '@mui/material'
import React from 'react'
const styles = {
  container: {
    display: 'flex',
    height: '100vh', // Set the height of the container
  },
  grid1: {
    flex: '0 0 25%', // Make Grid 1 take 25% of the container width and not grow or shrink
    padding: '10px',
    backgroundColor: 'red',
    overflow: 'auto', // Enable scrolling if content overflows
  },
  grid2: {
    flex: '1', // Make Grid 2 take remaining space
    padding: '10px',
    backgroundColor: 'blue',
    overflow: 'auto', // Enable scrolling if content overflows
  },
};
const GridComponent = () => {

  return (
    <div style={styles.container}>
      <Grid container style={styles.grid1}>
        <Grid item >
          <Typography variant='h2'>Grid 1</Typography>
        </Grid>
      </Grid>
      <Grid container style={styles.grid2}>
        <Grid item >
          {/* Place your content for Grid 2 here */}
          {/* Example content to test scrolling */}
          {Array.from(Array(20).keys()).map((index) => (
            <div key={index} style={{ padding: '20px' }}>Grid 2 - Item {index + 1}</div>
          ))}
        </Grid>
      </Grid>
    </div>
  )
}


