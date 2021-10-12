import Head from 'next/head';
import Editor from '../../components/Editor/Editor';

const CreateNote = (props) => {
  const onSaveHandler = async (blogData, title, description) => {
    const toSaveData = {
      title,
      blogData,
      description,
    };

    console.log(toSaveData);
  };

  return (
    <div style={{ width: '80%', margin: '0 auto' }}>
      <Head>
        <title>New Note</title>
      </Head>
      <h1>Title</h1>
      <Editor
        onSave={(editorData, title, description) =>
          onSaveHandler(editorData, title, description)
        }
      />
    </div>
  );
};

export default CreateNote;