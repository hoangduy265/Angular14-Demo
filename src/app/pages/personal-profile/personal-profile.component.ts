import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-personal-profile',
  templateUrl: './personal-profile.component.html',
  styleUrls: ['./personal-profile.component.css']
})
export class PersonalProfileComponent implements OnInit {

  constructor(public translate: TranslateService) {
    translate.addLangs(['en','vi']);
    translate.setDefaultLang('vi');
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



