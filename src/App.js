import React from 'react';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import Banner from './Banner/Banner';
import About from './About/About';
import Contact from './Contact/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />

      <Banner />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
