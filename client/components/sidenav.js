import React, { useState, useEffect } from "react";
import Sidenav from 'rsuite/Sidenav';
import Nav from 'rsuite/Nav';
import Toggle from 'rsuite/Toggle';

const SideNav = () => {
  const [expanded, setExpanded] = useState(true);
  const [activeKey, setActiveKey] = useState("1");

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  const handleSelect = (eventKey) => {
    setActiveKey(eventKey);
  };

  return (
    <div style={{ width: 250 }}>
      <Toggle onChange={handleToggle} checked={expanded} />
      <hr />
      <Sidenav
        expanded={expanded}
        activeKey={activeKey}
        onSelect={handleSelect}
      >
        <Sidenav.Body>
          <Nav>
            <Nav.Item>
              Dashboard
            </Nav.Item>
            <Nav.Item>
              User Group
            </Nav.Item>
          </Nav>
        </Sidenav.Body>
      </Sidenav>
    </div>
  );
};

export default SideNav;
