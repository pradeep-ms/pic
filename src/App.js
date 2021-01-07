import React from 'react';

import Store from './store';

import { Header } from './components/Header/index';
import { Navbar } from './components/Navbar/index';
import { ImageList } from './components/ImageList/index';

import './style.scss'

function App() {
  return (
    <Store>
      <Header />
      <Navbar />
      <ImageList />
    </Store>
  );
}

export default App;
