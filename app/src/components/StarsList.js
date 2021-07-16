import React from 'react'
import Star from './Star'

export default function StarsList (props) {
    const { stars } = props

    if(stars){
        let starsList = Object.keys(stars)
        return (
            <div>
                {starsList.map((id) => (
                    <div key={stars[id].id}>
                        <Star name={stars[id].name} id={stars[id].id}/>
                        <div className='col-sm-12 m-2 text-center'>{stars[id].owner}</div>
                    </div>
                ))}
            </div>
        )
    }
    return <h3 className='col-sm-12 text-center m-3'>No Stars</h3>
}