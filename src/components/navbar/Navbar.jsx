import { Form, Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

const Header = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" >
        <Container>
          <Navbar.Brand href="/">
            <img
              src="pokemon.png"
              alt=""
              width="default"
              height="40"
              className="d-inline-block align-top"
            />
            <Navbar.Text></Navbar.Text>
            Pokedéx
          </Navbar.Brand>
        </Container>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Busca pokémon"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-dark">Buscar</Button>
        </Form>
      </Navbar>
    </>
  );
};

export default Header;