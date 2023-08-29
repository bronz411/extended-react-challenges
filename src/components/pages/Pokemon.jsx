import React, { useState, useEffect } from "react";
import { Button } from "reactstrap";
import PokeInstructions from "../PokeInstructions";
const Pokemon = (props) => {
  const [pokeSprite, setPokeSprite] = useState("");
  const [pokeName, setPokeName] = useState("");
  let [timeLeft, setTimeLeft] = useState(10);

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

  function handleClick() {
    fetchPokemon();
    timerCountdown();
  }
  function timerCountdown() {
    let image = document.querySelector("img");
    let name = document.querySelector(".pokeName");
    let timerDisplay = document.querySelector(".timerDisplay");
    if (timeLeft > 0) {
      image.style.filter = "brightness(0%)";
      name.style.display = "none";
      setInterval(timerCountdown, 1000);
      setTimeLeft(timeLeft--);
      timerDisplay.textContent = timeLeft;
    } else if (timeLeft === 0) {
      image.style.filter = "none";
      name.style.display = "block";
      clearInterval(timerCountdown);
    }
  }

  function handleResetClick() {
    clearInterval(timerCountdown);
    setTimeLeft(10);
    let timerDisplay = document.querySelector(".timerDisplay");
    let image = document.querySelector("img");
    timerDisplay.textContent = timeLeft;
    image.src = "";
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
              onClick={() => handleClick()}>
              Start!
            </Button>
            <Button
              className={"btn btn-success btn-lg"}
              onClick={() => handleResetClick()}>
              Reset!
            </Button>
            <h1 className="timerDisplay">Timer Display: {timeLeft}s</h1>
          </div>
          <div className="col-md-8">
            <img
              className={"img-fluid w-100"}
              src={pokeSprite}
              alt="pokemon"
              // style={{ filter: "brightness(0%)" }}
            />
            <h1
              // style={{ display: "none" }}
              className={"pokeName"}>
              {pokeName.toUpperCase()}
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pokemon;
