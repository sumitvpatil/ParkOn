import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AreaService } from '../area.service';

@Component({
  selector: 'app-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.css']
})
export class ElementComponent implements OnInit {
  @Input() public area:any;
  constructor(public _router:Router,public _as:AreaService) { }

  ngOnInit(): void {
  }

  onClick(){
    this._as.area=this.area;
    this._router.navigate(["parking-area"]);
  }
}
