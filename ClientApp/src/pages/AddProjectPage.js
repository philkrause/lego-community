import React, { useState } from 'react'
import '../css/addproject.css'
import legocolor from '../images/lego-color-banner.jpg'
import axios from 'axios'


export default function AddProjectPage() {

  const [project, setProject] = useState({})


  const submitProject = (e) => {
    e.preventDefault()
    axios.post('/project/add', project).then(resp => {
      console.log(project)
      if (resp.status == 200) {
        alert("Thank you for Submitting your Project!")
      } else {
        alert("There was an issue submitting your project. Please try again.")
      }
    })
  }

  return (
    <>
      <div className='lego-color'>
        <img src={legocolor} className='lego-color' />
      </div>
      <form className='project-form'>
        <section className='title-box'>
          <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
            <h3>Title <span className='req'>*</span></h3>
            <input type='text'
              className='input-box'
              onChange={e => {
                setProject(prevData => {
                  prevData.title = e.target.value
                  return prevData
                })
              }}
            />
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
            <h3>ImageURL<span className='req'>*</span></h3>
            <input type='text'
              className='input-box'
              onChange={e => {
                setProject(prevData => {
                  prevData.imageurl = e.target.value
                  return prevData
                })
              }}
            />
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
            <h3>Designer<span className='req'>*</span></h3>
            <input type='text'
              className='input-box'
              onChange={e => {
                setProject(prevData => {
                  prevData.designer = e.target.value
                  return prevData
                })
              }}
            />
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
            <h3>Theme <span className='req'>*</span></h3>
            <input type='text'
              className='input-box'
              onChange={e => {
                setProject(prevData => {
                  prevData.theme = e.target.value
                  return prevData
                })
              }}
            />
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
            <h3>Piece Count</h3>
            <input type='text'
              className='input-box'
              onChange={e => {
                setProject(prevData => {
                  prevData.piececount = e.target.value
                  return prevData
                })
              }}
            />
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
            <h3>Blue Print URL</h3>
            <input type='text'
              className='input-box'
              onChange={e => {
                setProject(prevData => {
                  prevData.blueprinturl = e.target.value
                  return prevData
                })
              }}
            />
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
            <h3>Video URL</h3>
            <input type='text'
              className='input-box'
              onChange={e => {
                setProject(prevData => {
                  prevData.videourl = e.target.value
                  return prevData
                })
              }}
            />
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
            <h3>Short Description</h3>
            <input type='textarea'
              className='input-box'
              onChange={e => {
                setProject(prevData => {
                  prevData.description = e.target.value
                  return prevData
                })
              }}
            />
          </div>
          <div className='add-question-area'>
            <button
              onClick={submitProject}
              style={{ borderRadius: '10px', margin: '2rem 0 0 4rem' }}
            >Submit</button>
          </div>
        </section >
      </form >

    </>
  )
}