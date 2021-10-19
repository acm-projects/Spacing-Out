import Head from 'next/head';
import Editor from '../../components/Editor/Editor';
import React from 'react';
import 'rsuite/dist/rsuite.min.css';
import { Sidenav, Nav, Dropdown } from 'rsuite';


const CreateNote = (props) => {
  const onSaveHandler = async (blogData, title, description) => {
    const toSaveData = {
      title,
      blogData,
      description,
    };

    console.log(toSaveData);
  };

  return (
    <div style={{ width: '80%', margin: '0 auto' }}>
      <Head>
        <title>New Note</title>
      </Head>
      <div style={{
      display: 'block', width: 700, paddingLeft: 30
      }}>
      <h4>React Suite Sidenav Component</h4>
      <Sidenav defaultOpenKeys={['3', '4']} activeKey="1">
        <Sidenav.Body>
          <Nav>
            <Nav.Item eventKey="1">Dashboard</Nav.Item>
            <Nav.Item eventKey="2">Profile</Nav.Item>
            <Nav.Item eventKey="3">Settings</Nav.Item>
            <Dropdown eventKey="4" title="Advanced">
              <Dropdown.Item eventKey="4-1">Privacy</Dropdown.Item>
              <Dropdown.Item eventKey="4-2">About</Dropdown.Item>
              <Dropdown.Item eventKey="4-3">Terms</Dropdown.Item>
            </Dropdown>
          </Nav>
        </Sidenav.Body>
      </Sidenav>
      </div>

      <h1>Title</h1>
      <Editor
        onSave={(editorData, title, description) =>
          onSaveHandler(editorData, title, description)
        }
      />
    </div>
  );
};

export default CreateNote;