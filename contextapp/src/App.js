import React from 'react';
import BookList from './components/BookList';
import Navbar from './components/Navbar';
import ThemeContextProvider from './contexts/ThemeContext';
import ThemeToggle from './components/ThemeToggle';
function App() {
  return (
    <div className="App">
      {/* 
        when we surround something using a component than 
        children are attached to the props  ??????
        we can access them in ThemeContext file using props
      */}
      <ThemeContextProvider>
        <Navbar />
        <BookList />
        <ThemeToggle />
      </ThemeContextProvider>
    </div>
  );
}

export default App;