import React, { Component } from 'react'
import ReactDOM from "react-dom";
import TitleText from './TitleText';
import Star from './Star';
import { loadWeb3 } from '..';

export default class CreateStar extends React.Component {
    state = {
      name: '',
      id: '',
      star: {},
      loading: false,
    }

    handleNameChange = (text) => {
      this.setState((prevState) => ({
        name: text
      }))
    }

    handleIdChange = (text) => {
      this.setState((prevState) => ({
        id: text
      }))
    }

    handleCreateStar = async () => {
      const { create } = this.props
      const { name, id } = this.state
      console.log(create)

      try {
        //create star - loading state true (sending...)
        this.toggleLoadingState()

        let star = await create(name, id)
        console.log('star: ', star)

        if(star) {        
          this.setState((prevState) => ({
            star: {
              name: star,
              id,
            },
          }))
        }
      } catch (e) {
        console.error(e)
      }

      if(this.state.loading === true) {
        this.toggleLoadingState()
      }
    }

    toggleLoadingState = () => {
      this.setState((prevState) => ({
        loading: !prevState.loading,
      }))
    }

    render() {
        return(
          <div>
            <TitleText text='Create a Star' />
            {this.state.loading
              ? <h4 className='text-center'>Creating...</h4>
              : this.state.star &&
                <Star name={this.state.star.name} id={this.state.star.id} />
            }
            <div className="row">
              <div className="col-sm-6">
                <label htmlFor="starName">Star Name:</label>
                <input onChange={(e) => this.handleNameChange(e.target.value)} type="text" id="starName" placeholder="Gryphon"></input>
              </div>
              <div className="col-sm-6">
                <label htmlFor="starId">Star ID:</label>
                <input onChange={(e) => this.handleIdChange(e.target.value)} type="text" id="starId" placeholder="e.g. 12"></input>
              </div>
              <button id="createStar" className="button-tab col-sm-12" onClick={() => this.handleCreateStar()}>Create Star</button>
            </div>
          </div>
        )
    }
}