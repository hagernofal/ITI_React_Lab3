import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://api.escuelajs.co/api/v1/products', 
});

export async function productsLoader() {
  try {
    const response = await instance.get(''); 
    return response.data;
  } catch (error) {
    console.error("Failed to load products from API", error);
    return [];
  }
}

export async function productsLoaderDetails({ params }) {
  try {
    const { id } = params; 
    const response = await instance.get(`/${id}`); 
    return response.data;
  } catch (error) {
    console.error("Failed to load product details", error);
    return null; 
  }
}