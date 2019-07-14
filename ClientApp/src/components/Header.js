import React from 'react'
import sologo from '../images/so-logo.png'
import legologo from '../images/lego-logo.jpg'
import { Link } from 'react-router-dom'
import { faHome, faFileImport, faShoppingCart, faQuestion, } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function Header() {


  return (
    <>
      <section className='searcharea'>
        <Link to={{ pathname: '/' }}> <img className='logo' src={legologo} /></Link>
        <Link to={{ pathname: '/' }}><p><FontAwesomeIcon icon={faHome} size='1x' /> Home</p></Link>
        <Link to={{ pathname: '/addproject' }}><p><FontAwesomeIcon icon={faFileImport} size='1x' /> Project</p></Link>
        <a href='https://shop.lego.com/en-US/#shopxlink'><p><FontAwesomeIcon icon={faShoppingCart} size='1x' /> Shop</p></a>
        <Link to={{ pathname: '/' }}><p><FontAwesomeIcon icon={faQuestion} size='1x' /> Questions</p></Link>
        <div className='header-input'>
          <input
            placeholder='type search here'
            className='searchbox'
            type='text'
          />
        </div>
        <div>
          <button
            className='searchbutton'
          >Search
          </button>
        </div>
      </section>
    </>
  )
}