import React from 'react'

export default function Star (props) {
    return (
        <div className='d-flex justify-content-center m-3' style={{color: props.color, fontSize:'10em'}}>
            <i className="fas fa-star" ></i>
        </div>   
    )
}