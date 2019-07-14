import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ReactPlayer from 'react-player'
import '../css/projectpage.css'


export default function ProjectPage(props) {

  const [project, setProject] = useState([]);
  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 1
    }
  };

  const video = () => {
    if (project.videoUrl == null || " ") {
      return <img src={project.imageUrl} />
    } else {
      return (
        <div>
          <ReactPlayer url={project.videoUrl} controls playing />
        </div>
      )
    }
  }

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

        <div>{video()}</div>
        <h3>{project.title}</h3>
        <section className='project-data'>
          <div style={{ padding: '1rem' }}>
            {/* <p className='project-des'>{project.description}</p> */}
            <h4>Designer:</h4>
            <p>{project.designer}</p>
            <h4>PieceCount:</h4>
            <p>{project.pieceCount}</p>
          </div>
          <div style={{ padding: '1rem' }}>
            <h4>Theme:</h4>
            <p>{project.theme}</p>
            <a href={project.bluePrintUrl}> <h4> BluePrint Link</h4></a>
            <a href={project.bluePrintUrl}>  <p>Click Here</p></a>
          </div>


          {/* <h4>ViewCount:</h4>
          <p>{project.viewCount}</p>


          <h4>VoteCount:</h4>
          <p>{project.voteCount}</p> */}



        </section>

      </section>
    </>
  )
}