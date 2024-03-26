import './App.css';
import SideNav from './components/SideNav/SideNav';
import { Routes, Route } from 'react-router-dom'
import About from './view/About';
import Contact from './view/Contact';
import Home from './view/Home';
import Project from './view/Project';
import { Grid } from '@mui/material';
import Service from './view/Service';
import { useTheme } from './ThemeContext';
import { AppCss } from './constants';


function App() {
  const { theme } = useTheme();

  return (
    <Grid
      sx={{ ...AppCss.outerGrid }}
    >
      <SideNav />
      <Grid item

        style={{ background: theme === 'light' ? '#F7F7F7 ' : '#131314', color: theme === 'light' ? 'black' : '#FAFAFA' }}
        sx={{ ...AppCss.innerGrid }}
      >
        <Routes>
          <Route path='/' element={<Home />} />
          {/* <Route path='/project' element={<Project />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
          <Route path='/service' element={<Service />} /> */}
        </Routes>
      </Grid>
    </Grid>
  );
}

export default App;
