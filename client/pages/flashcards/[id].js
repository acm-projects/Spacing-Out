import React, { Component, useEffect, useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
import { FlashcardComponent } from 'react-flashcard'

const Page = () => {
  const router = useRouter();
  const { id } = router.query;
  
  let [cardData, setCardData] = useState([]);

  useEffect(() => {
    await axios.get(`http://localhost:5000/flashcardsets/${id}/flashcards`)
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
        setCardData(tempCardData);
    })
    .catch( (error) => {
      console.log(error);
    })
    .then( () => {

    });
  }, [id]);
  
  return (<FlashcardComponent dataSource={cardData} />);

};

export default Page; 