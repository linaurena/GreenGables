import './App.css';
import { useEffect, useState } from 'react';
import Header from './Header.js';
import { Character } from './Character.js';
import { Footer } from './Footer';


export default function App() {
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    fetch('https://green-gables.herokuapp.com/api/characters')
    .then((response) => response.json())
    .then((json) => {
      setCharacters(json);
    });
  })

  return (
    <>
      <Header/>
      <main>
      {characters.map((character) =>
      <Character 
      key={character.id} {...character} // Spread operators
      // =
      // id={character.id} 
      // name={character.name} 
      // gender={character.gender} 
      // status={character.status} 
      /> )}
      </main>
      <Footer />
    </>
  )
}
