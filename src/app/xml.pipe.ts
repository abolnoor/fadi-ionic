import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'xml'
})
export class XmlPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    return value;
  }

}
