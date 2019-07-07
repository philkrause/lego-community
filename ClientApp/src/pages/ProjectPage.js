import React, { useState, useEffect } from 'react'
import axios from 'axios'
import '../css/projectpage.css'


export default function ProjectPage(props) {

  const [project, setProject] = useState([]);


  const projectid = props.match.params.id

  useEffect(() => {
    axios.get(`/project/${projectid}`).then(resp => {
      setProject(resp.data)
      console.log(resp.data)
    })
  }, [])

  return (
    <>
      <section className='project-page'>
        <img src={project.imageUrl} />
        <h3>{project.title}</h3>
        <div className='piece-count'>
          <h4>Designer:</h4>
          <p>{project.designer}</p>
        </div>
        <div className='piece-count'>
          <h4>PieceCount:</h4>
          <p>{project.pieceCount}</p>
        </div>
        <div className='piece-count'>
          <h4>Theme:</h4>
          <p>{project.theme}</p>
        </div>
        <div className='piece-count'>
          <h4>ViewCount:</h4>
          <p>{project.viewCount}</p>
        </div>
        <div className='piece-count'>
          <h4>VoteCount:</h4>
          <p>{project.voteCount}</p>
        </div>

        <p style={{ padding: '1rem 3rem 0 3rem' }}>{project.description}</p>
      </section>
    </>
  )
}