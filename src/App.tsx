import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import Configuracao from './paginas/Configuracao';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <RecoilRoot>
          <Routes>
            <Route path='/' element={<Configuracao />} />
          </Routes>
        </RecoilRoot>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
