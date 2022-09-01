import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public translate: TranslateService) { 
    translate.addLangs(['en','vi']);
    translate.setDefaultLang('en');
  }

  switchLanguage(lang: string){
    this.translate.use(lang);
  }

  ngOnInit(): void {
    document.getElementById('vi-flag')?.setAttribute('class','gray_100');
  }

  check_en()
  {
    
    document.getElementById('en-flag')?.setAttribute('class','gray_0');
    document.getElementById('vi-flag')?.setAttribute('class','gray_100');
    this.switchLanguage('en');
  }

  check_vi()
  {
    document.getElementById('vi-flag')?.setAttribute('class','gray_0');
    document.getElementById('en-flag')?.setAttribute('class','gray_100');
    this.switchLanguage('vi');
  }

}
