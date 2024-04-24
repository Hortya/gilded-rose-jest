import { Shop, Item } from "../src/gilded-rose";

describe("Gilded Rose item", function () {

  it("should keep name", function () {
    const gildedRose = new Shop([new Item("Stuff", 5, 5)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("Stuff");
  });
  
  it("should decrease sellIn each days", function () {
    const gildedRose = new Shop([new Item("Stuff", 10, 5)]);
    let items;
    for(let days = 1; days <= 5; days++){
      items = gildedRose.updateQuality();
      expect(items[0].sellIn).toBe(10 - days);
    }
  });

  it("quality shouldn't be less than 0", () => {
    const gildedRose = new Shop([new Item("Stuff", 5, 5)]);
    let items = gildedRose.updateQuality();
    for (let i = 0; i < 25; i++) {
      items = gildedRose.updateQuality();
    }
    expect(items[0].quality).toEqual(0);
  });

  it("quality should decrease faster when sellIn < 0", () => {
    const gildedRose = new Shop([new Item("Stuff", 1, 10)]);
    let items;
    for (let i = 0; i < 3; i++) {
      items = gildedRose.updateQuality();
    }
    expect(items[0].quality).toEqual(5);
  });
});

describe("Gilded Rose Aged Brie", function () {
  it("quality should increase in time", () => {
    const gildedRose = new Shop([new Item("Aged Brie", 0, 10)]);
    let items;
    for (let i = 0; i < 3; i++) {
      items = gildedRose.updateQuality();
    }
    expect(items[0].quality).toEqual(16);
  });

  it("quality shouldn't be more than 50", () => {
    const gildedRose = new Shop([new Item("Aged Brie", 10, 49)]);
    let items;
    for (let i = 0; i < 5; i++) {
      items = gildedRose.updateQuality();
    }
    expect(items[0].quality).toEqual(50);
  });
});


describe("Gilded Rose Backstage pases", function () {
  it('quality should increase over time', () => {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 25, 10)]);
    let items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(11);
  });

  it('quality should increase faster when sellIn < 10', () => {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 10, 10)]);
    let items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(12); 
  });

  it('quality should increase faster *3 when sellIn < 5', () => {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 5, 10)]);
    let items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(13);
  });
  
  it('quality should increase all day long', () => {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 15, 10)]);
    let items;
    [11, 12, 13, 14, 15, 17, 19, 21, 23, 25, 28, 31, 34, 37, 40, 0].forEach(quality =>{
      items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(quality);
    })
  });

  it('quality should be 0 when sellIn < 0', () => {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 5, 10)]);
    let items;
    for (let i = 0; i < 6; i++) {
      items = gildedRose.updateQuality();
    }
    expect(items[0].quality).toEqual(0);
  });
});

describe("Gilded Rose Sulfuras", function () {
  it("sellIn should always stay the same", () => {
    const gildedRose = new Shop([new Item("Sulfuras, Hand of Ragnaros", 10, 10)]);
    let items;
    for (let i = 0; i < 3; i++) {
      items = gildedRose.updateQuality();
    }
    expect(items[0].sellIn).toEqual(10);
  });
  it("quality should equal 80", () => {
    const gildedRose = new Shop([new Item("Sulfuras, Hand of Ragnaros", 10, 1000)]);
    let items;
    for (let i = 0; i < 3; i++) {
      items = gildedRose.updateQuality();
    }
    expect(items[0].quality).toEqual(80);
  });
});