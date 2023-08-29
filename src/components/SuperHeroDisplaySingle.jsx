const SuperHeroDisplaySingle = (props) => {
  let { name, origin, age, universe } = props.hero;
  return (
    <>
      <div>
        <h2>
          {name} - Age: {age}
        </h2>
        <br />
        From: {origin} <br />
        {universe}
        <br />
      </div>
    </>
  );
};

export default SuperHeroDisplaySingle;
