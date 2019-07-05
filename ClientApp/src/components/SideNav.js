import React from 'react'
import { Link } from 'react-router-dom'
import { faHome, faMusic, faGuitar, faQuestion } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SideNav() {

  return (
    <>
      <section className='side-nav'>
        <Link to={{ pathname: '/' }}><p><FontAwesomeIcon icon={faHome} size='1x' /> Home</p></Link>
        <Link to={{ pathname: '/' }}><p><FontAwesomeIcon icon={faGuitar} size='1x' /> Gear</p></Link>
        <Link to={{ pathname: '/' }}><p><FontAwesomeIcon icon={faMusic} size='1x' /> Music</p></Link>
        <Link to={{ pathname: '/' }}><p><FontAwesomeIcon icon={faQuestion} size='1x' /> Questions</p></Link>
      </section>
    </>
  )
}