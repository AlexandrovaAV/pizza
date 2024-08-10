import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductType} from "../../../../types/product.type";
import {ProductService} from "../../../shared/services/product.service";
import {HttpClient} from "@angular/common/http";
import {catchError, map, of, retry, Subscription, tap} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnDestroy {
  constructor(private productService: ProductService, private http: HttpClient, private router: Router) { }
  public products: ProductType[] = [];
  private subscriptionProducts: Subscription | null = null;
  public loading: boolean = false;

  ngOnInit() {
    this.loading = true;
    this.subscriptionProducts = this.productService.getProducts()
      .pipe(
        tap(()=> {
          this.loading = false;
        })
      )
      .subscribe(
        {
          next: (data) => {
            this.products = data;
          },
          error: (error) => {
            console.log(error);
            this.router.navigate(['/']);
          }
        });
  }

  ngOnDestroy() {
    this.subscriptionProducts?.unsubscribe();
  }


}
