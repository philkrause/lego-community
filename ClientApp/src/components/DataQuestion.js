import React from 'react'


export default function DataQuestion(props) {

  return (
    <>
      <section className='count'>
        <div className='vote-count'>
          <p>{props.votecount}</p>
          <p>votes</p>
        </div>
        <div className='answers-count'>
          <p>{props.totalanswers}</p>
          <p>answers</p>
        </div>
        <div className='view-count'>
          <p>{props.viewcount}</p>
          <p>views</p>
        </div>
      </section>
    </>
  )
}