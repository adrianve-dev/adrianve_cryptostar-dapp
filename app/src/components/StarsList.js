import React from 'react'
import StarCard from './StarCard'

export default function StarsList (props) {
    const { stars } = props

    if(stars){
        let starsList = Object.keys(stars)
        return (
            <div>
                {starsList.map((id) => (
                    <div key={stars[id].id}>
                        <StarCard name={stars[id].name} id={stars[id].id} owner={stars[id].owner} color={stars[id].color} />
                    </div>
                ))}
            </div>
        )
    }
    return <h3 className='col-sm-12 text-center m-3'>No Stars</h3>
}