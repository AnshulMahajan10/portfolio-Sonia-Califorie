import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-projects',
  template:`
  <div>
   <h2>{{ 'HOME.TITLE' | translate }}</h2>
   <label>
     {{ 'HOME.SELECT' | translate }}
     <select #langSelect (change)="translate.use(langSelect.value)">
       <option *ngFor="let lang of translate.getLangs()" [value]="lang" [selected]="lang === translate.currentLang">{{ lang }}</option>
     </select>
   </label>
 </div>
`,
})
export class ProjectsComponent implements OnInit {
  //param = {value: 'world'};
  constructor(public translate: TranslateService) {
     translate.addLangs(['en', 'fr']);
     translate.setDefaultLang('en');

     const browserLang = translate.getBrowserLang();
     translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
   }

  ngOnInit() {
  }

}