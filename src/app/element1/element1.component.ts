import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-element1',
  templateUrl: './element1.component.html',
  styleUrls: ['./element1.component.css']
})
export class Element1Component implements OnInit {
  public show:boolean=true;
  constructor() { }
  @Input() public area:any;
  ngOnInit(): void {
  }

  onClick(){
    this.show=!this.show;
  }
}
