import { bag, itemBag } from "../database/model/carBuy";

let produto1 = new itemBag(2, {
    id: 'MOUSE1A',
    name: 'string',
    value: 5,
    description: 'string',
    img: 'MOUSE1A',
})
let produto2 = new itemBag(3, {
    id: 'MOUSE1A',
    name: 'MOUSE2A',
    value: 15,
    description: 'MOUSE2A',
    img: 'MOUSE2A',
})
bag.push(produto1)

export function total() {
    let valueTotaly: number = 0
    bag.forEach((element) => {
        valueTotaly += element.subTotal
    })
    return valueTotaly
}

