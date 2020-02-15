import React, { useState } from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import CreateArea from "./CreateArea";



function App() {

// const [notes, setNotes] = useState([]);
const notes = [];
    
function addNote(newNote){
    // setNotes(prevValue => [...prevValue, newNote])
    notes.push(newNote);
    console.log(notes);
}

// function deleteNote(noteId){
//     setNotes(prevValue => {
//         return prevValue.filter((value, index) => {
//             return index !== noteId;
//         });
//     });
// }

    return (<div>
    <Header />
    <CreateArea addNote={addNote} />
    {
    notes.map((note, index) => 
    <Note
    key ={index} 
    id = {index}
    title={note.title} 
    content={note.content}  
    // deleteNote={deleteNote}
    />
    )}
    <Footer />
    </div>);
}

export default App;


    