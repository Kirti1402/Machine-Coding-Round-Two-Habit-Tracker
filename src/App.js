import logo from './logo.svg';
import './App.css';
import { HabitListingPage } from './Component/HabitListingPage/HabitListing';
import {Routes,Route} from "react-router-dom"
import HabitArchive from './Component/HabitArchivePage/HabitArchive';
import { ToastContainer, toast } from 'react-toastify';
function App() {
  return (
    <div className="App">
       <ToastContainer />
     <Routes>
      <Route path="/" element={ <HabitListingPage/>}/>
      <Route path='/archive' element={<HabitArchive/>}/>
     </Routes>
    </div>
  );
}

export default App;
