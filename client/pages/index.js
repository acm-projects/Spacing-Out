import Head from 'next/head'
import Image from 'next/image'
import React from 'react';
import { Button, ButtonGroup } from 'reactstrap';
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    
    
    <div className={styles.container}>
      <Head>
        <title>Spacing Out</title>
      </Head>
      
      <main> 

      <div className={styles.buttonGroup}>
        <ButtonGroup color="#4B309C"> 
          <Button>Dashboard</Button>
          <Button>Notes</Button>
          <Button>Flashcards</Button>
        </ButtonGroup>
      </div>

        <div className={styles.title}>
          SPACING OUT
        </div>
    
        <div className={styles.description}>
          A spaced repitition and note taking software
        </div>

        <div className={styles.description}>
          for all your studying needs.
        </div>
        
        <div>
          
          <Image src="/images/landingpicturenew.jpg" alt="Landing Picture"
          width = "600"
          height = "400" 
          />

        </div>
      </main>
    </div>
  )
}
