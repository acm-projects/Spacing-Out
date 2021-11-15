import React, { Component } from 'react'
import 'rsuite/dist/rsuite.min.css';
import { FlashcardComponent } from 'react-flashcard'
import SideNavbar from '../../components/SideNavbar';
import Container from 'rsuite/Container';
import Header from 'rsuite/Header';
import {useRouter} from 'next/router';
import ButtonGroup from 'rsuite/ButtonGroup';
import Button from 'rsuite/Button';

const Page = () => {
  const router = useRouter()
  const {id} = router.query
    const cardData = [
        {
          front: {
            text: "living outside, often in a tent",
            image: "",
          },
          back: {
            text: "Camping",
          }
        },
        {
          front: {
            text: "wanting to sleep and eat ice cream all the time",
            image: "",
          },
          back: {
            text: "Depression",
          }
        }
      ];
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
            <Button color="red" appearance="primary">      </Button>
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