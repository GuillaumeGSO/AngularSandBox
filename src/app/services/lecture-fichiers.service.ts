import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LectureFichiersService {

  constructor(private http: HttpClient) {
  }

  private getDicoOLD(longueur: Number): string[] {
    const path=`assets/${longueur}.txt`;
    let result:string[]=[]
    console.log(`Tentative de récupération du fichier ${path} via http`);
    this.http.get(path, {responseType:'arraybuffer'})
    .subscribe((resp) => {
      result = new TextDecoder('iso-8859-1').decode(resp).split('\n');
    } , (err) => console.error(err));
    return result;
  }

  private getDico(longueur: Number): string[] {
    const path=`assets/${longueur}.txt`
    let result:string[]
    console.log(`Tentative de récupération du fichier ${path} via http`)
    this.getHttpDico(longueur)
      .then(res=> result = 
          new TextDecoder('iso-8859-1').decode(res).split('\n'))
          .catch(err => console.log(err))
          console.log(result)
    return result;
  }

  private async getHttpDico(longueur : Number) : Promise<ArrayBuffer> {
    const path=`assets/${longueur}.txt`
    let $result:Promise<ArrayBuffer>
    await fetch(path).then(res => $result = res.arrayBuffer())
    .catch(err => console.log(err))
    return $result;
  }

  getListeMots(longueur:Number):string[] {
      return this.getDicoOLD(longueur)
    }

}
