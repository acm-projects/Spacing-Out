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

const Page = () => {
  const router = useRouter();
  const { id } = router.query;
  
  let [cardData, setCardData] = useState([]);
  let [flashcardIDs, getFlashcardIDs] = useState([]);
  let [flashcardPosition, getFlashcardPosition] = useState(1);



  useEffect(() => {
    if(!id){
      return;
    }
    axios.get(`http://localhost:5000/flashcardsets/${id}/flashcards`)
    .then( (response) => {
       let tempCardData = response.data.map( (flashcard) => {
          return (
            {
              front: {
                text: flashcard.front
              },
              back: {
                text: flashcard.back
              }
            }
          );
        });
      let tempFlashcardIDs = response.data.map((flashcard) => {
        return flashcard._id;
      })
          
        console.log(tempCardData);
        setCardData(tempCardData);
        getFlashcardIDs(tempFlashcardIDs);
    })
    .catch( (error) => {
      console.log(error);
    })
    .then( () => {

    });
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
              <h2 style={{marginLeft: '4rem', marginTop: '2rem'}}>{id}</h2>
            </Header>
        <FlashcardComponent dataSource={cardData} onChange={(step,size) => getFlashcardPosition(step)} />
        <Container>
        <ButtonGroup size="lg"  style={{ marginTop: 24, padding: 24, height: 12 }} justified>
            <Button onClick = {() => onClickHandler(1) } color="red" appearance="primary">      </Button>
            <Button onClick = {() => onClickHandler(2) }color="orange" appearance="primary">     </Button>
            <Button onClick = {() => onClickHandler(3) }color="yellow" appearance="primary">      </Button>
            <Button onClick = {() => onClickHandler(4) }color="cyan" appearance="primary">      </Button>
            <Button onClick = {() => onClickHandler(5) }color="green" appearance="primary">      </Button>
        </ButtonGroup>
        </Container>
      </Container>
    </Container>
    </div>
    );
};

export default Page; 