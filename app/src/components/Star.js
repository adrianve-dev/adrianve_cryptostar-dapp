import React from 'react'

export default function Star (props) {
    return (
        <div className='row'>
            <div className='col-sm-12 m-2 text-center'>{props.name}</div>
            <div className='col-sm-12 m-2 text-center'>{props.id}</div>
        </div>    
    )
}