import Web3 from "web3";
import starNotaryArtifact from "app/build/contracts/StarNotary.json";
import './css/index.css'
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import { buildStarObject } from './utils/utils.js'

export const App = {
  web3: null,
  account: null,
  meta: null,

  start: async function() {
    console.log('web3 started')
    const { web3 } = this;

    try {
      // get contract instance
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = starNotaryArtifact.networks[networkId];
      this.meta = new web3.eth.Contract(
        starNotaryArtifact.abi,
        deployedNetwork.address,
      );

      // get accounts
      const accounts = await web3.eth.getAccounts();
      this.account = accounts[0];
    } catch (error) {
      console.error(error + ": Could not connect to contract or chain.");
    }
  },

  createStar: async function(name, id) {
    const { createStar } = this.meta.methods;
    let tx = await createStar(name, id).send({from: this.account});
    
    if(tx && tx.events && tx.events.Transfer) {
      console.log('transaction: ', tx.events.Transfer.returnValues)
    }

    return await this.lookUp(id)
  },

  // Implement Task 4 Modify the front end of the DAPP
  lookUp: async function (id){
    const { lookUptokenIdToStarInfo } = this.meta.methods;
    let star = await lookUptokenIdToStarInfo(id).call({from: this.account});
    return star;
  },

  getStarOwner: async function(id) {
    const { ownerOf } = this.meta.methods;
    return await ownerOf(id).call({from: this.account});
  },

  verifyStarOwner: async function(id) {
    const { ownerOf } = this.meta.methods;
    let owner = await ownerOf(id).call({from: this.account});
    return owner === this.account
  },

  //not optimal but contract doesn't currently have function to get all stars
  getAllStars: async function() {
      let count = 1
      let done = false
      let stars = {}
  
      while(!done) {
        let id = count++
        let star = null
        //build star
        try {
          star = await buildStarObject(id)
        } catch (e) {
          done = true
          console.error(e)
          throw e
        }
        star
          ? stars = {
              ...stars,            
              [id]: star
            }
          : done = true

        //failsafe for testing
        if(count > 20) {
          done = true
        }
      }
      
      console.log('stars: ', stars)
      return stars
  }

};

export async function loadWeb3() {
  if (window.ethereum) {
    // use MetaMask's provider
    App.web3 = new Web3(window.ethereum);
    await window.ethereum.enable(); // get permission to access accounts
  } else {
    console.warn("No web3 detected. Falling back to http://127.0.0.1:9545. You should remove this fallback when you deploy live",);
    // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
    App.web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:9545"),);
  }
}

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom'
import ReactApp from "./App";

ReactDOM.render(
  <BrowserRouter>
    <ReactApp />
  </BrowserRouter>, 
  document.getElementById("app"));