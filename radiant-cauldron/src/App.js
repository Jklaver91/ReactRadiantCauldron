import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import NavLogo from './Assets/Logos/NavLogo.png';
import './App.css';

function App() {
  return (
    <div className="App">
       <Navbar className='nav' expand="lg">
      <Container fluid>
      <img className='navlogo' src={NavLogo} alt="NavLogo" />
        <Navbar.Brand className='mx-3' href="/">Radiant Cauldron</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/events">Upcoming Events</Nav.Link>
            <Nav.Link href="/about">About Us</Nav.Link>
            <Nav.Link href="/vendor">Vendor Info</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    

    </div>
  );
}

export default App;
