import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService, private cartService: CartService) {}

  ngOnInit() {
    this.productService.getProducts().subscribe(response => {
      this.products = response;
      console.log(response);
    });
    // this.productService.getProducts().subscribe((data: Product[]) => {
    //   console.log("hey" + data);
    //   this.products = data;
    // });
  }


  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }
}
