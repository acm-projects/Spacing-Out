import { useEffect, useState } from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
const EditorJs = dynamic(() => import('react-editor-js'), { ssr: false });

let editorInstance;

const Editor = (props) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [editorTools, setEditorTools] = useState();

  const onSaveHandler = async (editorInstance) => {
    try {
      const data = await editorInstance.save();
      if (!title || title === '')
        throw new Error('Title cannot be empty. Please enter title');
      if (!data.blocks[0])
        throw new Error('Note cannot be empty. Please enter some data');
      props.onSave(data, title, description);
    } catch (err) {
      console.log(err);
    }
  };

  let editorComponent;
  if (!editorTools) editorComponent = 'Loading...';
  else {
    editorComponent = (
      <EditorJs
        instanceRef={(instance) => (editorInstance = instance)}
        tools={editorTools}
        placeholder={`Start typing here:`}
      />
    );
  }

  useEffect(() => {
    const importConstants = async () => {
      const tools = (await import('../../components/Editor/EditorConstants'))
        .default;
      setEditorTools(tools);
    };

    importConstants();
  }, []);



  return (
    <div style={{ display: 'flex', flexDirection: 'column'}}>
      <Head>
        <title>Create Note</title>
        <meta name='description' content='' />
      </Head>


      {editorComponent}

      <div style={{ textAlign: 'center' }}>
      </div>
    </div>
  );
};

export default Editor;