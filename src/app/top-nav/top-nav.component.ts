import { Component, OnInit } from '@angular/core';
import { SideNavService } from '../side-nav.service';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent implements OnInit {
  numVis: boolean = false;

  constructor(
    public sideNavService: SideNavService
  ) { }

  ngOnInit(): void {
  }

  numToggle() {
    // go from hidden to visible
    if (!this.numVis) {
      document.getElementById("icons").style
        .cssText = `right: 160px;
                    transition: right 0.25s linear;`;
    } else { // go from visible to hidden
      document.getElementById("icons").style
        .cssText = `right: 0px;
                    transition: right 0.25s linear;`;
    }
    this.numVis = !this.numVis;
  }
}
