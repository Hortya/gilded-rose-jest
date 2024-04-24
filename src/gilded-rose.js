class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items = []) {
    this.items = items;
  }
  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].name === 'Sulfuras, Hand of Ragnaros') {
        this.items[i].quality = 80;
        continue;
      }
      this.items[i].sellIn--;
      if (this.items[i].name === 'Aged Brie') {
        if (this.items[i].sellIn < 0) this.items[i].quality++;
        this.items[i].quality++;
        noMoreThan50(this.items[i]);
        continue;
      }
      if (this.items[i].name === "Backstage passes to a TAFKAL80ETC concert") {
        if (this.items[i].sellIn < 10) this.items[i].quality++;
        if (this.items[i].sellIn < 5) this.items[i].quality++;
        this.items[i].quality++;
        noMoreThan50(this.items[i]);
        if (this.items[i].sellIn < 0) this.items[i].quality = 0;
        continue
      }
      if (this.items[i].sellIn < 0) this.items[i].quality--;
      this.items[i].quality--;
      noLessThan0(this.items[i]);
    }

    return this.items;
  }
}

function noLessThan0(object) {
  if (object.quality < 0) object.quality = 0;
}
function noMoreThan50(object) {
  if (object.quality > 50) object.quality = 50;
}


module.exports = {
  Item,
  Shop
}
