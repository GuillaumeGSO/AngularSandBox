import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

constructor(private http: HttpClient) {}

  //wordsForm: FormGroup;
  title = 'Guillaume first App';
  tabWords: string[];
  items=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26];
  numSelected: Number;

  ngOnInit() {
    this.numSelected=5;
    this.getMots(this.numSelected);
  }

  getMots(longueur:Number):string[] {
    const path=`assets/${this.numSelected}.txt`;
    this.http.get(path, {responseType:'arraybuffer'})
    .subscribe((resp) => {
      this.tabWords=new TextDecoder('iso-8859-1').decode(resp).split('\n');
    } , (err) => console.error(err));
    return this.tabWords;
  }

  onNumSelected(val:any) {
    this.getMots(this.numSelected);
  }

}
