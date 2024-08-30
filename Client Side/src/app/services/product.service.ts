import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = 'http://localhost:5000/api/v1/products';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
}

  // getProducts(): Observable<Product[]> {
  //   return this.http.get<{product: Product[]}>(this.apiUrl).pipe(
  //     map(response => response.product));;
  // }

  // getProducts(): Observable<Product[]> {
  //   // return this.http.get<Product[]>(this.apiUrl);
  //   return this.http.get<{ data: Product[] }>(this.apiUrl).pipe(
  //     map(response => response.data)  // Extracting the data array
  //   );
  // }


  getProductById(id: string): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/${id}`);
  }
}
