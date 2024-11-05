"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.total = total;
const carBuy_1 = require("../database/model/carBuy");
let produto1 = new carBuy_1.itemBag(2, {
    id: 'MOUSE1A',
    name: 'string',
    value: 5,
    description: 'string',
    img: 'MOUSE1A',
});
let produto2 = new carBuy_1.itemBag(3, {
    id: 'MOUSE1A',
    name: 'MOUSE2A',
    value: 15,
    description: 'MOUSE2A',
    img: 'MOUSE2A',
});
carBuy_1.bag.push(produto1);
function total() {
    let valueTotaly = 0;
    carBuy_1.bag.forEach((element) => {
        valueTotaly += element.subTotal;
    });
    return valueTotaly;
}
