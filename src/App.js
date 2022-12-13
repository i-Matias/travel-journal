
import './App.css';
import Hero from './Components/Hero';
import NavBar from './Components/Narbar';
import data from './data';

function App() {
  
  const heros = data.map(item => {
    return (
      <Hero
        {...item}
      />
    );
  })

  return (
    <div>
        <NavBar />
        <section className='hero-section'>
          {heros}
        </section>
    </div>
  );
}

export default App;
