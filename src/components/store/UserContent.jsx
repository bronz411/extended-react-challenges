import React, { createContext, useEffect, useState } from "react";
export const UserContext = createContext({
  firstName: "",
  lastName: "",
  updateFirstName: () => {},
  updateLastName: () => {},
});

const UserContextProvider = (props) => {
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Doe");
  useEffect(() => {
    const firstName = localStorage.getItem("firstName");
    const lastName = localStorage.getItem("lastName");
    setFirstName(firstName);
    setLastName(lastName);
  }, []);

  function updateFirstName(name) {
    setFirstName(name);
    localStorage.setItem("firstName", name);
  }
  function updateLastName(name) {
    setLastName(name);
    localStorage.setItem("lastName", name);
  }

  const value = {
    firstName: firstName,
    lastName: lastName,
    updateFirstName: updateFirstName,
    updateLastName: updateLastName,
  };
  return (
    <>
      <UserContext.Provider value={value}>
        {props.children}
      </UserContext.Provider>
    </>
  );
};

export default UserContextProvider;
