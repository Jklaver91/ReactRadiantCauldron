//React imports
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// styling
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import NavLogo from './Assets/Logos/NavLogo.png';
import './App.css';

//pages
import About from './Pages/About';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Events from './Pages/Events';
import Vendor from './Pages/Vendor';


function App() {
  return (
    <div className="App">
      {/* nav bar */}
       <Navbar className='nav' expand="lg">
      <Container fluid className='nav'>
      <img className='navlogo mx-3' src={NavLogo} alt="NavLogo" />
        <Navbar.Brand className='mx-3' href="/">Radiant Cauldron</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            {/* links to pages */}
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/events">Upcoming Events</Nav.Link>
            <Nav.Link href="/vendor">Vendor Info</Nav.Link>
            <Nav.Link href="/about">About Us</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    {/* routes */}
    <Router>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/events" element={<Events />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/vendor" element={<Vendor />} />
              <Route exact path="/contact" element={<Contact />} />
            </Routes>
    </Router>     
    
    </div>
  );
}

export default App;
