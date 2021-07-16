import SHA256 from 'crypto-js/sha256';

export async function calcStarColor(id, name, owner) {
    let s = id.toString().concat(':', name, ':', owner)
    let hex = SHA256(s).toString().substr(0, 6)
    return '#'.concat(hex)
}