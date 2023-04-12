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
        let initialValue = 0;
        const sum = this._items.reduce(function (accumulator, currentValue) {
            return accumulator + currentValue.price;
        }, initialValue);
        return sum;
    }

    //суммарная стоимость с учётом скидки
    discountPrice(discount: number): number {
        const percent = 100 - discount;
        return (this.sum() * percent)/100;
    }

    delete(id: number): void {
        this._items = this._items.filter((item: Buyable) => item.id !== id);
    }
}