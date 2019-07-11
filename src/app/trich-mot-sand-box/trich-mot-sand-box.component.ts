import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LectureFichiersService } from '../services/lecture-fichiers.service';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-trich-mot-sand-box',
  templateUrl: './trich-mot-sand-box.component.html',
  styleUrls: ['./trich-mot-sand-box.component.css']
})
export class TrichMotSandBoxComponent implements OnInit {

  myForm: FormGroup;

  title = "Trich'Mot";
  tabWords$: Observable<any>

  items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26];

  constructor(
    private fb: FormBuilder,
    private _fichierService: LectureFichiersService,
  ) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      inputNbLetter: [null, [Validators.required, Validators.min(1), Validators.max(26), Validators.pattern("^[0-9]*$")]],
      selectNbLetter: [3],
    })
  }

  onSubmit() {
    this.tabWords$ = this._fichierService.getListeMotsObservable(this.myForm.get('selectNbLetter').value);
  }

  raz() {
    this.tabWords$ = null;
    this.onSubmit();
  }

}
