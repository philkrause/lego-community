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
                <div className='profile'>
                  <Link to={{ pathname: `/project/${p.id}` }}>
                    <img src={p.imageUrl} style={{
                      marginTop: '.8rem', width: '30rem', borderRadius: '5px'
                    }} />
                  </Link>
                  <Link to={{ pathname: `/project/${p.id}` }}>
                    <div className='question-area'>
                      <h3>{p.title}</h3>
                    </div>
                  </Link>
                  <DataQuestion
                    votecount={p.voteCount}
                    piececount={p.pieceCount}
                    designer={p.designer}
                    viewcount={p.viewCount}
                  />
                  <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '20vw', boxShadow: '2px 2px rgb(13,138,255)', borderRadius: '10px' }}>
                      <b style={{ color: 'rgb(13,138,255)', fontSize: '1.2rem', padding: '0' }}>Designer: </b>
                      <p style={{ color: 'rgb(13,138,255)', paddingTop: '.3rem' }}> {p.designer}</p>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '20vw', boxShadow: '2px 2px rgb(13,138,255)', borderRadius: '10px' }}>
                      <b style={{ color: 'rgb(13,138,255)', fontSize: '1.2rem' }}>PieceCount: </b>
                      <p style={{ color: 'rgb(13,138,255)' }}>{p.pieceCount}</p>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '20vw', boxShadow: '2px 2px rgb(13,138,255)', borderRadius: '10px' }}>
                      <b style={{ color: 'rgb(13,138,255)', fontSize: '1.2rem' }}>Instructions: </b>
                      <p style={{ color: 'rgb(13,138,255)' }}>Yes</p>
                    </div>
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
