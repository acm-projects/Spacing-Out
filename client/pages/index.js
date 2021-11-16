import Head from 'next/head';
import Image from 'next/image';
import React, { useEffect } from 'react';
import Form from 'rsuite/Form';
import Button from 'rsuite/Button';
import { Navbar, Nav, Dropdown, Row, Modal } from 'rsuite';
import { Container} from 'rsuite';
import Link from 'next/Link';
import 'rsuite/dist/rsuite.min.css';
import {useRouter} from 'next/router';
import axios from 'axios';



  export default function LandingPage() {
    const [open, setOpen] = React.useState(false);
    const [size, setSize] = React.useState();
    const handleOpen = value => {
      setSize(value);
      setOpen(true);
    };
    const handleClose = () => setOpen(false);
    const router = useRouter();
    const {id} = router.query;
    const MyLink = React.forwardRef((props, ref) => {
      const { href, as, ...rest } = props;
      return (
        <Link href={href} as={as}>
          <a ref={ref} {...rest} />
        </Link>
      );
    });

    useEffect(() => {
     
    }); 

    return (
    
    <Container>
 
      <Navbar style={{backgroundColor:'#7660FF', appearance:'subtle', textDecoration: 'none', 
              color:'black', fontSize:'1.15rem', height:'4rem'}}>
          <Navbar.Brand style={{textDecoration: 'none', color:'white', fontWeight: 'heavy'}}>
            DASHBOARD
          </Navbar.Brand>
          <Nav pullRight>
            <Nav.Item style={{textDecoration: 'none', padding: 'none', color:'white'}}
            as={MyLink} href="/notes/new">
              Notes
            </Nav.Item>
            <Nav.Item style={{textDecoration: 'none', color:'white'}} href="/flashcards/new">
              Flashcards
              </Nav.Item>
            <Dropdown title="Login" style={{textAlign: 'left', alignItems:'left', textDecoration: 'none', color:'white', fontSize:'2rem', height:'4rem', width: '7rem', fontFamily: 'sans-serif'}}> 
              <Dropdown.Item style={{alignItems: 'center', textAlign: 'center'}}>
                <Button color='#7660FF' onClick={() => handleOpen('xs')}>Login</Button>
              </Dropdown.Item>
              <Dropdown.Item> 
                <Button onClick={() => handleOpen('xs')} >New User</Button>
              </Dropdown.Item>
          </Dropdown>
            <Modal size={size} open={open} onClose={handleClose}>
              <Modal.Header>
                  <Modal.Title>Login/New User</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <Form.Group controlId="username">
                    <Form.ControlLabel>Username</Form.ControlLabel>
                    <Form.Control name="username" type="username" />
                  </Form.Group>
                  <Form.Group controlId="password">
                    <Form.ControlLabel>Password</Form.ControlLabel>
                    <Form.Control name="password" type="password" autoComplete="off" />
                  </Form.Group>
                </Form>
              </Modal.Body>
            <Modal.Footer>

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

        <Row style={{textAlign: 'center'}}>
        <Image src="/landingpicturenew.png" 
          alt="Landing Picture"
          width = "600"
          height = "400" />
        </Row>

    </Container>
  )
}

