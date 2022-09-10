import { Component, OnInit } from '@angular/core';
import { faCar } from '@fortawesome/free-solid-svg-icons';
import { LoaderService } from '../loader/loader.service';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  faCar=faCar;
  constructor(public _ls:LoaderService) { }
  ngOnInit(): void {
  }

}
