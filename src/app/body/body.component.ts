import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {
  @Input() jobs:[];

  constructor() { }

  ngOnInit() {
    //console.log(this.jobs)
  }

}
