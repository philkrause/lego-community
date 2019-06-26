import React from 'react'
import sologo from '../images/so-logo.png'


export default function Header() {


  return (
    <>

      <section className='searcharea'>
        <img className='logo' src={sologo} />
        <p>Products</p>
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