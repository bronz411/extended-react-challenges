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
          <NavLink to={"/superheroes"}>Super Heroes</NavLink>
        </ListGroupItem>
        <ListGroupItem>
          <NavLink to={"/pokemon"}>Pokemon</NavLink>
        </ListGroupItem>
      </ListGroup>
    </>
  );
};

export default SideBar;
