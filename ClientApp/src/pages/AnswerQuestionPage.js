import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Question from '../components/Question'
import AnswerQuestion from '../components/AddQuestion'

export default function AnswerQuestionPage(props) {

  const questionId = props.match.params.id

  const [question, setQuestion] = useState({})
  const [answer, setAnswer] = useState({})
  const [answerList, setanswerList] = useState([])
  const [viewCount, setViewCount] = useState(0)


  useEffect(() => {
    axios.get(`/api/question/${questionId}`).then(resp => {
      setQuestion(resp.data)
      console.log(resp.data)
    }).then(() => {
      axios.get(`/api/question/${questionId}/answers`).then(resp => {
        setanswerList(resp.data)
      }).then(() => {
        axios.patch(`/api/question/${questionId}/addview`)
      })
    })
  }, [])

  const submitQuestion = () => {
    axios.post(`/api/answer/${questionId}`, {
      description: answer
    }).then(resp => {
      if (resp.status !== 200) {
        alert('Unfortunately Your Answer Was Not Accepted. Please Try Again.')
      } else alert('Answer was submitted')
    })
  }

  return (
    <>
      <section className='answer-page'>
        <Question
          key={question.id}
          title={question.title}
          description={question.description}
        />
        <div className='answer-list'>
          {answerList.map(a => {
            return (
              <p className='answer-description'>{a.description}</p>
            )
          })}
        </div>
        <h3>Submit an Answer</h3>
        <textarea
          className='question-description'
          onChange={e => setAnswer(e.target.value)}
          spellCheck='true'
        />
        <button onClick={submitQuestion}>Submit</button>
      </section>
    </>
  )
}
