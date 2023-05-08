const products = [
    { id: 1, name: 'Watermelon', price: 10 },
    { id: 2, name: 'Mango', price: 10 },
    { id: 3, name: 'Kiwi', price: 10 },
    { id: 4, name: 'Strawberry/BlueBerry', price: 15 },
    { id: 3, name: 'Strawberry/Kiwi', price: 15 },
    { id: 3, name: 'Mint/Lemon/Ginger', price: 20 },
    { id: 3, name: 'Strawberry/Orange/Mango', price: 20 },
    { id: 3, name: 'Strawberry/Banana/Almond Milk', price: 20 },
  ];
  
  module.exports.getProductsList = async (event) => {
    return {
      statusCode: 200,
      body: JSON.stringify(products),
    };
  };
  
  module.exports.getProductsById = async (event) => {
    const productId = event.pathParameters.productId;
    const product = products.find(p => p.id == productId);
  
    if (!product) {
      return {
        statusCode: 404,
        body: JSON.stringify({ error: 'Product not found' })
      };
    }
  
    return {
      statusCode: 200,
      body: JSON.stringify(product)
    };
  };
  