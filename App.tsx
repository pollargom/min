 import React from 'react';
  import Header from './components/Header';
  import Hero from './components/Hero';
  import About from './components/About';
  import Gallery from './components/Gallery';
  import AiChoreographer from './components/AiChoreographer';
  import Contact from './components/Contact';
  import Footer from './components/Footer';

  const App: React.FC = () => {
    return (
      <div className="bg-black min-h-screen text-gray-200">
        <Header />
        <main>
          <div id="home">
            <Hero />
          </div>
          <div id="about" className="py-20 md:py-32 px-4 md:px-8">
            <About />
          </div>
          <div id="gallery" className="py-20 md:py-32 bg-gray-900 px-4 md:px-8">
            <Gallery />
          </div>
          <div id="ai-choreographer" className="py-20 md:py-32 px-4 md:px-8">
            <AiChoreographer />
          </div>
          <div id="contact" className="py-20 md:py-32 bg-gray-900 px-4 md:px-8">
            <Contact />
          </div>
        </main>
        <Footer />
      </div>
    );
  };

  export default App;
