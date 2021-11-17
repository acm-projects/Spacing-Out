import React, { Component, useEffect, useState } from 'react'
import 'rsuite/dist/rsuite.min.css';
import SideNavbar from '../../components/SideNavbar';
import Container from 'rsuite/Container';
import Header from 'rsuite/Header';
import axios from 'axios';
import { useRouter } from 'next/router';
import { FlashcardComponent } from 'react-flashcard';
import ButtonGroup from 'rsuite/ButtonGroup';
import Button from 'rsuite/Button';
import PlusIcon from '@rsuite/icons/Plus';
import {Modal, Form} from 'rsuite';
import {
  Input,
} from 'rsuite';

const Page = () => {
  const Textarea = React.forwardRef((props, ref) => (
    <Input {...props} as="textarea" ref={ref} />
  ));
  const router = useRouter();
  const { id } = router.query;

  const [cardData, setCardData] = useState([]);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [title, setTitle] = React.useState(false);
  const [term, setTerm] = React.useState(false);
  const [def, setDef] = React.useState(false);
  const [image, setImage] = React.useState(false);
  const [flashcardIDs, setFlashcardIDs] = React.useState([]);
  const [flashcardPosition, setFlashcardPosition] = useState(1);

  
  const handleSubmit = async () => {
    try {
      console.log("term", term, "def", def);
      axios.post(`http://localhost:5000/flashcards/`, { "front": term, "back": def })
        .then((response) => {
          console.log(response.data._id);
          axios.patch(`http://localhost:5000/flashcardsets/${id}/`, { "flashcards": [response.data] })
            .then(() => {
                router.reload(window.location.pathname);
            })

        });
    }
    catch (err) {
      console.log(err);
    }
    handleClose();
       
  };
  const updateCardData = (response) => {
      let tempCardData = response.data.map((flashcard) => {
        return {
          front: {
            text: flashcard.front,
          },
          back: {
            text: flashcard.back,
          },
        };
      });
      console.log(tempCardData);
    setCardData(tempCardData);
    
    let tempFlashcardIDs = response.data.map((flashcard) => {
      return flashcard._id;
    });

    setFlashcardIDs(tempFlashcardIDs);
  }

  useEffect(() => {
    if(!id){
      return;
    }
    if (id == "due") {
      axios.get(`http://localhost:5000/flashcards/due`)
        .then((response) => {
          updateCardData(response);
        })

    }
    else {
      axios.get(`http://localhost:5000/flashcardsets/${id}`)
      .then((response) => {
        setTitle(response.data.name);
      });
    
    axios.get(`http://localhost:5000/flashcardsets/${id}/flashcards`)
      .then( (response) => {
        updateCardData(response);

    })
    .catch( (error) => {
      console.log(error);
    })
    .then( () => {

    });

    }
    
  }, [id]);

  const onClickHandler = (grade) => {
    if (!flashcardIDs[flashcardPosition -1]){
      return;
    }
    axios.patch(`http://localhost:5000/flashcards/practice/${flashcardIDs[flashcardPosition -1]}?grade=${grade}`)
    .then( (response) => {
       console.log(response);
    })
    .catch( (error) => {
      console.log(error);
    })
    .then( () => {

    });
    };

    return (
    <div className="show-fake-browser sidebar-page">
    <Container>
      <SideNavbar/>
      <Container>
        <Header>
          <h2 style={{marginLeft: '4rem', marginTop: '2rem'}}>{title}</h2>
        </Header>
        <FlashcardComponent dataSource={cardData} onChange={(step,size) => setFlashcardPosition(step)} />
        <Container>
        <Button style={{fontSize: '1.25rem', padding: '1.2rem'}} onClick={handleOpen}> {<PlusIcon />} Add Card</Button> 
        <Modal open={open} onClose={handleClose} size="lg">
          <Modal.Header>
              <Modal.Title>Add Flashcard</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form fluid>
              <Form.Group controlId="input">
                <Form.ControlLabel>Term</Form.ControlLabel>
                <Form.Control name="input" onChange={(e)=>setTerm(e)} />
              </Form.Group>
              <Form.Group controlId="textarea-9">
                  <Form.ControlLabel>Definition</Form.ControlLabel>
                  <Form.Control rows={5} name="textarea"  onChange={(e)=>setDef(e)} />
              </Form.Group>
              <Form.Group controlId="textarea-9">
                <Form.ControlLabel>Image URL</Form.ControlLabel>
                <Form.Control rows={5} name="textarea"  onChange={(e)=>setImage(e)} />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={handleSubmit} appearance="primary">
            Confirm
            </Button>
            <Button onClick={handleClose} appearance="subtle">
            Cancel
            </Button>
          </Modal.Footer>
        </Modal>
        
        <ButtonGroup size="lg"  style={{ marginTop: 24, padding: 24, height: 12 }} justified>
          <Button onClick = {() => onClickHandler(1) } color="violet" appearance="primary">      </Button>
          <Button onClick = {() => onClickHandler(2) }color="red" appearance="primary">     </Button>
          <Button onClick = {() => onClickHandler(3) }color="orange" appearance="primary">      </Button>
          <Button onClick = {() => onClickHandler(4) }color="yellow" appearance="primary">      </Button>
          <Button onClick = {() => onClickHandler(5) }color="green" appearance="primary">      </Button>
        </ButtonGroup>
        </Container>
      </Container>
    </Container>
    </div>
    );
};

export default Page; 