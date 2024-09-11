import React, { useEffect, useState } from 'react'
import {CiSearch} from "react-icons/ci"
import {MdClose} from "react-icons/md"
// import dummyNotes from "./../dummy_notes"
import { Link } from 'react-router-dom'
import { BsPlusLg } from 'react-icons/bs'
import NoteItem from '../Components/NoteItem'


const Notes = ({notes}) => {

  const [showSearch, setShowSearch] = useState(false)
  const [text, setText] = useState("")
  const [filteredNotes, setFilteredNotes] = useState(notes)
  const handleSearch = () =>{
    setFilteredNotes(notes.filter(note => {
      if(note.title.toLowerCase().match(text.toLowerCase())){
        return note
      }
    }))
  }
  useEffect(handleSearch,[text])

  return (
    <section>
      <header className='notes__header'>
        {!showSearch && <h2>My Notes</h2>}
        {showSearch && <input type="text" autoFocus placeholder='Keyword...'
        value={text}
        onChange={(e)=>{
          setText(e.target.value)
          handleSearch()
        }}/>}
        {
          showSearch && <button className='btn' onClick={()=> {
            setShowSearch(!showSearch)
            setText("")
          }}> <MdClose/> </button>
        }
        {
          !showSearch && <button className='btn' onClick={()=> setShowSearch(!showSearch)}> <CiSearch/> </button>
        }
      </header>
      <div className="notes__container">
        {filteredNotes.length == 0 && <p className='empty__notes'>No Notes Found.</p>}
        {
          // notes.map(note => <NoteItem key={note.id} note={note}/>)
          filteredNotes.map(note => <NoteItem key={note.id} note={note}/>)
        }
      </div>

      <Link className='btn add__btn' to={'/create-note'}>
        <BsPlusLg/>
      </Link>
    </section>
  )
}

export default Notes