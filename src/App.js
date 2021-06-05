import './App.css';

import React, { useState, useRef } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/global';
import { theme } from './styles/theme';
import { useOnClickOutside } from './hooks';
// NAVIGATION HAMBURGER -- imported as one from index.js in /nav
import { Burger, Menu } from './components/nav';
import Header from './components/header/Header';
import Triplecards from './components/triplecards/Triplecards';

function App() {
  const [open, setOpen] = useState(false);

  const node = useRef(); 
  useOnClickOutside(node, () => setOpen(false));

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <div ref={node}>
          <Burger open={open} setOpen={setOpen} />
          <Menu open={open} setOpen={setOpen} />
        </div>
        <Header />
        <Triplecards />
      </>
    </ThemeProvider>
  );
}
export default App;