import { Injectable } from '@angular/core';
import { LectureFichiersService } from './lecture-fichiers.service';

@Injectable({
  providedIn: 'root'
})
export class LectureDicoService {


  constructor(private lectureFichierService:LectureFichiersService) {
  }

  getMotsClassique(longueur:Number): string[] {
    return this.lectureFichierService.getListeMots(longueur)
    //.filter(x => x!='');
  }
}
