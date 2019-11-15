import { Component, OnInit, Input } from '@angular/core';
import { BodyComponent } from '../body.component';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-references',
  templateUrl: './references.component.html',
  styleUrls: ['./references.component.scss'],
  providers: [BodyComponent, AppComponent]
})
export class ReferencesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
