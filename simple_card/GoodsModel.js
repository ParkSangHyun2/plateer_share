const GoodsSample = {
    name:"오프화이트 맨투맨",
    price:"300,000원",
    address:"경기 군포시",
    likeCount:0,
}

function GoodsModel() {
    this.name = '';
    this.price = '';
    this.address = '';
    this.likeCount = 0;
    this.image='';
}

const getInstance = function(name, price, address, likeCount, image) {
    let instance = new GoodsModel();

    instance.name = name;
    instance.price = price;
    instance.address = address;
    instance.likeCount = likeCount;
    instance.image = image;

    return instance;
}