import { useEffect, useState, Header } from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import axios from 'axios';
const EditorJs = dynamic(() => import('react-editor-js'), { ssr: false });


const Editor = (props) => {
  const [title, setTitle] = useState('New Note');
  const [description, setDescription] = useState('');
  const [editorTools, setEditorTools] = useState();
  const [noteData, setNoteData] = useState();
  const [editorInstance, setEditorInstance] = useState();

  const onSaveHandler = async (editorInstance) => {
    try {
      const data = await editorInstance.saver.save();
      
      if (!title || title === '')
        throw new Error('Title cannot be empty. Please enter title');
      // if (!data.blocks[0])
      //   throw new Error('Note cannot be empty. Please enter some data');
      
      await axios
        .patch(`http://localhost:5000/notes/${props.id}`, data)
        .then(function (response) {
          // handle success
          console.log(response);
        });
      
    } catch (err) {
      console.log(err);
    }
  };

  let editorComponent;
  if (!editorTools || !noteData) editorComponent = 'Loading...';
  else {
    console.log("note data", noteData);
    editorComponent = (
      <EditorJs
        instanceRef={(instance) => setEditorInstance(instance)}
        tools={editorTools}
        onChange={onSaveHandler}
        data={noteData.data}
        placeholder={`Start typing here...`}
      />
    );
  }

  let headerTitle;

  useEffect(() => {
    const importConstants = async () => {
      const tools = (await import('../../components/Editor/EditorConstants'))
        .default;
      setEditorTools(tools);
    };
    const getNoteData = async () => {
      try {
        console.log("props id", props.id);
        let data = await axios.get(`http://localhost:5000/notes/${props.id}`);
        setNoteData(data);
        headerTitle = data.title;
      } catch (err) {
        console.log(err);
      }
    };

    importConstants();
    getNoteData();
  }, []);



  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Head>
        <title>Create Note</title>
        <meta name="description" content="" />
      </Head>
      {/* <Header>
        <h2 style={{ marginLeft: "4rem", marginTop: "2rem" }}></h2>
      </Header> */}

      {editorComponent}

      <div style={{ textAlign: "center" }}></div>
    </div>
  );
};

export default Editor;