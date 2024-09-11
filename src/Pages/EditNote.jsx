import React, { useState } from 'react'
import { Link,useParams } from 'react-router-dom'
import { IoIosArrowBack } from 'react-icons/io'
import { RiDeleteBin6Line } from 'react-icons/ri'
import useCreateDate from "./../Components/useCreateDate"
import { useNavigate } from 'react-router-dom'



const EditNote = ({notes,setNotes}) => {
  const {id} = useParams()
  const note = notes.find((item) => item.id == id);
  // console.log(note)
  const [title, setTitle] = useState(note.title)
  const [details, setDetails] = useState(note.details)
  const date = useCreateDate()
  const navigate = useNavigate()



  const handleForm = (e) => {
    e.preventDefault()
    
    if(title && details){
      const newNote = {date, details, id, title}

      const newNotes = notes.map(item => {
        if(item.id == id){
          item = newNote
        }
        return item
      })
      setNotes(newNotes)
    }
    navigate("/")
  }

  const handleDelete = ()=> {

    if(window.confirm("Are you sure you want to delete?")){
      const newNotes = notes.filter(item => item.id != id)
      setNotes(newNotes)
      navigate("/")
    }
  }
  
  return (
    <section>
      <header className='create-note__header'>
        <Link to={"/"} className='btn'>
          <IoIosArrowBack/>
        </Link>
        <button className='btn lg primary' onClick={handleForm}>Save</button>
        <button className='btn danger' onClick={handleDelete}><RiDeleteBin6Line/></button>
      </header>
      <form className='create-note__form' onSubmit={handleForm}>
        <input value={title} type="text" placeholder='title' onChange={(e)=> setTitle(e.target.value)} autoFocus/>
        <textarea rows="28" placeholder='Note details...' value={details} onChange={(e)=> setDetails(e.target.value)}></textarea>
      </form>
    </section>
  )
}

export default EditNote