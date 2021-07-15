import React from 'react'

export default function TitleText (props) {
    const { text } = props
    return ( 
        <div className='row'>
            <h2>{text}</h2>
        </div>
    )
}