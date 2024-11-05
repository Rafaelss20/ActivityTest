import { log } from "console";

interface item {
    id: string;
    name: string;
    value: number;
    description: string;
    img: string;
}

export class itemBag {
    item: item;
    quantidade: number;
    subTotal: number;
    constructor(quantidade: number, item: item) {
        this.subTotal = quantidade * item.value;
        this.quantidade = quantidade
        this.item = item
    }
}
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

const bag: Array<itemBag> = []
bag.push(produto1)

export { bag }