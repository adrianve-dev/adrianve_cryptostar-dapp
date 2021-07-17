import React, { Component } from "react"
import ReactDOM from "react-dom";
import TitleText from "./TitleText";
import StarCard from "./StarCard";
import { buildStarObject } from "../utils/utils";

export default class SearchStar extends React.Component {
    state = {
        starId: '',
        star: null,
    }

    handleTextChange = (id) => {
        this.setState((prevState) => ({
            starId: id,
        }))
    }

    handleStarSearch = async (id) => {
        try {
            //make sure search field is a number
            if(!Number(id)) {
                //reset state
                this.updateStar(null)
                throw Error(`${id} is not a Number`)
            }

            let name = await this.props.search(this.state.starId)
            if(name) {
                let star = await buildStarObject(this.state.starId)
                this.updateStar(star)
            } else {
                //reset state if does not exist
                this.updateStar(null)
                throw Error(`Star ${id} does not exist`)
            }
        } catch (e) {
            console.error(e)
        }
    }

    updateStar = (star) => {
        this.setState((prevState) => ({
            star: star,
        }))
    }

    render() {
        const { starId, star } = this.state
        return(
            <div>
                <TitleText text='Search' />
                {this.state.star && 
                    <StarCard name={star.name} id={star.id} owner={star.owner} color={star.color} />}
                <div className='row'>
                    <div className="col-sm-6">
                        <label htmlFor="name">Star ID:</label><input type="text" value={starId} onChange={(e) => this.handleTextChange(e.target.value)} placeholder="e.g. 12"></input>
                    </div>
                    <button className="button-tab col-sm-12" onClick={() => this.handleStarSearch(starId)}>Look Up a Star</button>
                </div>
            </div>
        )
    }
}