import React from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import TodoList from './components/TodoList';


function App() {

  return (
    <div className="App">
     <Header />
     <TodoList />
     <Footer />
      
    </div>
  );
}

export default App;
