import Header from "./components/Header";
import { Col, Container, Row } from "reactstrap";
import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import SideBar from "./components/SideBar";
import Superheroes from "./components/pages/Superheroes";
import Pokemon from "./components/pages/Pokemon";
import UseContextExample from "./components/pages/UseContextExample";
import UserContextProvider from "./components/store/UserContent";
import BornToCodeMap from "./components/pages/BornToCodeMap";
import "./App.css";
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
            <UserContextProvider>
              <Routes>
                <Route path="/map" element={<BornToCodeMap />} />
                <Route path="/" element={<Home />} />
                {/* <Route path="/superheroes" element={<Superheroes />} /> */}
                <Route path="/pokemon" element={<Pokemon />} />
                <Route path="/hello-world" element={<h1>Hello World</h1>} />
                <Route
                  path="/use-context-example"
                  element={<UseContextExample />}
                />
                <Route path="/map/:studentName" element={<BornToCodeMap />} />
              </Routes>
            </UserContextProvider>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default App;
