import { Component, OnInit } from '@angular/core';
// import {MatDialog} from '@angular/material/dialog';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
  }

  // openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
  //   this.dialog.open(PersonalProfile, {
  //     width: 'auto',
  //     enterAnimationDuration,
  //     exitAnimationDuration,
  //   });
  // }

}

// @Component({
//   selector: 'app-personal-profile',
//   templateUrl: '../personal-profile/personal-profile.component.html',
//   styleUrls: ['../personal-profile/personal-profile.component.css']
// })
// export class PersonalProfile {}

// @Component({
//     selector: 'app-abc',
//     templateUrl: '../abc/abc.component.html'
//   })
  
//   export class PersonalProfile implements OnInit{
//     constructor(public translate: TranslateService) {
//       translate.addLangs(['en','vi']);
//       translate.setDefaultLang('vi');
//     }
//     switchLanguage(lang: string){
//       this.translate.use(lang);
//     }
//     ngOnInit(): void {
//     }
//   }