import React, { useState, useEffect } from 'react'
import { faArrowCircleUp, faArrowCircleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Vote() {

  let [voteCount, setVoteCount] = useState(0)

  return (
    <>
      <div className='vote-area'>
        <button
          className='up-vote'
          onClick={() => setVoteCount(voteCount += 1)}
        ><FontAwesomeIcon
            icon={faArrowCircleUp}
            size='lg'
            color="rgb(100,125,255)"
          />
        </button>
        <p>{voteCount}</p>
        <button
          className='down-vote'
          onClick={() => setVoteCount(voteCount -= 1)}
        ><FontAwesomeIcon
            icon={faArrowCircleDown}
            size='lg'
            color="rgb(100,25,255)"
          />
        </button>
      </div>

    </>

  )

}


