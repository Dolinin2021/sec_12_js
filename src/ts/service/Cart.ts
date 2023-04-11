import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items]; 
    }

    //суммарная стоимость без учёта скидки
    sum(): number {
        let sumPrice = 0;
        for(let item of this._items) {
            sumPrice += item.price;
        }
        return sumPrice; 
    }

    //суммарная стоимость с учётом скидки
    discountPrice(discount: number): number {
        let percent = 100 - discount;
        let res = (this.sum() * percent)/100;
        return res;
    }

    delete(id: number): void {
        const index = this._items.findIndex(item => item.id === id);
        if (index !== -1) {
            this._items.splice(index, 1);
        }
    }
}