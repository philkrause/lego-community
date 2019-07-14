import React from 'react'


export default function DataQuestion(props) {

  return (
    <>
      <section className='count'>
        <div className='vote-count'>
          <p>Piece-Count</p>
          <p>{props.piececount}</p>
        </div>
        <div className='vote-count'>
          <p>Designer</p>
          <p>{props.designer}</p>
        </div>
        <div className='vote-count'>
          <p>{props.votecount}</p>
          <p>votes</p>
        </div>
        <div className='answers-count'>
          <p>0</p>
          <p>Questions</p>
        </div>
        <div className='view-count'>
          <p>{props.viewcount}</p>
          <p>views</p>
        </div>
      </section>
    </>
  )
}