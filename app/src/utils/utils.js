import SHA256 from 'crypto-js/sha256';
import { App } from '../index.js'

export async function buildStarObject(id) {
    let star = null
    let name = await App.lookUp(id)
    if(name) {
        let owner = await App.getStarOwner(id)
        let color = await calcStarColor(id, name, owner)
        star = {
            id,
            name,
            owner,
            color,
        }
    }
    return star
}

export async function createStarObjectLocally(id, name) {
    let owner = App.account
    let color = await calcStarColor(id, name, owner)
    let star = {
        id,
        name,
        owner,
        color,
    }
    return star
}

export async function calcStarColor(id, name, owner) {
    let s = id.toString().concat(':', name, ':', owner)
    let hex = SHA256(s).toString().substr(0, 6)
    return '#'.concat(hex)
}