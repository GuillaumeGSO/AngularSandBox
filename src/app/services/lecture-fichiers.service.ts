import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { p } from '@angular/core/src/render3';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LectureFichiersService {

  private _result:string[]

  constructor(private http: HttpClient) {
    this._result= [];
  }

  private getDico(longueur: Number): string[] {
    const path = `assets/${longueur}.txt`;
    console.log(path)
    console.log("valeur actuelle " + this._result.length)
    //let result: string[] = []
    this.getHttp(path).subscribe((data) => {
      const textDecoder: TextDecoder = new TextDecoder("iso-8859-1")
      const temp: string[] = textDecoder.decode(data).split('\n')
      this._result=temp;
    }
      , (err) => console.error(err));
      console.log("nouvelle valeur " + this._result.length)
    return this._result;
  }

  private getHttp(path: string): Observable<ArrayBuffer> {
    return this.http.get(path, { responseType: 'arraybuffer' });
  }

  getListeMots(longueur: number): string[] {
    return this.getDico(longueur)
  }

  getListeMotsObservable(longueur:number):Observable<ArrayBuffer> {
    const path = `assets/${longueur}.txt`;
    console.log('preparation appel http de ' +  path)
    return this.getHttp(path);
  }
}
