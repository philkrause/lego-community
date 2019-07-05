import React, { useState, useEffect } from 'react'
import '../css/index.css'
import axios from 'axios'

export default function AddQuestion() {

  const [title, setTitle] = useState({})
  const [description, setDescription] = useState({})

  const submitQuestion = () => {
    axios.post(`/api/question`, {
      title: title,
      description: description
    })
      .then((response) => {
        if (response == 200) {
          alert("Question Was Submitted")
        }
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <>
      <div className='add-question-area'>
        <h3>Title</h3>
        <input
          className='question-title'
          type='textarea'
          wrap='hard'
          spellCheck='true'
          onChange={e => setTitle(e.target.value)}
        />
        <h3>Details</h3>
        <input
          className='question-description'
          type='textarea'
          cols='10'
          rows='10'
          onChange={e => setDescription(e.target.value)}
          spellCheck='true'
        />
        <button onClick={submitQuestion}>Submit</button>

      </div>
    </>
  )
}