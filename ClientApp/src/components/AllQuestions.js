import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Question from './Question'
import { Link } from 'react-router-dom'
import Vote from './Vote'
import DataQuestion from './DataQuestion'
import medieval from '../images/medieval.jpg'

export default function AllQuestions() {
  let [search, setSearch] = useState([])
  let [questions, setQuestions] = useState([])


  useEffect(() => {
    axios.get('/question/all').then(resp => {
      setQuestions(resp.data)
      console.log(resp.data)
    })
  }, [])

  return (
    <>
      <div className='submit-question'>
        <h4 style={{ color: 'rgb(0, 150, 255)' }}>Total Projects: {questions.length}</h4>
        <Link to={{ pathname: '/addproject' }}> <h3>Submit a Project</h3> </Link>
      </div>
      {questions.map(q => {
        return (
          <>
            <section className='mid-front'>
              <div className='question-list'>
                <div style={{ display: 'flex', marginLeft: '3rem' }}>
                  <div>
                    <img src={medieval} style={{
                      marginTop: '.8rem', width: '12rem', borderRadius: '5px', border: '2px solid rgb(32, 138, 255)'
                    }} />
                    <Link to={{ pathname: `/answer/${q.id}` }}>
                      <Question
                        key={q.id}
                        title={q.title}
                      />

                    </Link>
                  </div>
                  <div>
                    <p style={{ color: 'rgb(12,133,255)', paddingTop: '.3rem', marginLeft: '.8rem' }}>Designer: CathyVT</p>
                    <p style={{ color: 'rgb(12,133,255)', marginLeft: '.8rem' }}>Piece-Count: 1123</p>
                    <p style={{ color: 'rgb(12,133,255)', marginLeft: '.8rem' }}>Instructions: Yes</p>

                    <p style={{ marginLeft: '.8rem', color: 'white' }}>Description: This is an alternative build for 10193 Medieval Market Village.The PDF instructions are here, but also you can see 3D steps </p>
                    <DataQuestion
                      votecount={q.viewCount}
                      viewcount={q.voteCount}
                      totalanswers={q.answerTable.length}
                    />
                  </div>
                </div>
              </div>
            </section>
          </>
        )
      })}
    </>
  )
}
