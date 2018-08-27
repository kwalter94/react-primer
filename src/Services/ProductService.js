import axios from 'axios';

export default class ProductService {

  static async findAll() {
    const productsFromApi = await axios.get('http://localhost:1337/product');

    const products = productsFromApi.data.map(product => {
      return {
        name: product.Name,
        price: product.Price,
        id: product.Item
      }
    })

    return products
  }
  
}