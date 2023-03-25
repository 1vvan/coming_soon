import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AvailableWindow from './Components/AvailableWindow/AvailableWindow';
import ComingSoonPage from './Components/ComingSoonPage/ComingSoonPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ComingSoonPage />}/>
          <Route path='/available' element={<AvailableWindow />} />
          <Route path='*' element={
            <div className='no-page'>
              <span>Страница не найдена !</span>
          </div>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
