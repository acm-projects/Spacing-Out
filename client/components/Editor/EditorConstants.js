//import EditorJS from '@editorjs/';
import Embed from '@editorjs/embed';
import Header from '@editorjs/header';
import List from '@editorjs/list';
import Marker from '@editorjs/marker';
import Table from '@editorjs/table';
import Checklist from '@editorjs/checklist';
//import Code from '@editorjs/code';


const constants = {
  embed:{
    class: Embed, 
    config:{
      services: {
        youtube: true, 
        coub: true
      }
    },
  },
  list: List,
  marker: Marker,
  header: Header,
  table: Table,
  checklist: Checklist, 
  //code: Code,

};

export default constants;