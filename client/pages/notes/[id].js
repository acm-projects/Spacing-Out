import Head from 'next/head';
import ReactDOM from 'react-dom'
import Editor from '../../components/Editor/Editor';
import React, { useEffect } from 'react';
import 'rsuite/dist/rsuite.min.css';
import { Sidenav, Nav, Dropdown } from 'rsuite';
import Container from 'rsuite/Container';
import Header from 'rsuite/Header';
import Content from 'rsuite/Content';
import { Navbar } from 'rsuite';
import Sidebar from 'rsuite/Sidebar';
import { Gear, Dashboard} from '@rsuite/icons';
import PageIcon from '@rsuite/icons/Page';
import {useRouter} from 'next/router';
import axios from 'axios';
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

  const Page = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
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
    const router = useRouter()
    const {id} = router.query
    useEffect(() => {
      axios.get(`http://localhost:5000/notes/${id}`)
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
    return (
      <div className="show-fake-browser sidebar-page">
        <Container>
          
          <Container>
            <Header>
              <h2 style={{marginLeft: '4rem', marginTop: '2rem'}}>{id}</h2>
            </Header>
              <Editor
                onSave={(editorData, title, description) =>
                onSaveHandler(editorData, title, description)
                }
              />
          </Container>
        </Container>
      </div>
    );
  };

  export default Page