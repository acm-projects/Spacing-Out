import 'rsuite/dist/rsuite.min.css';
import { Sidenav, Nav, Dropdown } from 'rsuite';
import axios from 'axios';
import { Navbar } from 'rsuite';
import Sidebar from 'rsuite/Sidebar';
import React, { useEffect } from 'react';
import Header from 'rsuite/Header';
import { Gear, Dashboard} from '@rsuite/icons';
import StorageIcon from '@rsuite/icons/Storage';
import PageIcon from '@rsuite/icons/Page';
import WaitIcon from '@rsuite/icons/Wait';
import PlusIcon from '@rsuite/icons/Plus';

import Link from "next/link";
import {
    Form,
    Button,
    Modal,
    DateRangePicker,
    Input,
  } from 'rsuite';
  
  const headerStyles = {
      padding: 18,
      fontSize: 16,
      height: 56,
      background: '#333138',
      color: ' #fff',
      whiteSpace: 'nowrap',
      overflow: 'hidden'
    };
    
    const iconStyles = {
      width: 56,
      height: 56,
      padding: 18,
      lineHeight: '56px',
      textAlign: 'center'
    };
    

const NavToggle = ({ expand, onChange }) => {
    return (
      <Navbar appearance="subtle" className="nav-toggle">
        <Navbar.Body>
          <Nav>
            <Dropdown
              placement="topStart"
              trigger="click"
              icon={<Gear />}
              renderTitle={children => {
                return <Cog />;
              }}
            >
              <Dropdown.Item>Help</Dropdown.Item>
              <Dropdown.Item>Settings</Dropdown.Item>
              <Dropdown.Item>Sign out</Dropdown.Item>
            </Dropdown>
          </Nav>
  
          <Nav pullRight>

          </Nav>
        </Navbar.Body>
      </Navbar>
    );
  };
  const Textarea = React.forwardRef((props, ref) => <Input {...props} as="textarea" ref={ref} />);

const SideNavbar = (props) => {
  useEffect(() => {

  });
  const MyLink = React.forwardRef((props, ref) => {
    const { href, as, ...rest } = props;
    return (
      <Link href={href} as={as}>
        <a ref={ref} {...rest} />
      </Link>
    );
  });
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [openNewNoteB, setNewNoteB] = React.useState(false);
    const handleOpenNewNoteB= () => setNewNoteB(true); 
    const handleCloseNewNoteB= () => setNewNoteB(false);
    const [newNoteBTitle, setNewNoteBTitle]= React.useState(false);
    const handleSubmitNewNoteB = () =>{
      console.log({
        newNoteBTitle,

      })
    };

    const [title, setTitle] = React.useState(false);
    const [firstTerm, setFirstTerm] = React.useState(false);
    const [firstDef, setFirstDef] = React.useState(false);
    const handleSubmit = () => {
      console.log({
        title, 
        firstTerm, 
        firstDef
      })
    };


    const [expand, setExpand] = React.useState(true);
    const [formValue, setFormValue] = React.useState({
      name: '',
      email: '',
      password: '',
      textarea: ''
    });
    const defaultFormValue = {
      input: '',
      checkbox: [],
      dateRangePicker: [],
      checkPicker: [],
      textarea: '',
    };    
    const initFormValue = {
      input:
        "",
      dateRangePicker: [new Date(), new Date()],
    };

    //post request of form values from create new flashcard set

return (
  <Sidebar
    style={{ display: "flex", flexDirection: "column" }}
    width={expand ? 260 : 56}
    collapsible
  >
    <Sidenav.Header>
      <div style={headerStyles}>
        <span style={{ marginLeft: 12 }}> Welcome, Shreya</span>
      </div>
    </Sidenav.Header>
    <Sidenav expanded={expand} defaultOpenKeys={["4"]} appearance="subtle">
      <Sidenav.Body>
        <Nav>
          <Nav.Item
            eventKey="1"
            icon={<Dashboard />}
            style={{ textDecoration: "none" }}
            as={MyLink}
            href="/"
          >
            Dashboard
          </Nav.Item>
          {/* <Nav.Item eventKey="2" icon= {<WaitIcon/>} style={{textDecoration: 'none'}} >
            Flashcards
            </Nav.Item> */}
          <Dropdown
            eventKey="2"
            trigger="hover"
            title="Flashcards"
            placement="rightStart"
            icon={<WaitIcon />}
          >
            <Dropdown.Item
              eventKey="3-1"
              href="/flashcards/619466895a141360c87e4c2d"
            >
              Chemistry Test 1
            </Dropdown.Item>
            <Dropdown.Item eventKey="3-2">Math Test 1</Dropdown.Item>
            <Dropdown.Item eventKey="3-7">
              <Button size="lg" onClick={handleOpen}>
                New Flashcard Set
              </Button>
              <Modal open={open} onClose={handleClose} size="lg">
                <Modal.Header>
                  <Modal.Title>Create New Set</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form fluid>
                    <Form.Group controlId="name-9">
                      <Form.ControlLabel>Title of Set</Form.ControlLabel>
                      <Form.Control onChange={(e) => setTitle(e)} name="name" />
                      <Form.HelpText>Required</Form.HelpText>
                    </Form.Group>
                    <Form.Group controlId="dateRangePicker">
                      <Form.ControlLabel>
                        Select Spaced Repition Start to End Date:
                      </Form.ControlLabel>
                      <Form.Control
                        name="dateRangePicker"
                        accepter={DateRangePicker}
                      />
                    </Form.Group>

                    <Form.Group controlId="input">
                      <Form.ControlLabel>First Term</Form.ControlLabel>
                      <Form.Control
                        name="input"
                        onChange={(e) => setFirstTerm(e)}
                      />
                    </Form.Group>
                    <Form.Group controlId="textarea-9">
                      <Form.ControlLabel>Definition</Form.ControlLabel>
                      <Form.Control
                        rows={5}
                        name="textarea"
                        accepter={Textarea}
                        onChange={(e) => setFirstDef(e)}
                      />
                    </Form.Group>
                  </Form>
                </Modal.Body>
                <Modal.Footer>
                  <Button
                    onClick={(handleSubmit, handleClose)}
                    appearance="primary"
                  >
                    Confirm
                  </Button>
                  <Button onClick={handleClose} appearance="subtle">
                    Cancel
                  </Button>
                </Modal.Footer>
              </Modal>
            </Dropdown.Item>
          </Dropdown>
          <Dropdown
            eventKey="3"
            trigger="hover"
            title="Notebooks"
            placement="rightStart"
            icon={<StorageIcon />}
          >
            <Dropdown.Item eventKey="3-1">Chemistry</Dropdown.Item>
            <Dropdown.Item eventKey="3-2">Math</Dropdown.Item>
            <Dropdown.Item eventKey="3-3">Economics</Dropdown.Item>
            <Dropdown.Item eventKey="3-4">Art</Dropdown.Item>
            <Dropdown.Item eventKey="3-5">English</Dropdown.Item>
            <Dropdown.Item eventKey="3-6">
              <Button> {<PlusIcon />} New Note</Button>
            </Dropdown.Item>
            <Dropdown.Item eventKey="3-7">
              <Button size="lg" onClick={handleOpenNewNoteB}>
                New Notebook
              </Button>
              <Modal
                open={openNewNoteB}
                onClose={handleCloseNewNoteB}
                size="sm"
              >
                <Modal.Header>
                  <Modal.Title>Create New Notebook</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form fluid>
                    <Form.Group>
                      <Form.ControlLabel>Notebook Name</Form.ControlLabel>
                      <Form.Control
                        onChange={(e) => setNewNoteB(e)}
                        name="name"
                      />
                      <Form.HelpText>Required</Form.HelpText>
                    </Form.Group>
                  </Form>
                </Modal.Body>
                <Modal.Footer>
                  <Button onClick={handleSubmitNewNoteB} appearance="primary">
                    Confirm
                  </Button>
                  <Button onClick={handleCloseNewNoteB} appearance="subtle">
                    Cancel
                  </Button>
                </Modal.Footer>
              </Modal>
            </Dropdown.Item>
          </Dropdown>
        </Nav>
      </Sidenav.Body>
    </Sidenav>
    <NavToggle expand={expand} onChange={() => setExpand(!expand)} />
  </Sidebar>
);
};
export default SideNavbar; 