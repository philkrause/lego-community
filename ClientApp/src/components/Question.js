import React from 'react'

export default function Question(props) {

    return (
        <>
            <section className='question-area'>
                <h3>{props.title}</h3>
                <p>{props.description}</p>
            </section>
        </>
    )
}