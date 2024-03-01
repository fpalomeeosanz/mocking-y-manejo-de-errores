export function generateProducts() {
    const products = [];
  
    for (let i = 0; i < 100; i++) {
      products.push({
        title: `Product ${i + 1}`,
        description: `This is a description for product ${i + 1}.`,
        price: Math.floor(Math.random() * 1000) + 1,
        thumbnail: `https://placeimg.com/640/480/any`, 
        code: `CODE-${i + 1}`,
        category: `Category ${Math.floor(Math.random() * 5) + 1}`, 
        stock: Math.floor(Math.random() * 100), 
      });
    }
  
    return products;
}

  