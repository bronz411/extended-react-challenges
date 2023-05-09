import Header from "./components/Header";
import { Col, Container, Row } from "reactstrap";
import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import SideBar from "./components/SideBar";
import Superheroes from "./components/pages/Superheroes";
import Pokemon from "./components/pages/Pokemon";
function App() {
  return (
    <div>
      <Header />
      <Container className="mt-5">
        <Row>
          <Col md="3">
            <SideBar />
          </Col>
          <Col md="9">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/superheroes" element={<Superheroes />} />
              <Route path="/pokemon" element={<Pokemon />} />
            </Routes>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default App;
