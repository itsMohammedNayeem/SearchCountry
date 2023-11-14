import { useState, useEffect } from "react";
import axios from "axios";

const Pokedata = () => {
  // get the pokemon data from the api and get the height and weight for each pokemon
  const [pokemon, setPokemon] = useState([]);
  const [pokemonName, setPokemonName] = useState([]);
  const [pokemonWeight, setPokemonWeight] = useState([]);
  const [pokemonHeight, setPokemonHeight] = useState([]);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/")
      .then((res) => {
        setPokemon(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // get the pokemon data from the api and get the height and weight for each pokemon and append it to the array
  useEffect(() => {
    pokemon.map(({ name }) => {
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then((res) => {
          //keep appending the name, weight and height to the array along with the previous data
          setPokemonName((prev) => [...prev, name]);
          setPokemonWeight((prev) => [...prev, res.data.weight]);
          setPokemonHeight((prev) => [...prev, res.data.height]);
        })
        .catch((err) => {
          console.log(err);
        });
    });
  }, [pokemon]);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Weight</th>
            <th>Height</th>
          </tr>
        </thead>
        <tbody>
          {pokemonName.map((name, index) => (
            <tr key={index}>
              <td>{name}</td>
              <td>{pokemonWeight[index]}</td>
              <td>{pokemonHeight[index]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Pokedata;
