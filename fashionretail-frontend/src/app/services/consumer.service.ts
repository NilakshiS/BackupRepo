import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Product} from '../model/product';
import {Observable} from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConsumerService {

  headers = new HttpHeaders({'Access-Control-Allow-Origin': '*'});

  constructor(private httpClient: HttpClient) {
  }

  public viewCart(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(environment.consumerUrl + '/api/v1/consumer/1/cart', {headers: this.headers});
  }
  public addToCart(product: Product): Observable<Product> {
    return this.httpClient.post<Product>(environment.consumerUrl + '/api/v1/consumer/1/cart', product, {headers: this.headers});
  }
  public removeFromCart(product: Product): Observable<Product> {
    return this.httpClient.request<Product>('delete',
      environment.consumerUrl + '/api/v1/consumer/1/cart',
      {body: product, headers: this.headers});
  }
}
