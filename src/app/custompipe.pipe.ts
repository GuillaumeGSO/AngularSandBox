import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custompipe'
})
export class CustompipePipe implements PipeTransform {

  transform(arrayBuffer: ArrayBuffer): string {
    const td =  new TextDecoder("iso-8859-1")
    return td.decode(arrayBuffer);
  }

}
