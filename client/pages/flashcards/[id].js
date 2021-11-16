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
       let tempFlashcardIDs = response.data.map( (flashcard) => {
          return (
            {
              _id: {
                text: flashcard._id
              }
            }
          );

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
        // Get patch function for flashcard in flashcard set
        // Get flashcard by tracking the index of flashcard we are on
        useEffect(() => {
          if(!fCardId){
            return;
          }
          axios.patch(`http://localhost:3000/flashcards/practice/${fCardId}?grade=${grade}`)
          .then( (response) => {
            let flashcardData = response.data.map( (flashcard) => {
              return (
                {
                  _id: {
                    text: flashcard._id
                  }
                }
              );
             console.log(fCardId);
          })
          .catch( (error) => {
            console.log(error);
          })
          .then( () => {
      
          });
        }, [fCardId]);
    }

    return (
    <div className="show-fake-browser sidebar-page">
    <Container>
      <SideNavbar/>
      <Container>
            <Header>
              <h2 style={{marginLeft: '4rem', marginTop: '2rem'}}>{id}</h2>
            </Header>
        <FlashcardComponent dataSource={cardData} />
        <Container>
        <ButtonGroup size="lg"  style={{ marginTop: 24, padding: 24, height: 12 }} justified>
            <Button onClick = {() => console.log("Ryan Dimararararan") } color="red" appearance="primary">      </Button>
            <Button color="orange" appearance="primary">     </Button>
            <Button color="yellow" appearance="primary">      </Button>
            <Button color="cyan" appearance="primary">      </Button>
            <Button color="green" appearance="primary">      </Button>
        </ButtonGroup>
        </Container>
      </Container>
    </Container>
    </div>
    );
};

export default Page; 