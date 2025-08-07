type Product = {
    id: string;
    name: string;
    price: number;
    category: {
        id: string;
        name: string;
    };
    discount?: number;
};
const listProduct: Product[] = [
    {
        id: "P001",
        name: "Ao so mi",
        price: 10000,
        category: {
            id: "D001",
            name: "Thoi trang nam"
        },
        discount: 10
    }
]
function getFinalPrice(product: Product): number {
    if (product.discount) {
        return product.price * (1 - product.discount / 100)
    }
    return product.price
}
function printProductInfo(product: Product): void {
    console.log(`Ten:${product.name}`);
    console.log(`Gia goc:${product.price.toLocaleString()}`);
    console.log(`Gia sau giam:${getFinalPrice(product).toLocaleString()} VND`);
    console.log(`Danh muc:${product.category.name}`);
}
listProduct.forEach(printProductInfo);
