import React from 'react'
import FrontInfo from '../components/FrontIntro'
import AllQuestions from '../components/AllQuestions'
import '../css/index.css'
import SideNav from '../components/SideNav'

export default function FrontPage() {

  return (
    <>
      <FrontInfo />
      <section>
        <SideNav />
        <div>
          <AllQuestions />
        </div>
      </section>
    </>
  )
}