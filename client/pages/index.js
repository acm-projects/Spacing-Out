import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React, { Component } from 'react'

const cardData = [
  {
    front: {
      text: "living outside, often in a tent",
      image: "https://o.quizlet.com/RWRdgDus.uuqNDUrJ0ernA.jpg",
    },
    back: {
      text: "Camping",
    }
  }
];

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
            Home
        </h1>

        <p className={styles.description}>
          Get started by navigating to
          <code className={styles.code}>notes/notes</code>
        </p>

        
        <div className={styles.grid}>
        </div>
      </main>
    </div>
  )
}
