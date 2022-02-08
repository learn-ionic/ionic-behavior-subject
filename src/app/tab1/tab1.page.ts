import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  counter = 1;

  constructor() {}

  increase() {
    this.counter++;
  }

  // This is the normal way of binding values in the UI
  // Change detection checks the whole page and every single component for changes,
  // every time the user clicks, scrolls or move their mouse. Lots of necessary checks are made.
  // The larger the application gets, the slower it gets!

}
