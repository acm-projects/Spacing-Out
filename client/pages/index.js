import Head from 'next/head'
import Image from 'next/image'
import React from 'react';
import Form from 'rsuite/Form';
import Button from 'rsuite/Button';
//mport ButtonToolbar from 'rsuite/ButtonToolbar';
import { Navbar, Nav, Dropdown, Content, Sidebar, Grid, Row, Col, Modal, Footer } from 'rsuite';
import { Container } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';
import styles from '../styles/Home.module.css'


  export default function LandingPage() {
    const [open, setOpen] = React.useState(false);
    const [size, setSize] = React.useState();
    const handleOpen = value => {
      setSize(value);
      setOpen(true);
    };
    const handleClose = () => setOpen(false);
    const axios = require('axios');
    //axios.post('/backend something', {Name: 'name', Email: 'email'} )
      
    return (
    <Container>
      <Navbar style={{backgroundColor:'#7660FF', appearance:'subtle', textDecoration: 'none', 
              color:'black', fontSize:'1.15rem', height:'4rem'}}>
          <Navbar.Brand style={{textDecoration: 'none', color:'white', fontWeight: 'heavy'}} >
            HOME
          </Navbar.Brand>
          <Nav pullRight>
            <Nav.Item style={{textDecoration: 'none', padding: 'none', color:'white'} }>
              Notes
            </Nav.Item>
            <Nav.Item style={{textDecoration: 'none', color:'white'}}>Flashcards</Nav.Item>
            <Nav.Item style={{textDecoration: 'none', color:'black'}}> 
              <Button size="med" onClick={() => handleOpen('xs')} appearance='ghost'>
                Account
              </Button>
            </Nav.Item>
            <Modal size={size} open={open} onClose={handleClose}>
        <Modal.Header>
          <Modal.Title>Login</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form>
                <Form.Group controlId="name">
                  <Form.ControlLabel>Name</Form.ControlLabel>
                  <Form.Control name="name" type="name" />
                </Form.Group>
                <Form.Group controlId="email">
                  <Form.ControlLabel>Email</Form.ControlLabel>
                  <Form.Control name="email" type="email" />
                </Form.Group>
                <Form.Group controlId="password">
                  <Form.ControlLabel>Password</Form.ControlLabel>
                  <Form.Control name="password" type="password" autoComplete="off" />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button>
                New User?
              </Button>

              <Button onClick={handleClose} appearance="subtle">
                Cancel
              </Button>
              
              <Button onClick={handleClose} appearance="primary">
                Submit
              </Button>
              
            </Modal.Footer>
          </Modal>
        </Nav>
      </Navbar>
      
      <Head style={{color: "black"}}>
        <title>Spacing Out</title>
      </Head>
      
        <Row>
          
          <h1 style={{textAlign:'center', alignItems: 'center',fontSize:'5rem', 
          marginTop: '5rem', letterSpacing: '1.2rem'}}> SPACING OUT</h1>
          
        </Row>

        <Row>

          <h3 style={{textAlign:'center', alignItems:'center', marginTop:'3rem', fontWeight:'lighter' }}>
             A spaced repitition and note taking software for all your studying needs.
          </h3>

        </Row>

        <Row >
        <Image styles={{alignItems: 'center'}} src="/images/landingpicturenew.jpg" alt="Landing Picture"
          width = "600"
          height = "400" />
        </Row>

    </Container>
  )
}

