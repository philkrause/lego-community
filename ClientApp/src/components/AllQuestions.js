import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Question from './Question'
import { Link } from 'react-router-dom'

export default function AllQuestions() {
  let [search, setSearch] = useState([])
  let [questions, setQuestions] = useState([])
  let [voteCount, setVoteCount] = useState(0)

  useEffect(() => {
    axios.get('/api/search/all').then(resp => {
      setQuestions(resp.data)
      console.log(resp.data)
    })
  }, [])


  const totalStyle = {
    fontFamily: 'Helvetica Neue',
    fontSize: '1rem',
    fontWeight: 'normal',
    paddingTop: '1rem'
  }


  return (
    <>
      {/* <div className='vote-area'>
        <button
          className='up-vote'
          onClick={() => setVoteCount(voteCount += 1)}
        >
        </button>
        <p>{voteCount}</p>
        <button
          className='down-vote'
          onClick={() => setVoteCount(voteCount -= 1)}
        >
        </button>
      </div> */}
      <h3 style={totalStyle}>Total Questions: {questions.length}</h3>
      <Link to={{ pathname: '/addQuestion' }}> <h3>Submit a Question</h3> </Link>
      {questions.map(q => {
        return (
          <div className='question-list'>
            <Link to={{ pathname: `/answerquestion/${q.id}` }}>
              <Question
                key={q.id}
                title={q.title}
                description={q.description}
              />
            </Link>
          </div>
        )
      })}
    </>
  )
}
