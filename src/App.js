import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import ViewData from './components/ViewData';
import DataAdd from './components/DataAdd';
import History from './components/History';
import StateBasics from './components/StateBasics';
import Counterfile from './components/Counterfile';
import Satebasiceg from './components/Satebasiceg';

function App() {
  return (
    <div className="App">
      <Navbar/>
      {/* <Satebasiceg/> */}
      <StateBasics/> 
      {/* <Counterfile/> */}
     {/* <Routes>
       <Route path='/' element={<ViewData/>}/>
        <Route path='/add' element={<DataAdd/>}/>
        <Route path='/ed' element={<History/>}/>
      </Routes> */}
    </div>
  );
}

export default App;
