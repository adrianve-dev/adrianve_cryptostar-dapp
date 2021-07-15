import React, { Component } from "react"
import ReactDOM from "react-dom";
import TitleText from "./TitleText";

export default class SearchStar extends React.Component {
    state = {
        starId: '',
    }

    handleTextChange = (id) => {
        this.setState((prevState) => ({
            starId: id,
        }))
    }

    render() {
        return(
            <div>
                <TitleText text='Search' />
                <div className='row'>
                    <div className="col-sm-6">
                        <label htmlFor="name">Star ID:</label><input type="text" value={this.state.starId} onChange={(e) => this.handleTextChange(e.target.value)} placeholder="e.g. 12"></input>
                    </div>
                    <button className="button-tab col-sm-12" onClick={() => this.props.search(this.state.starId)}>Look Up a Star</button>
                </div>
            </div>
        )
    }
}