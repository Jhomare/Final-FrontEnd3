import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FavoritesProvider } from './context/FavoritesContext';
import Layout from './components/Layout';
import Home from './components/Home';
import CharactersPage from './components/CharactersPage';
import CharacterDetail from './components/CharacterDetail';
import ContactForm from './components/ContactForm';
import FavoritesPage from './components/FavoritesPage';

import './App.css';

function App() {
  return (
    <FavoritesProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/characters" element={<CharactersPage />} />
            <Route path="/character/:id" element={<CharacterDetail />} />
            <Route path="/contact" element={<ContactForm />} />
          </Routes>
        </Layout>
      </Router>
    </FavoritesProvider>
  );
}

export default App;