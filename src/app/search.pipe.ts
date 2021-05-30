import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(naturearray:any[],searchterm:string): any[] {
    if(!naturearray || !searchterm)
    {
      return naturearray;
    }
    else{
      return naturearray.filter((natureobj)=>natureobj.producttitle.toLowerCase().indexOf(searchterm.toLowerCase())!==-1)
    }
  }

}
