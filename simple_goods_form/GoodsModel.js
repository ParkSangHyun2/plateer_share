function GoodsModel() {
    this.name = '';
    this.price = '';
    this.address = '';
    this.isPurchase = 'showing';
    this.category = '';
    this.description = '';
    this.likeCount = 0;
    this.image='';
}

const getInstance = function(name,
     price,
      address,
       isPurchase,
        category, description, likeCount, image) {
    let instance = new GoodsModel();

    instance.name = name;
    instance.price = price;
    instance.address = address;
    instance.isPurchase = isPurchase;
    instance.category = category;
    instance.description = description;
    instance.likeCount = likeCount;
    instance.image = image;

    return instance;
}