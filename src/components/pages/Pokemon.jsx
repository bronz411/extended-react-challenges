import React, { useState, useEffect } from "react";
import { Button } from "reactstrap";
import PokeInstructions from "../PokeInstructions";
const Pokemon = (props) => {
  const [pokeSprite, setPokeSprite] = useState("");
  const [pokeName, setPokeName] = useState("");

  async function fetchPokemon() {
    const min = 1;
    const max = 152;
    const pokeNum = Math.floor(Math.random() * (max - min) + min);

    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokeNum}`
    );
    const data = await response.json();

    setPokeSprite(data.sprites.front_default);
    setPokeName(data.species.name);
  }
  return (
    <>
      <PokeInstructions />
      <div className={"container-fluid"}>
        <div className="row">
          <div className="col-md-4">
            {" "}
            <Button
              className={"btn btn-success btn-lg"}
              onClick={() => fetchPokemon()}
            >
              Start!
            </Button>
            <h1>Timer Display: 10s</h1>
          </div>
          <div className="col-md-8">
            <img className={"img-fluid w-100"} src={pokeSprite} alt="pokemon" />
            <h1 className={"pokeName"}>{pokeName.toUpperCase()}</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pokemon;
