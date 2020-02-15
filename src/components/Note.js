import React from "react";
import Zoom from '@material-ui/core/Zoom';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

function Note(props) {
    return <Zoom in={true}>
    <div className="note">
    <button onClick={() => props.deleteNote(props.id)}><HighlightOffIcon /></button>
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        
    </div>
    </Zoom>
}

export default Note;
 