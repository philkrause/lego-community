import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Question from '../components/Question'
import AnswerQuestion from '../components/AddQuestion'

export default function AnswerQuestionPage(props) {
  const id = props.match.params.id
  const [question, setQuestion] = useState({})
  const [answer, setAnswer] = useState({})


  useEffect(() => {
    axios.get(`/api/question/${id}`).then(resp => {
      setQuestion(resp.data)
      console.log(props.match.params.id)
    })
  }, [])

  const submitQuestion = () => {
    axios.post(`/api/answer/question/${id}`, { description: answer }).then(resp => {
      console.log(resp.data)
    })
  }

  return (
    <>
      <div className='answer'>
        <Question
          key={question.id}
          title={question.title}
          description={question.description}
        />

        <h3>Answer</h3>
        <input
          className='question-description'
          type='textarea'
          onChange={e => setAnswer(e.target.value)}
          spellCheck='true'
        />
        <button onClick={submitQuestion}></button>
      </div>
    </>
  )

}