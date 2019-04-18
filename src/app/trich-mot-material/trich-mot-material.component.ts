import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LectureFichiersService } from '../services/lecture-fichiers.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-trich-mot-material',
  templateUrl: './trich-mot-material.component.html',
  styleUrls: ['./trich-mot-material.component.css']
})
export class TrichMotMaterialComponent implements OnInit {

  myForm: FormGroup
  tabWords: string[]

  items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26];


  constructor(
    private fb: FormBuilder, 
    private _fichierService: LectureFichiersService,) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      inputNbLetters: [2, [Validators.required, Validators.min(1), Validators.max(26), Validators.pattern("^[0-9]*$")]],
      
    }
    )
  }

  onChange() {
    this.tabWords = this._fichierService.getListeMots(this.myForm.get('inputNbLetters').value);
  }

}
