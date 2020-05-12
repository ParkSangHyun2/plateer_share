function Goods() {
    this.name = '';
    this.price = '';
    this.address = '';
    this.likeCount = 0;
    this.image = '';
}

const getGoodsInstance = function(name, price, address, likeCount, image) {
    //
    let goodsInstance = new Goods();
    goodsInstance.name =  name;
    goodsInstance.price = price;
    goodsInstance.address = address;
    goodsInstance.likeCount = likeCount;
    goodsInstance.image = image;

    return goodsInstance;
}

const GoodsSample = {
    name:"오프화이트 맨투맨",
    price:"300,000원",
    address:"경기 군포시",
    likeCount:0,
}