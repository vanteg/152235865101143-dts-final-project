import { Nav, Container, Navbar } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import Stack from "react-bootstrap/Stack";

const NavigationBar = () => {
  const navigate = useNavigate();
  // onclick Bussiness
  const handleBussiness = () => {
    navigate("article");
  };

  return (
    <Stack direction="horizontal" gap={6}>
      <div style={{ marginBottom: "4em" }}>
        <Navbar fixed="top" className="border" bg="white">
          <Container>
            <Navbar.Brand>Irvan</Navbar.Brand>
            <Nav>
              <Nav.Link onClick={handleBussiness} className="ms-auto">
                Bussiness
              </Nav.Link>
              <div className="vr"></div>
              <Nav.Link>Technology</Nav.Link>
              <div className="vr"></div>
              <Nav.Link>Science</Nav.Link>
              <div className="vr"></div>
              <Nav.Link>Sports</Nav.Link>
              <div className="vr"></div>
              <Nav.Link>Art</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
    </Stack>
  );
};

export default NavigationBar;
