export class Product {
    id: number;
    image: any;
    title: string;
    price: string;

    constructor(id: number, image: any, title: string, price: string) {
        this.id = id;
        this.image = image;
        this.title = title;
        this.price = price;
    }
}