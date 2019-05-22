import React from 'react';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import Banner from './Banner/Banner';
import About from './About/About';

function App() {
  return (
    <div className="App">
      <Navbar />

      <Banner />
      <About />

      <Footer />
    </div>
  );
}

export default App;
