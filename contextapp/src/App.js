import React from 'react';
import BookList from './components/BookList';
import Navbar from './components/Navbar';
import ThemeContextProvider from './contexts/ThemeContext';
import ThemeToggle from './components/ThemeToggle';
import AuthContextProvider from './contexts/AuthContext';

function App() {
  return (
    <div className="App">
      {/* 
        when we surround something using a component than 
        children are attached to the props  ??????
        we can access them in ThemeContext file using props
      */}
      <ThemeContextProvider>
        <AuthContextProvider>
          {/* both above components are two different context 
              and its not matter which one is wrapping the another one 
              we can also wrap <ThemeContextProvider> by <AuthContextProvider>
          */}
          <Navbar />
          <BookList />
          <ThemeToggle />
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;