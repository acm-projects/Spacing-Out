import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React, { Component } from 'react'
import ButtonGroup from 'rsuite/ButtonGroup';
import Button from 'rsuite/Button';
import Container from 'rsuite/Container';
import Grid from 'rsuite/Grid';
import Row from 'rsuite/Row';
import Col from 'rsuite/Col';
export default function Home() {
  return (
    // <div className={styles.container}>
    //   <Head>
    //     <title>Home</title>
    //   </Head>

    //   <main className={styles.main}>
    //     <h1 className={styles.title}>
    //         Home
    //     </h1>

    //     <p className={styles.description}>
    //       Get started by navigating to
    //       <code className={styles.code}>notes/notes</code>
    //     </p>

        
    //     <div className={styles.grid}>
    //     </div>
    //   </main>
    // </div>
        
    <Container>
      <ButtonGroup>
      </ButtonGroup>
      <Grid fluid>
        <Row style={{padding: 48, float: 'left', fontFamily: 'Helvetica', letterSpacing: 4}}> 
        <Col xs={12} xsPush={12}>
          <h1 className={styles.title}>
            SPACE{'\n\n'}
          </h1>
          <h1 className={styles.title} style={{float: 'left'}}>
            IT
          </h1>
          <h1 className={styles.title}>
            OUT
          </h1>
          </Col>
          <Col xs={12} xsPush={12}>

          </Col>
        </Row>
        <Row>
        </Row>
      </Grid>

    </Container>
    // <div className={styles.container}>
    //   <Head>
    //     <title>Spacing Out</title>
    //   </Head>
      
    //   <main> 

    //     <div className={styles.buttonGroup}>
    //       <Button>Dashboard</Button>
    //       <Button>Notes</Button>
    //       <Button>Flashcards</Button>
    //   </div>

    //     <div className={styles.title}>
    //       SPACING OUT
    //     </div>
    
    //     <div className={styles.description}>
    //       A spaced repitition and note taking software
    //     </div>

    //     <div className={styles.description}>
    //       for all your studying needs.
    //     </div>
        
    //     <div>
          
    //       <Image src="/images/landingPicture.jpg" alt="Landing Picture"
    //       width = "800"
    //       height = "400" />

    //     </div>
    //   </main>
    // </div>
  )
}
