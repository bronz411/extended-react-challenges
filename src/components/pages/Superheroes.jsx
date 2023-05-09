const Superheroes = (props) => {
  return (
    <>
      <h2>Superheroes</h2>
      <p>
        You're going to create a component called <b>SuperheroDisplay.jsx</b>.
        Create this file in the components folder. In the component it you will
        have to complete the following.
      </p>

      <ul>
        <li>
          Create an input field that and store what the user types into a
          variable
        </li>
        <li>
          Have 3 buttons that will filter the superhero list. Have a button that
          will only show the DC characters, have a Button that will only show
          the Marvel Characters and a Button that will show all the characters.
        </li>
        <li>
          Create an input field so the user can type in the name of the
          superhero and it will begin to start filtering off of the current list
          that has been selected. For example if you have marvel selected and
          they start typing in batman nothing should show up.
        </li>
      </ul>
      <div className="alert alert-danger">
        In the <b>src/assets</b> folder you will find an image of what we are
        looking for.
      </div>
      {/* Mount New Component Below this Comment */}
    </>
  );
};

export default Superheroes;
