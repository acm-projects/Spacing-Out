import Head from 'next/head';
import 'rsuite/dist/rsuite.min.css';
import Editor from '../../components/Editor/Editor';
import SideNavbar from '../../components/SideNavbar';
import React, { useEffect } from 'react';
import Container from 'rsuite/Container';
import Header from 'rsuite/Header';
import {useRouter} from 'next/router';
import axios from 'axios';

  const Page = () => {
    const router = useRouter()
    const {id} = router.query
    useEffect(() => {
      axios.get(`http://localhost:5000/notes/${id}`)
        .then(function (response) {
          // handle success
          console.log(response);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .then(function () {
          // always executed
        });

    });

    return (
      <div className="show-fake-browser sidebar-page">
        <Container>
           <SideNavbar/>
          <Container>
            <Header>
              <h2 style={{marginLeft: '4rem', marginTop: '2rem'}}>{id}</h2>
            </Header>
              <Editor
                onSave={(editorData, title, description) =>
                onSaveHandler(editorData, title, description)
                }
              />
          </Container>
        </Container>
      </div>
    );
  };

  export default Page