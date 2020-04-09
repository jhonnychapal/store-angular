import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Product } from '../../../product.model';
import { environment } from './../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  // products: Product[] = [
  //   {
  //     id: '1',
  //     image: 'assets/images/barcelona.jpg',
  //     title: 'Barcelona',
  //     price: 100000,
  //     description: 'Camiseta Barcelona'
  //   },
  //   {
  //     id: '2',
  //     image: 'assets/images/chivas.jpg',
  //     title: 'Chivas',
  //     price: 100000,
  //     description: 'Camiseta Chivas'
  //   },
  //   {
  //     id: '3',
  //     image: 'assets/images/gremio.jpg',
  //     title: 'Gremio',
  //     price: 100000,
  //     description: 'Camiseta Gremio'
  //   },
  //   {
  //     id: '4',
  //     image: 'assets/images/psg.jpg',
  //     title: 'PSG',
  //     price: 100000,
  //     description: 'Camiseta PSG'
  //   },
  //   {
  //     id: '5',
  //     image: 'assets/images/river.jpg',
  //     title: 'River',
  //     price: 100000,
  //     description: 'Camiseta River'
  //   }
  // ];

  constructor(
    private http: HttpClient
  ) { }

  getAllProducts() {
    return this.http.get<Product[]>(environment.url_api + '/products');
    // return this.http.get<Product[]>('https://platzi-store.herokuapp.com/products');
  }

  getProduct(id: string) {
    return this.http.get<Product>(environment.url_api + '/products/' + id);
    // return this.http.get<Product>('https://platzi-store.herokuapp.com/products/' + id);
  }

  createProduct(product: Product) {
    return this.http.post(`${environment.url_api}/products`, product);
  }

  updateProduct(id: string, changes: Partial<Product>) {
    return this.http.put(`${environment.url_api}/products/${id}`, changes);
  }

  deleteProduct(id: string) {
    return this.http.delete(`${environment.url_api}/products/${id}`);
  }
}
