import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import CreateStar from "./components/CreateStar";
import StarsList from "./components/StarsList";
import SearchStar from "./components/SearchStar";
import { loadWeb3, App } from "./index.js";

export default class ReactApp extends React.Component {
    state = {
        stars: null,
    }

    componentDidMount() {
        this.initializeApp()
    }

    initializeApp = async () => {
        await loadWeb3()
        await App.start()
        // get all stars
        await this.fetchInitialData()
    }

    fetchInitialData = async () => {
        try {
            //TODO: change so state updates on every star that's retrieved
            let stars = await App.getAllStars()
            this.setState(() => ({
                stars: stars,
            }))
        } catch (e) {
            console.error(e)
        }
    }

    //cannot pass App.createStar()
    //meta (contract) in App is undefined unless method placed here
    handleCreate = async (name, id) => {
        return await App.createStar(name, id)
    }

    handleSearch = async (id) => {
        return await App.lookUp(id)
    }

    render() {
        return (
            <div>
                <Navbar />
                <div className='container'>
                    <Switch>
                        <Route path='/create'>
                            <CreateStar create={this.handleCreate} />
                        </Route>
                        <Route path='/search'>
                            <SearchStar search={this.handleSearch} />
                        </Route>
                        <Route path='/stars'>
                            <StarsList stars={this.state.stars} />
                        </Route>
                        <Route path='/'>
                            <StarsList stars={this.state.stars} />
                        </Route>
                    </Switch>
                </div>
            </div>
        )
    }
}