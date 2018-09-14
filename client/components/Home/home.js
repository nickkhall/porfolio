import React from 'react';

// Components
import Navigation from 'components/Navigation';
import Hero from './partials/hero';

const Home = () => (
  <div className="page home">
    <header>
      <h1>Logo</h1>
      <Navigation />
    </header>

    <Hero />
  </div>
);

export default Home;
