import React from 'react';

import { FiArrowRight } from 'react-icons/fi';

import './styles/global.css';
import './styles/pages/landing.css';

import LogoImg from './images/logo.svg';
import LandingImg from './images/ilustra02.svg';

function App() {
  return (
    <div id='page-landing'>
      <div className='content-wrapper'>
        <img src={LogoImg} alt='Logo' />

        <main>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia das crianças.</p>
        </main>

        <div className='location'>
          <strong>Rio do Sul</strong>
          <span>Santa Catarina</span>
        </div>

        <a href='' className='enter-app'>
          <FiArrowRight size={26} color='rgba(0,0,0 0.6)' />
        </a>
      </div>
    </div>
  );
}

export default App;
