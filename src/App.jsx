import React, { useEffect } from 'react'
import { BrowserRouter, json, Route, Routes } from 'react-router-dom'
import Notes from "./Pages/Notes.jsx"
import CreateNote from "./Pages/CreateNote.jsx"
import EditeNote from "./Pages/EditNote.jsx"
// import dummyNotes from "./dummy_notes.js"
import { useState } from 'react'




const App = () => {

  const [notes,setNotes] = useState(JSON.parse(localStorage.getItem("notes")) || [])

  useEffect(() => {
    localStorage.setItem("notes",JSON.stringify(notes))
  }, [notes])
  

  return (
    <main id='app'>
      {/* <BrowserRouter basename='/Note'> */}
        <Routes>
          <Route path='/' element={<Notes notes={notes}/>}/>
          <Route path='/create-note' element={<CreateNote setNotes = {setNotes}/>}/>
          <Route path='/edit-note/:id' element={<EditeNote notes={notes} setNotes={setNotes}/>}/>
        </Routes>
      {/* </BrowserRouter> */}
    </main>
  )
}

export default App