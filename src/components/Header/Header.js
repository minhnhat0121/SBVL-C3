import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import {Link} from "react-router-dom"
import './header.scss'
function BasicExample() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
      <img src={"./images/logo.webp"} alt="" style={{width:"40px"}}/>
        <Navbar.Brand><Link to="/" className="nav-link nav-logoText">HCM-UTE</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className="nav-link nav-linkText">Trang chủ</Link>
            <Link to="/exercise" className="nav-link nav-linkText">Bài tập </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
