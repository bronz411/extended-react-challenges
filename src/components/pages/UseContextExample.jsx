import { useContext } from "react";
import { UserContext } from "../store/UserContent";
import UserForm from "../form/UserForm";

const UseContextExample = (props) => {
  const { firstName, lastName } = useContext(UserContext);
  return (
    <>
      <h2>UseContext Example</h2>
      <p>
        useContext is a React Hook that lets you read and subscribe to context
        from your component.
      </p>
      <hr />
      <h3>First Name: {firstName} </h3>
      <h3>Last Name: {lastName} </h3>
      <UserForm />
    </>
  );
};

export default UseContextExample;
