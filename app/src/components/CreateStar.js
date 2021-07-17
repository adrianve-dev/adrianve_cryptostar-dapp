import React, { Component } from 'react'
import ReactDOM from "react-dom";
import TitleText from './TitleText';
import StarCard from './StarCard';
import { createStarObjectLocally } from '../utils/utils';

export default class CreateStar extends React.Component {
    state = {
      name: '',
      id: '',
      star: null,
      loading: false,
      success: false,
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
      let star = null

      //start loading, success = false
      this.toggleLoadingState(true)
      this.toggleSuccessState(false)

      //verify fields are filled and create star optimistically
      if(name && id) {
        star = await createStarObjectLocally(id, name)
        this.updateStar(star)
      } else {
        //Create pop up to notify user to fill all fields
        //reset appropriate state
        this.updateStar(null)
        this.toggleLoadingState(false)
        console.error('All fields (name, id) must be filled.')
        return
      }

      try {
        //create the star
        let createdStarName = await create(name, id)
        if(createdStarName) {
          this.toggleSuccessState(true)
        }
      } catch (e) {
        this.updateStar(null)
        console.error(e)
      }

      this.toggleLoadingState(false)
    }

    updateStar = (star) => {
        this.setState((prevState) => ({
            star: star,
        }))
    }

    toggleLoadingState = (val) => {
      this.setState((prevState) => ({
        loading: val,
      }))
    }

    toggleSuccessState = (val) => {
      this.setState((prevState) => ({
        success: val,
      }))
    }

    render() {
      const { star, loading, success } = this.state
      return(
        <div>
          <TitleText text='Create a Star' />
          {star &&
              <StarCard name={star.name} id={star.id} owner={star.owner} color={star.color} />
          }
          {loading && 
            <div className='text-center'><strong>Creating...</strong></div>
          }
          {success && 
            <div className='text-center text-success'><strong>Created Successfully!</strong></div>
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