import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Question from './Question'
import { Link } from 'react-router-dom'
import Vote from './Vote'
import DataQuestion from './DataQuestion';


export default function AllQuestions() {
  let [search, setSearch] = useState([])
  let [questions, setQuestions] = useState([])


  useEffect(() => {
    axios.get('/api/question/all').then(resp => {
      setQuestions(resp.data)
      console.log(resp.data)
    })
  }, [])

  return (
    <>
      <div className='submit-question'>
        <h4 style={{ color: 'rgb(0, 150, 255)' }}>Total Questions: {questions.length}</h4>
        <Link to={{ pathname: '/addQuestion' }}> <h3>Submit a Question</h3> </Link>
      </div>
      {questions.map(q => {
        return (
          <>
            <section className='mid-front'>
              <DataQuestion
                votecount={q.viewCount}
                viewcount={q.voteCount}
                totalanswers={q.answerTable.length}
              />
              <div className='question-list'>
                <Link to={{ pathname: `/answer/${q.id}` }}>
                  <Question
                    key={q.id}
                    title={q.title}
                    description={q.description}
                  />
                </Link>
              </div>
            </section>
          </>
        )
      })}
    </>
  )
}
