import Head from 'next/head';
import 'rsuite/dist/rsuite.min.css';
import Editor from '../../components/Editor/Editor';
import SideNavbar from '../../components/SideNavbar';
import React, { useEffect, useState } from 'react';
import Container from 'rsuite/Container';
import Header from 'rsuite/Header';
import {useRouter} from 'next/router';
import axios from 'axios';

  const Page = () => {
    const router = useRouter()
    const { id } = router.query

    return (
      <div className="show-fake-browser sidebar-page">
        <Container>
           <SideNavbar/>
          <Container>
            <Header>
              <h2 style={{marginLeft: '4rem', marginTop: '2rem'}}></h2>
            </Header>
              {id
                ? <Editor id={id} />
                : ""
              }
          </Container>
        </Container>
      </div>
    );
  };

  export default Page