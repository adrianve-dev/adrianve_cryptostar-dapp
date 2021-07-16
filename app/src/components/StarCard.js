import React from 'react'
import Star from './Star'
//names may too long, for future ref:
//https://www.zachleat.com/web/bigtext-makes-text-big/

export default function StarCard (props) {
    return (
        <div className='row'>
            <div className='col-md-3 col-sm-1 col-lg-4'></div>
            <div className='star-card m-3 col-md-6 col-sm-10 col-lg-4'>
                <div className='d-flex flex-column'>
                    <div className='row star-card-title'>
                        <div className='col-sm-2 text-center star-card-id card-border-bottom' >{props.id}</div>
                        <div className='col-sm-10 text-center card-border-bottom' >{props.name}</div>
                    </div>
                </div>
                <div className='d-flex flex-column justify-content-center card-border-bottom'>
                    <Star color={props.color} />
                </div>
                <div className='d-flex flex-column'>
                    <div className='row text-center star-card-owner'>
                        <strong>{props.owner}</strong>
                    </div>
                </div>
            </div>
            <div className='col-md-3 col-sm-1 col-lg-4'></div>
        </div>
    )
}