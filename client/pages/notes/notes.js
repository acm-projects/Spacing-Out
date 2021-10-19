import Head from 'next/head';
import ReactDOM from 'react-dom'
import Editor from '../../components/Editor/Editor';
import React from 'react';
import 'rsuite/dist/rsuite.min.css';
import { Sidenav, Nav, Dropdown } from 'rsuite';
import Container from 'rsuite/Container';
import Header from 'rsuite/Header';
import Content from 'rsuite/Content';
import { Navbar } from 'rsuite';
import Sidebar from 'rsuite/Sidebar';
import { Gear, Dashboard} from '@rsuite/icons';



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
  
  const Page = () => {
    const [expand, setExpand] = React.useState(true);
    return (
      <div className="show-fake-browser sidebar-page">
        <Container>
          <Sidebar
            style={{ display: 'flex', flexDirection: 'column' }}
            width={expand ? 260 : 56}
            collapsible
          >
            <Sidenav.Header>
              <div style={headerStyles}>
               
                <span style={{ marginLeft: 12 }}> Welcome, Shreya</span>
              </div>
            </Sidenav.Header>
            <Sidenav expanded={expand} defaultOpenKeys={['3']} appearance="subtle">
              <Sidenav.Body>
                <Nav>
                    <Nav.Item eventKey="1" active icon={<Dashboard />}>
                    Dashboard
                  </Nav.Item>
                  <Nav.Item eventKey="2">
                    Flashcards
                  </Nav.Item>
                  <Dropdown
                    eventKey="3"
                    trigger="hover"
                    title="Notebooks"
                    placement="rightStart"
                  >
                    <Dropdown.Item eventKey="3-1">Chemistry</Dropdown.Item>
                    <Dropdown.Item eventKey="3-2">Math</Dropdown.Item>
                    <Dropdown.Item eventKey="3-3">Economics</Dropdown.Item>
                    <Dropdown.Item eventKey="3-4">Art</Dropdown.Item>
                    <Dropdown.Item eventKey="3-5">English</Dropdown.Item>
                  </Dropdown>
                </Nav>
              </Sidenav.Body>
            </Sidenav>
            <NavToggle expand={expand} onChange={() => setExpand(!expand)} />
          </Sidebar>
  
          <Container>
            <Header>
              <h2 style={{marginLeft: '4rem', marginTop: '2rem'}}>Title</h2>
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