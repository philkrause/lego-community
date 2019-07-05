import React from 'react'
import sologo from '../images/so-logo.png'
import legologo from '../images/lego-logo.jpg'
import { Link } from 'react-router-dom'
import { faHome, faMusic, faGuitar, faQuestion } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function Header() {


  return (
    <>
      <section className='searcharea'>
        <Link to={{ pathname: '/' }}> <img className='logo' src={legologo} /></Link>
        <Link to={{ pathname: '/' }}><p><FontAwesomeIcon icon={faHome} size='1x' /> Home</p></Link>
        <Link to={{ pathname: '/' }}><p><FontAwesomeIcon icon={faGuitar} size='1x' /> Gear</p></Link>
        <Link to={{ pathname: '/' }}><p><FontAwesomeIcon icon={faMusic} size='1x' /> Music</p></Link>
        <Link to={{ pathname: '/' }}><p><FontAwesomeIcon icon={faQuestion} size='1x' /> Questions</p></Link>
        <div>
          <input
            placeholder='type search here'
            className='searchbox'
            type='text'
          />
        </div>
        <div>
          <button
            className='searchbutton'
          >Submit
          </button>
        </div>
      </section>
    </>
  )
}