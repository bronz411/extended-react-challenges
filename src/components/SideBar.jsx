import { NavLink } from "react-router-dom";
import { ListGroup, ListGroupItem } from "reactstrap";

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
      </ListGroup>
    </>
  );
};

export default SideBar;
