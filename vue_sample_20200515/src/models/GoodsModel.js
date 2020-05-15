class GoodsModel {
    name = '';
    price = '';
    address = '';
    isPurchase = PurchaseType.SHOWING;
    category = '';
    description = '';
    likeCount = 0;
    image = '';

    constructor(name, price, address, isPurchase, category, description, likeCount, image){
        //
        this.name = name;
        this.price = price;
        this.address = address;
        this.isPurchase = isPurchase;
        this.category = category;
        this.description = description;
        this.likeCount = likeCount;
        this.image = image;
    }
}

export const PurchaseType = {
    COMPLETE: 'complete',
    SHOWING: 'showing',
}

export default GoodsModel;
