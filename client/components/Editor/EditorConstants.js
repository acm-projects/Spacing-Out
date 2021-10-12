import Embed from '@editorjs/embed';
import Header from '@editorjs/header';
import List from '@editorjs/list';
import Marker from '@editorjs/marker';
import ImageTool from '@editorjs/image';
import Table from '@editorjs/table';
import Checklist from '@editorjs/checklist';
//import LinkTool from 'editorjs/link';


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
  image: ImageTool,
  table: Table,
  checklist: Checklist, 
};

export default constants;