import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AppModelService {

  constructor(private http: Http) { }

  get(query) {
    return this.http.get('https://en.wikipedia.org/w/api.php?action=query&format=json&gsrlimit=15&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&generator=search&origin=*&gsrsearch=' + query)
      .map((res: Response) => res.json());
  }
}
