import React from "react";
import Card from 'react-bootstrap/Card';
import "./Style.css";

import { useEffect, useState } from "react";
import { useParams } from "react-router";

const CardDescription = () => {
  const { index } = useParams();

  const [pokemon, setPokemon] = useState([])
  const [imagem , setImagem] = useState('')
  
  useEffect(() => {
    getPokemons();
  }, []);
  
  //https://pokeapi.co/api/v2/pokemon/1

  async function getPokemons() {
    await fetch(`https://pokeapi.co/api/v2/pokemon/${index}/`).then(
      (response) => response.json().then((data) => {setPokemon(data)
      setImagem(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index}.png`)})
    );
  }

  return (
    
    <div>
        <img id="pok" src={imagem} />
        <Card key={index} style={{ width: '30rem' }}>
          <Card.Title>{pokemon.nome}</Card.Title>
          <Card.Text>
          {/* <p>Tipo: ${pokemon.abilities.map(item => ' ' + item.ability.name).toString()}</p> */}
          
          {/*       
          <div>
          <h1 >Nome: ${pokemon.name}</h1>
          <h2 >Nº ${pokemon.id}</h2>
          <h3>Tipo: ${pokemon.abilities.map(item => ' ' + item.ability.name).toString()}</h3>
          <h3 >Habilidades: ${pokemon.moves.map(item => ' ' + item.move.name).toString()}</h3>
          <h3 >Peso: ${pokemon.weight  / 10}kg</h3>
          <h3>Altura: ${pokemon.height  / 10}m  </h3>
          </div> */}
        </Card.Text>
      </Card> 

      
    </div>
  );
};


export default CardDescription;
