import { Sidenav, Nav, Dropdown } from 'rsuite';

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
            <Sidenav expanded={expand} defaultOpenKeys={['4']} appearance="subtle">
              <Sidenav.Body>
                <Nav>
                   <Nav.Item eventKey="1" active icon={<Dashboard />} style={{textDecoration: 'none'}}>
                    Dashboard
                  </Nav.Item>
                  <Nav.Item eventKey="2" style={{textDecoration: 'none'}}>
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
                    <Dropdown 
                    eventKey="4"
                    trigger="hover"
                    title="Create New"
                    placement="rightStart"
                    active icon={<PageIcon />}> 
                    <Dropdown.Item eventKey="4-1">
                      <Button size="lg">
                        New Note
                      </Button>
                    </Dropdown.Item>
                    <Dropdown.Item eventKey="4-2"> 
                      <Button size="lg" onClick={handleOpen}>
                        New Flashcard Set
                      </Button>
                      <Modal open={open} onClose={handleClose} size="xs">
        <Modal.Header>
          <Modal.Title>Create New Flashcard</Modal.Title>
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
                </Nav>
              </Sidenav.Body>
            </Sidenav>
            <NavToggle expand={expand} onChange={() => setExpand(!expand)} />
          </Sidebar>