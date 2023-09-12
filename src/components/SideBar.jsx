import { NavLink } from "react-router-dom";
import { ListGroup, ListGroupItem } from "reactstrap";
import { students } from "./data/students";
import { urlBuilder } from "./util/urlBuilder";

const SideBar = (props) => {
  return (
    <>
      <ListGroup className="mt-5">
        <ListGroupItem>
          <NavLink to={"/"}>Home</NavLink>
        </ListGroupItem>
        <ListGroupItem>
          {/* <NavLink to={"/superheroes"}>Super Heroes</NavLink> */}
        </ListGroupItem>
        <ListGroupItem>
          <NavLink to={"/pokemon"}>Pokemon</NavLink>
        </ListGroupItem>
        <ListGroupItem>
          <NavLink to={"/hello-world"}>Hello World</NavLink>
        </ListGroupItem>
        <ListGroupItem>
          <NavLink to={"/use-context-example"}>Use Context Example</NavLink>
        </ListGroupItem>
        <ListGroupItem>
          <NavLink to={"/map"}>born to code</NavLink>
        </ListGroupItem>
        {students.map((student, index) => (
          <ListGroupItem key={index}>
            <NavLink to={`/map/${urlBuilder(student.name)}`}>
              {student.name}
            </NavLink>
          </ListGroupItem>
        ))}
      </ListGroup>
    </>
  );
};

export default SideBar;
