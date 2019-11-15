import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bubb-resume';
  Name = {
    first: 'Ian',
    last: 'Bubb'
  }
  
  ian = {
    headerInfo:{

    },
    jobs:[
      {
        title: "Lawrence County Sportsmen’s Association, 3380 North Mill Street, Wampum, PA 16157 (724)-652-1075. (December 2015 - 2017)",
        desc: "Grounds-Keeper"
      },
      {
        title: "D.C.N.R at Moriane State Park, 225 Pleasant Valley Road,  Portersville, PA 16051 (724)-368-8811. (August 2019 - Present)",
        desc: "Semi-Skilled Worker"
      }
    ],
    footerInfo:{

    }
  }
}
