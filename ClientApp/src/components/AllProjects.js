import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import DataQuestion from './DataQuestion'


export default function AllQuestions() {
  let [projects, setProjects] = useState([])


  useEffect(() => {
    axios.get('project/all').then(resp => {
      setProjects(resp.data)
      console.log(resp.data)
    })
  }, [])

  return (
    <>
      <div className='submit-question'>
        <h4 style={{ color: 'rgb(0, 150, 255)' }}>Total Projects: {projects.length}</h4>
        <Link to={{ pathname: '/addproject' }}> <h3>Submit a Project</h3> </Link>
      </div>

      {projects.map(p => {
        return (
          <>
            <section className='mid-front'>
              <div className='question-list'>
                <div style={{ display: 'flex', marginLeft: '3rem' }}>
                  <div className='profile'>
                    <Link to={{ pathname: `/project/${p.id}` }}>
                      <img src={p.imageUrl} style={{
                        marginTop: '.8rem', width: '12rem', borderRadius: '5px', border: '2px solid rgb(32, 138, 255)'
                      }} />
                    </Link>
                    <div className='question-area'>
                      <h3>{p.title}</h3>
                    </div>
                  </div>
                  <div>
                    <p style={{ color: 'rgb(12,133,255)', paddingTop: '.3rem', marginLeft: '.8rem' }}>Designer: {p.designer}</p>
                    <p style={{ color: 'rgb(12,133,255)', marginLeft: '.8rem' }}>Piece-Count: {p.pieceCount}</p>
                    <p style={{ color: 'rgb(12,133,255)', marginLeft: '.8rem' }}>Instructions: Yes</p>
                    <DataQuestion
                      votecount={p.viewCount}
                      viewcount={p.voteCount}
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
