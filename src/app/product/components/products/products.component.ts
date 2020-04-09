import { Component, OnInit } from '@angular/core';

import { Product } from '../../../product.model';
import { ProductsService } from '../../../core/services/products/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

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

  products: Product[];

  constructor(
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.fetchProducts();
  }

  clickProduct(id: number) {
    console.log('product');
    console.log(id);
  }

  fetchProducts() {
    this.productsService.getAllProducts()
    .subscribe(products => {
      // console.log(products);
      this.products = products;
    });
  }

}
