import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LectureDicoService } from './lecture-dico.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Guillaume first App';
  myDate: Date;
  tabWords: string[] = []
  items=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26];
  numSelected: Number=20;

  constructor(
      private dicoService: LectureDicoService,
      private http: HttpClient,
    ) {}

    ngOnInit() {
      this.numSelected=1;
    }

  
    onNumSelected(val:Number) {
      console.log(`numSelected: ${val}`);
      this.tabWords = this.dicoService.getMotsClassique(val);
    }

}
