import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { marker as TRANSLATE_ME } from "@biesbjerg/ngx-translate-extract-marker";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    const val = TRANSLATE_ME('home.title');
    console.log(' Title from marker ==> ', TRANSLATE_ME('home.title'));
  }

  supportLanguages = ['en', 'fr', 'ta', 'hi'];

  constructor(private translateService: TranslateService){
    this.translateService.addLangs(this.supportLanguages);
    this.translateService.setDefaultLang('en');
  }

  useLang(lang: string) {
    console.log('selected language ==> ', lang);
    this.translateService.use(lang);
  }
}
