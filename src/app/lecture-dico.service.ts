import { Injectable } from '@angular/core';
import { Observable, from} from 'rxjs';
import { LectureFichiersService } from './lecture-fichiers.service';

@Injectable({
  providedIn: 'root'
})
export class LectureDicoService {


  constructor(private lectureFichierService:LectureFichiersService) {
  }

  getMotsClassique(longueur:Number): string[] {
    return this.lectureFichierService.getListeMots(longueur).filter(x => x!='');
  }

  getMotsObservable(longueur: Number) {
    const myTab:string[] = this.lectureFichierService.getListeMots(longueur);
    console.log('Longueur du tableau:' + myTab.length);
    const myObservable = from(myTab);
    
    const myObserver = {
      next : x => {
          console.log('Observer got next value: ' + x );
        },
      error : err => console.error("Observer got an error : " + err),
      complete: () => console.warn('Observer got a complete notification'),
    };
  
    myObservable.subscribe(myObserver);
  }
}
