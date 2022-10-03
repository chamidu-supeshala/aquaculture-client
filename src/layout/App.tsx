
import { Box } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import FarmForm from '../components/FarmForm/FarmForm';
import WorkerForm from '../components/WorkerForm/WorkerForm';
import Home from '../pages/Home/Home';
import Header from './Header/Header';
import SideNav from './SideNav/SideNav';

function App() {
  return (
    <Box sx={{ display: 'flex' }}>
      <Header />
      <SideNav />
      <Box component="main" sx={{ flexGrow: 1, pt: 8 }}>
        <Routes>
          <Route path="/add-farm" caseSensitive={false} element={<FarmForm />} />
          <Route path="/add-worker" caseSensitive={false} element={<WorkerForm />} />
          <Route path="/" caseSensitive={false} element={<Home />} />
        </Routes>
      </Box>
    </Box>
  );
}

export default App;
