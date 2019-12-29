import { Component } from '@angular/core';
import { AppareilService } from './appareil.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   isAuth = false;
   appareils: any[];

  constructor(private appreilService: AppareilService) {
    
  }

  ngOnInit() {
    this.appareils = this.appreilService.appareils;
    setTimeout(() => {
      this.isAuth = true;
    }, 2000)
  }

  onAllumer() {
    this.appreilService.switchOnAll();
  }

  onEteindre() {
    if(confirm('Etes-vous sûr de vouloir éteindre tous vos appareils ?')) {
      this.appreilService.switchOffAll();
    } else {
      return null;
    }
}



}
