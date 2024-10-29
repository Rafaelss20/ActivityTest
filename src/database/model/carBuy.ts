interface item {
    id: string;
    name: string;
    value: number;
    estoque: number;
}

class itemBag {
    item: item;
    quantidade: number;
    subTotal: number;
    constructor(quantidade: number, item: item) {
        this.subTotal = quantidade * item.value;
        this.quantidade = quantidade
        this.item = item
    }
}

export const bag: Array<itemBag> = []