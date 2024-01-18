export class CartItemType {
    id: number | undefined;
    title: string = "";
    price: number = 0;
    imageUrl: string = "";
    quantity: number =0;
    totalPrice: number =0;
  
    constructor(initializer?: any) {
      if (!initializer) return;
      if (initializer.id) this.id = initializer.id;
      if (initializer.title) this.title = initializer.title;
      if (initializer.price) this.price = initializer.price;
      if (initializer.imageUrl) this.imageUrl = initializer.imageUrl;
      if (initializer.quantity) this.quantity = initializer.quantity;
      if (initializer.totalPrice) this.totalPrice = initializer.totalPrice;
    }
  }
  