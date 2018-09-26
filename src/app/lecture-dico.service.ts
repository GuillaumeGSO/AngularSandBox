import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
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

  getMotsObservable(longueur: Number): Observable<string> {
    let list = this.lectureFichierService.getListeMots(longueur);
    console.log(`Le service lecture de fichie a retourné ${list.length}`);
    return new Observable(
      observer => {
        setInterval(() => observer.next(list.pop()), 1000);
      }
    )
  }

  getUnMotParSeconde(longueur: Number): Observable<string> {
    return new Observable(
      observer => {
        setInterval(() => observer.next('coucou'), 1000);
      }
    );
  }
}
