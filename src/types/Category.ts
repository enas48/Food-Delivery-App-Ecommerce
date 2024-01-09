export class Category {

    title: string = '';
    img: string = '';

  
    constructor(initializer?: any) {
      if (!initializer) return;
      if (initializer.title) this.title = initializer.title;
      if (initializer.img) this.img = initializer.img;

    }
  }