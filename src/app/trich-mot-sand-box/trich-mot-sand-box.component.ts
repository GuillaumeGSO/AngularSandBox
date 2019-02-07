import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LectureDicoService } from '../services/lecture-dico.service';


@Component({
  selector: 'app-trich-mot-sand-box',
  templateUrl: './trich-mot-sand-box.component.html',
  styleUrls: ['./trich-mot-sand-box.component.css']
})
export class TrichMotSandBoxComponent implements OnInit {

  myForm : FormGroup;

  title = "Trich'Mot";
  tabWords: string[] = []
  items=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26];
  numSelected: Number=3;

  constructor(
      private fb: FormBuilder,
      private _dicoService: LectureDicoService,
      private _http: HttpClient,
    ) {}

    ngOnInit()  {
      this.myForm = this.fb.group({
        inputNbLetter: [null, [Validators.required, Validators.min(1), Validators.max(26), Validators.pattern("^[0-9]*$")]],
        selectNbLetter: [this.numSelected],
        radio1: [null]
      })
    }

    onSubmit() {
      this.tabWords = [];
      console.log(`numSelected: ${this.numSelected}`);
      if (this.numSelected) {
      this.tabWords = this._dicoService.getMotsClassique(this.numSelected);
      }
  }

    raz() {
      console.log('raz')
      this.tabWords = [];
    }

}
