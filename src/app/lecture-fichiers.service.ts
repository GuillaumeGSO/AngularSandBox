import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LectureFichiersService {

  private _mapMots:Map<Number, string[]> = new Map();
  private _resultTemp:string[]=[];

  constructor(private http: HttpClient) {
  }

  
  private getDico(longueur: Number): string[] {
    const path=`assets/${longueur}.txt`;
    console.log(`Tentative de récupération du fichier ${path} via http`);
    this.http.get(path, {responseType:'arraybuffer'})
    .subscribe((resp) => {
      this._resultTemp = new TextDecoder('iso-8859-1').decode(resp).split('\n',10);
    } , (err) => console.error(err));
    console.log(`getDico ${longueur} retourne ${this._resultTemp.length}`);
    return this._resultTemp;
  }

  getListeMots(longueur:Number):string[] {
    if (!this._mapMots.get(longueur)) {
      console.log(`Ajout du fichier ${longueur} dans la map ${this._mapMots.size}`);
      this._mapMots.set(longueur, this.getDico(longueur));
    } else {
      console.log(`Récupération directe de ${longueur} dans la map ${this._mapMots.size}`);
    }
    //console.warn(this._mapMots);
    return this._mapMots.get(longueur);
  } 


}
