export class Product {
  id: number | undefined;
  title: string = "";
  price: string = "";
  imageUrl: string = "";
  images?: string[] = [];
  category: string = "";

  constructor(initializer?: any) {
    if (!initializer) return;
    if (initializer.id) this.id = initializer.id;
    if (initializer.title) this.title = initializer.title;
    if (initializer.price) this.price = initializer.price;
    if (initializer.imageUrl) this.imageUrl = initializer.imageUrl;
    if (initializer.images) this.images = initializer.images;
    if (initializer.category) this.category = initializer.category;
  }
}
