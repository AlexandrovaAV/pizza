import { Component, OnInit } from '@angular/core';
import {CartService} from "../../services/cart.service";

@Component({
  selector: 'footer-component',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {

  constructor(public cartService: CartService) { }
//public - потому что будем использовать в шаблоне, с private
// нельзя бдует использовать в шаблоне
  ngOnInit(): void {
  }

}
