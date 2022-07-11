import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.css']
})
export class ElementComponent implements OnInit {
  @Input() public area:any;
  constructor(public _router:Router) { }

  ngOnInit(): void {
  }

  onClick(){
    this._router.navigate(["parking-area"]);
  }
}
