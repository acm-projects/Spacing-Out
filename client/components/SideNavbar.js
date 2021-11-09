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
import {
    Form,
    Button,
    ButtonGroup,
    ButtonToolbar,
    CheckboxGroup,
    RadioGroup,
    Checkbox,
    Radio,
    CheckPicker,
    InputGroup,
    InputNumber,
    Toggle,
    Panel,
    Modal,
    SelectPicker,
    Slider,
    DatePicker,
    DateRangePicker,
    Input,
    TagPicker,
    InputPicker,
    Cascader,
    MultiCascader,
    Message,
    Rate,
    Uploader
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
            <Nav.Item onClick={onChange} style={{ width: 56, textAlign: 'center' }}>
            </Nav.Item>
          </Nav>
        </Navbar.Body>
      </Navbar>
    );
  };
  const Textarea = React.forwardRef((props, ref) => <Input {...props} as="textarea" ref={ref} />);

const SideNavbar = (props) => {
  useEffect(() => {
    axios.get(`http://localhost:5000/notebooks`)
      .then(function (response) {
        // handle success
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });

  });
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [openCard, setOpenCard] = React.useState(false);
    const handleOpenCard= () => setOpenCard(true); 
    const handleCloseCard= () => setOpenCard(false);

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
        "React Suite is a set of react component libraries for enterprise system products. Built by HYPERS front-end team and UX team, mainly serving company's big data products. After three major revisions, a large number of components and rich functionality have been accumulated.",
      dateRangePicker: [new Date(), new Date()],
    };
return(
<Sidebar
    style={{ display: 'flex', flexDirection: 'column', }}
    width={expand ? 260 : 56}
    collapsible
  
    >
    <Sidenav.Header>
        <div style={headerStyles}>
        
        <span style={{ marginLeft: 12 }}> Welcome, Shreya</span>
        </div>
    </Sidenav.Header>
    <Sidenav expanded={expand} defaultOpenKeys={['4']} appearance="subtle">
        <Sidenav.Body>
        <Nav>
            <Nav.Item eventKey="1" icon={<Dashboard />} style={{textDecoration: 'none',}}>
            Dashboard
            </Nav.Item>
            <Dropdown
            eventKey="2"
            trigger="hover"
            title="Flashcards"
            placement="rightStart"
            icon= {<WaitIcon/>}
            >
            <Dropdown.Item eventKey="2-1">History</Dropdown.Item>
            <Dropdown.Item eventKey="2-2"> 
                <Button size="lg" onClick={handleOpenCard}>
                Add Flashcard
                </Button>
            <Modal open={openCard} onClose={handleCloseCard} size="md">
                    <Modal.Header>
                        <Modal.Title>Add new Flashcard </Modal.Title>
                    </Modal.Header>
                <Modal.Body>
                        <Form fluid onChange={setFormValue} formValue={formValue}>
                        <Form.Group controlId="checkbox">
                            <Form.ControlLabel>Select Flashcard Set:</Form.ControlLabel>
                            <Form.Control name="checkbox" accepter={CheckboxGroup} inline>
                            <Checkbox value="History">History</Checkbox>
                            </Form.Control>
                          </Form.Group>
                        <Form.Group controlId="input">
                            <Form.ControlLabel>Term</Form.ControlLabel>
                            <Form.Control name="input" />
                        </Form.Group>
                        <Form.Group controlId="textarea-9">
                            <Form.ControlLabel>Definition</Form.ControlLabel>
                            <Form.Control rows={5} name="textarea" accepter={Textarea} />
                        </Form.Group>
                        </Form>
                </Modal.Body>
                <Modal.Footer>
                        <Button onClick={handleCloseCard} appearance="primary">
                        Confirm
                        </Button>
                        <Button onClick={handleCloseCard} appearance="subtle">
                        Cancel
                        </Button>
                </Modal.Footer>
              </Modal>
            </Dropdown.Item>
            <Dropdown.Item eventKey="2-3">
            <Button size ="lg" onClick={handleOpen}>
                  New Flashcard Set
                </Button>
                <Modal open={open} onClose={handleClose} size="md">
                    <Modal.Header>
                        <Modal.Title>Create New Set</Modal.Title>
                    </Modal.Header>
                <Modal.Body>
                        <Form fluid onChange={setFormValue} formValue={formValue}>
                        <Form.Group controlId="name-9">
                            <Form.ControlLabel>Title of Set</Form.ControlLabel>
                            <Form.Control name="name" />
                            <Form.HelpText>Required</Form.HelpText>
                        </Form.Group>
                        <Form.Group controlId="checkbox">
                            <Form.ControlLabel>Select Notebook:</Form.ControlLabel>
                            <Form.Control name="checkbox" accepter={CheckboxGroup} inline>
                            <Checkbox value="Chemistry">Chemistry</Checkbox>
                            <Checkbox value="Math">Math</Checkbox>
                            <Checkbox value="Economics">Economics</Checkbox>
                            <Checkbox value="Art">Art</Checkbox>
                            <Checkbox value="English">English</Checkbox>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="dateRangePicker">
                        <Form.ControlLabel>Select Spaced Repition Start to End Date:</Form.ControlLabel>
                        <Form.Control name="dateRangePicker" accepter={DateRangePicker} />
                        </Form.Group>
                        </Form>
                </Modal.Body>
                <Modal.Footer>
                        <Button onClick={handleClose} appearance="primary">
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
            icon= {<StorageIcon/>}
            >
            
            <Dropdown.Item eventKey="3-1">Chemistry</Dropdown.Item>
            <Dropdown.Item eventKey="3-2">Math</Dropdown.Item>
            <Dropdown.Item eventKey="3-3">Economics</Dropdown.Item>
            <Dropdown.Item eventKey="3-4">Art</Dropdown.Item>
            <Dropdown.Item eventKey="3-5">English</Dropdown.Item>
            </Dropdown>
            {/* <Nav.Item eventKey="4">
                <Button size="lg">
                New Note
                </Button>
            </Nav.Item> */}
            {/* <Nav.Item eventKey="5">
                {/* <Button size ="lg" onClick={handleOpen}>
                  New Flashcard Set
                </Button>
                <Modal open={open} onClose={handleClose} size="md">
                    <Modal.Header>
                        <Modal.Title>Create New Set</Modal.Title>
                    </Modal.Header>
                <Modal.Body>
                        <Form fluid onChange={setFormValue} formValue={formValue}>
                        <Form.Group controlId="name-9">
                            <Form.ControlLabel>Title of Set</Form.ControlLabel>
                            <Form.Control name="name" />
                            <Form.HelpText>Required</Form.HelpText>
                        </Form.Group>
                        <Form.Group controlId="checkbox">
                            <Form.ControlLabel>Select Notebook:</Form.ControlLabel>
                            <Form.Control name="checkbox" accepter={CheckboxGroup} inline>
                            <Checkbox value="Chemistry">Chemistry</Checkbox>
                            <Checkbox value="Math">Math</Checkbox>
                            <Checkbox value="Economics">Economics</Checkbox>
                            <Checkbox value="Art">Art</Checkbox>
                            <Checkbox value="English">English</Checkbox>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="dateRangePicker">
                        <Form.ControlLabel>Select Spaced Repition Start to End Date:</Form.ControlLabel>
                        <Form.Control name="dateRangePicker" accepter={DateRangePicker} />
                        </Form.Group>
                        </Form>
                </Modal.Body>
                <Modal.Footer>
                        <Button onClick={handleClose} appearance="primary">
                        Confirm
                        </Button>
                        <Button onClick={handleClose} appearance="subtle">
                        Cancel
                        </Button>
                </Modal.Footer>
                </Modal>}
                </Nav.Item> */}
    </Nav>
    </Sidenav.Body>
    </Sidenav>
    <NavToggle expand={expand} onChange={() => setExpand(!expand)} />
    </Sidebar>
);
};
export default SideNavbar; 