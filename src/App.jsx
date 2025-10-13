import { Container, Nav, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState } from "react";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";
import { GrProjects } from "react-icons/gr";
import { FaBars } from "react-icons/fa";

function App() {
  const [expanded, setExpended] = useState(false);

  return (
    <>
      <div className="">
        <Navbar expanded={expanded} fixed="top" expand="md" className="sticky">
          <Container>
            {/* TODO: add brand here */}
            <Navbar.Toggle
              style={{ borderColor: "transparent" }}
              aria-controls="responsive-navbar-nav"
              onClick={() => {
                setExpended(expanded ? false : "expanded");
              }}
            >
              <FaBars size={27} />
            </Navbar.Toggle>
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ms-auto" defaultActiveKey="#home">
                <Nav.Item>
                  <Nav.Link href="#home" onClick={() => setExpended(false)}>
                    <AiOutlineHome style={{ marginBottom: "5px" }} /> Home
                  </Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link href="#about" onClick={() => setExpended(false)}>
                    <AiOutlineUser style={{ marginBottom: "5px" }} /> About
                  </Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link
                    href="#experience"
                    onClick={() => setExpended(false)}
                  >
                    <AiOutlineFundProjectionScreen
                      style={{ marginBottom: "5px" }}
                    />{" "}
                    Experience
                  </Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link href="#projects" onClick={() => setExpended(false)}>
                    <GrProjects size={15} style={{ marginBottom: "5px" }} />{" "}
                    Projects
                  </Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link href="#contact" onClick={() => setExpended(false)}>
                    <CgFileDocument style={{ marginBottom: "5px" }} /> Contact
                  </Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link href="#hire-me" onClick={() => setExpended(false)}>
                    <CgFileDocument style={{ marginBottom: "5px" }} /> Hire Me
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
}

export default App;
