import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './componets/Navbar';
import LoginPage from './pages/LoginPage';

function App() {

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<LoginPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
