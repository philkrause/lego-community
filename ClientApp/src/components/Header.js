import React from 'react'
import sologo from '../images/so-logo.png'
import { Link } from 'react-router-dom'


export default function Header() {


  return (
    <>

      <section className='searcharea'>
        <Link to={{ pathname: '/' }}> <img className='logo' src={sologo} /></Link>
        <Link to={{ pathname: '/' }}> <p>Products</p></Link>
        <p>Customers</p>
        <p>Use Cases</p>
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