// src/App.jsx
import { useState } from 'react';  // No need to import React anymore
import Header from './components/Header';
import Navbar from './components/Navbar';
import TaskList from './components/TaskList';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  const [section, setSection] = useState('home');  // State to manage current section
  const tasks = ['Task 1', 'Task 2', 'Task 3', 'Task 4', 'Task 5'];

  const renderSection = () => {
    switch (section) {
      case 'home':
        return <Home />;
      case 'tasks':
        return <TaskList tasks={tasks} />;
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div>
      <Header />
      <Navbar setSection={setSection} />
      <main>
        {renderSection()}
      </main>
      <Footer />
    </div>
  );
};

export default App;
