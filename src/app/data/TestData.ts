import { Product } from "../class/product";

export class TestData {

    static products: Product[] = [
        {id: 1, image: "../../assets/images/menu-1.png", title: "Americano", price: 15.99},
        {id: 2, image: "../../assets/images/menu-2.png", title: "Latte", price: 15.99},
        {id: 3, image: "../../assets/images/menu-3.png", title: "Cappuccino", price: 15.99},
        {id: 4, image: "../../assets/images/menu-4.png", title: "Macchiato", price: 15.99},
        {id: 5, image: "../../assets/images/menu-5.png", title: "Espresso", price: 15.99},
        {id: 6, image: "../../assets/images/menu-6.png", title: "Irish", price: 15.99}
    ]
}