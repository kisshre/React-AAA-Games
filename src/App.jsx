import Navbar from './components/Navbar';
import Hero from './components/Hero';
import GamesContainer from './components/GamesContainer';
import LatestNews from './components/LatestNews';
import Categories from './components/Categories';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <GamesContainer />
        <LatestNews />
        <Categories />
      </main>
      <Footer />
    </>
  );
}

export default App;
