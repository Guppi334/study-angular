import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Member } from './member';

@Injectable()
export class MemberSearchService {

  constructor(private http: HttpClient) {}

  search(term: string): Observable<Member[]> {
    return this.http.get(`api/members/?name=${term}`)
      .map(response => response as Member[]);
  }
}
