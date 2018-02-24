import { Component } from '@angular/core';

import { AboutPage } from '../about/about';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1 = AboutPage;
  tab2 = AboutPage;
  tab3 = AboutPage;
  tab4 = AboutPage;

  constructor() {

  }
}
