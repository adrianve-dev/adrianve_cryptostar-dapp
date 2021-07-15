import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import CreateStar from "./components/CreateStar";
import StarsList from "./components/StarsList";
import SearchStar from "./components/SearchStar";
import { loadWeb3, App } from "./index.js";

export default class ReactApp extends React.Component {

    componentDidMount() {
        loadWeb3()
    }

    handleCreateStar = () => {
        console.log('star created')
    }

    handleSearch = async (id) => {
        let star = null
        try {
            if(!Number(id)) {
                throw Error(`${id} is not a Number`)
            }
            star = await App.lookUp(id)
            console.log('star searched: ', star, App.account)
        } catch (e) {
            console.error(e)
        }
    }

    render() {
        return (
            <div>
                <Navbar />
                <div className='container'>
                    <Switch>
                        <Route path='/search'>
                            <SearchStar search={this.handleSearch} />
                        </Route>
                    </Switch>
                </div>
            </div>
        )
    }
}