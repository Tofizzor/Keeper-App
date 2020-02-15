import React, {useState} from "react";
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';
import AddIcon from '@material-ui/icons/Add';

function CreateArea(props){
const [note, setNote] = useState({title: "", content: ""})
const [appeared, setAppeared] = useState(false);

function handleChange(event){
    const {name, value} = event.target;
    setNote(prevValue => ({...prevValue, [name]: value}))
}

function addNote(event){
    event.preventDefault();
    props.addNote(note);
    setNote({title: "", content: ""});
}

    return (
        <div>
          <form className="create-note">
          {appeared && 
          <input name="title" onChange={handleChange} placeholder="Title" value={note.title}/>
          }
            <textarea name="content" onChange={handleChange} rows={appeared ? "3" : "1"} onClick={() => setAppeared(true)} placeholder="Add your note..." value={note.content} />
            <Zoom in={appeared}>
            <Fab onClick={addNote}><AddIcon /></Fab>
            </Zoom>
          </form>
        </div>
      );
    
}

export default CreateArea;