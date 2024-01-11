
import { Box } from '@mui/material';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Bannerpage from './pages/Home/Bannerpage';
import Homelayout from './HomeLayout';
import Projectpage from './pages/Home/Projectpage';
import { Uploadimage } from './pages/Home/Uploadimage';

function App() {

  return (
    <Box>
      <BrowserRouter>
      <Routes>
          <Route path='/' element={<Homelayout />} />
          <Route path="/project" element={<Projectpage/>}/>
          <Route path="image" element={  <Uploadimage/>}/>
        </Routes>
      </BrowserRouter>
    </Box>
  );
}
export default App;
