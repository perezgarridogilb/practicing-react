import Logo from './the-simpson.png';
import Container from './components/Container';
import Header from './components/Header';
import Welcome from './components/Welcome';
import CharacterContainer from './components/CharacterContainer';
import { useState } from 'react';
import quotes from './quotes.json'



function App() {
  const [characters, setCharacters] = useState(null);

  const resApi = async () => {
    // const api = await fetch(
    //         "https://thesimpsonsquoteapi.glitch.me/quotes?count=3"
    // );
    // const frase = await api.json();
    // console.log(frase);
  setCharacters(quotes);

    
  };

  return (
    <div className="App">
      <Container>
        <Header/>
        { !characters ? <Welcome resApi={resApi}/> : (<CharacterContainer characters={characters} resApi={resApi} />) }
        
        
      </Container>
    </div>
  );
}

export default App;
