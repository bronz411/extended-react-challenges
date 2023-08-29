import { FormGroup, Label, Input } from "reactstrap";
import { UserContext } from "../store/UserContent";
import { useContext } from "react";

const UserForm = (props) => {
  const { firstName, lastName, updateFirstName, updateLastName } =
    useContext(UserContext);
  return (
    <>
      <FormGroup>
        <Label for="exampleEmail">First Name</Label>
        <Input
          id="exampleEmail"
          name="firstName"
          placeholder="First name"
          type="text"
          value={firstName}
          onChange={(e) => updateFirstName(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label for="exampleEmail">Last Name</Label>
        <Input
          id="exampleEmail"
          name="lastName"
          placeholder="Last name"
          type="text"
          value={lastName}
          onChange={(e) => updateLastName(e.target.value)}
        />
      </FormGroup>
    </>
  );
};

export default UserForm;
