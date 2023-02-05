import './App.css';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Container, Nav, Navbar, OffcanvasBody } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Form from 'react-bootstrap/Form';
import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';







function App() {
  return (
    <div className="App">
      <div>
      <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Castle Rock Capacity Insurance Agency
</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">
Business Insurance</Nav.Link>
            <Nav.Link href="#link">AGENT</Nav.Link>
            <NavDropdown title="POLICYHOLDER PAYMENTS" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Service
</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">About</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>


<div className='cards'>
<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://thumbs.dreamstime.com/b/one-most-iconic-castel-romania-peles-sinaia-summer-time-176131434.jpg" />
      <Card.Body>
        <Card.Title>San Marino</Card.Title>
        <Card.Text>
        Most beautiful castles to visit in Europe · 1. The Palace of Pena · 2. The Alcazar Castle · 3. The Castle in Love with the Wind · 4. The Neuschwanstein Castle · 5.
        </Card.Text>
        <Button variant="primary">Go Guaita Tower, San Marino
</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2FzdGVsfGVufDB8fDB8fA%3D%3D&w=1000&q=80" />
      <Card.Body>
        <Card.Title>Germany</Card.Title>
        <Card.Text>
        Neuschwanstein Castle, Germany
Neuschwanstein Castle is not only one of the most beautiful castles in Europe, but it is also one of the most recognizable castles on the planet—thanks in large part to the fact that it
        </Card.Text>
        <Button variant="primary">Go Neuschwanstein Castle, Germany
</Button>
      </Card.Body>
    </Card>
</div>

<div className='cousel'>
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1585231474241-c8340c2b2c65?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Germany</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1533154683836-84ea7a0bc310?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Tcheque</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=384&q=80a"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Ukrain</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
<div className='drop'>
    <DropdownButton
      align="end"
      title="Castle Name"
      id="dropdown-menu-align-end"
    >
      <Dropdown.Item eventKey="1">Action</Dropdown.Item>
      <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
      <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
    </DropdownButton>
    </div>

<div className='forms'>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  </div>
    

    <div>
      <ButtonGroup variant="primary" >
        Launch
      </ButtonGroup>

      <OffcanvasBody >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </OffcanvasBody>
      </div>

    


    <div>
    <ButtonToolbar aria-label="Toolbar with button groups">
      <ButtonGroup className="me-2" aria-label="First group">
        <Button>1</Button> <Button>2</Button> {' '}
        
      </ButtonGroup>
      <ButtonGroup className="me-2" aria-label="Second group">
        <Button>5</Button> 
      </ButtonGroup>
      <ButtonGroup aria-label="Third group">
        <Button>8</Button>
      </ButtonGroup>
    </ButtonToolbar>
    </div>
    </div>
  );

  
}

export default App;
