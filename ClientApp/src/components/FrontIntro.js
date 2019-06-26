import React from 'react'
import fblogo from '../images/fblogo.png'
import glogo from '../images/googlelogo.jpg'


export default function FrontInfo() {
  return (

    <section className='introarea'>
      <div className='introtext'>
        <h2>Learn, Share, Build</h2>
        <p>Each month over 50 million developers come to Stack Overflow to learn, share their knowledge, and build their careers.</p>
        <p>Join the world's largest developer community</p>
      </div>
      <section className='introlog'>
        <div>
          <img className='google' src={glogo} />
          <img className='facebook' src={fblogo} />
        </div>
        <p>Display Name</p><input type='text' />
        <p>Email Address</p><span><input type='text' /></span>
        <p>Password</p><span><input type='text' /></span>
      </section>
    </section>

  )
}