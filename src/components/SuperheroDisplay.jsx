import { Button, Form, Input, Label } from "reactstrap";
import { superheroes } from "./data/superheroes";
import React, { useEffect, useState } from "react";
import SuperHeroDisplaySingle from "./SuperHeroDisplaySingle";

const SuperHeroesChallenge = (props) => {
  const [calledHeroList, setcalledHeroList] = useState(superheroes);
  const [currentFilter, setCurrentFilter] = useState("");
  const [activeList, setActiveList] = useState(superheroes);
  let dcHeroes = superheroes.filter((hero) => hero.universe.includes("DC"));
  let marvelHeroes = superheroes.filter((hero) =>
    hero.universe.includes("Marvel")
  );
  function callDCHeroes() {
    setcalledHeroList(dcHeroes);
    setActiveList(dcHeroes);
  }
  function callMarvelHeroes() {
    setcalledHeroList(marvelHeroes);
    setActiveList(marvelHeroes);
  }
  function callAllHeroes() {
    setcalledHeroList(superheroes);
    setActiveList(superheroes);
  }
  function textFilterHeroes(textFilter) {
    setCurrentFilter(textFilter);
    if (textFilter.trim() === "") {
      setcalledHeroList(activeList);
    } else {
      let filteredHeroes = calledHeroList.filter((hero) =>
        hero.name.toLowerCase().includes(textFilter.toLowerCase())
      );
      setcalledHeroList(filteredHeroes);
    }
  }

  // show whole list if nothing typed in (need if statement)
  // keep track of the original array
  // onChange based on the input field - filter down the display list
  // create useStates to display the superheroes list
  return (
    <>
      <Form>
        <Label>Search Hero:</Label>
        <Input
          type="text"
          placeholder="Search Hero Here"
          onChange={(e) => textFilterHeroes(e.target.value)}></Input>
      </Form>
      <Button onClick={callDCHeroes}>Only DC</Button>
      <Button onClick={callMarvelHeroes}> Only Marvel</Button>
      <Button onClick={callAllHeroes}>All Heroes</Button>
      {calledHeroList.map((hero, index) => (
        <SuperHeroDisplaySingle key={index} hero={hero} />
      ))}
    </>
  );
};

export default SuperHeroesChallenge;
