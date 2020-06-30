import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import 'rxjs/add/operator/toPromise';

import { Member } from './member';
import { MEMBERS } from './mock-members';

@Injectable()
export class MemberService {

  membersUrl = 'api/members';

  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  getMembers(): Promise<Member[]> {
    return this.http.get(this.membersUrl)
      .toPromise()
      .then(response => response as Member[])
      .catch(this.handleError);
  }

  getMember(id: number): Promise<Member> {
    const url = `${this.membersUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response as Member)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('エラー', error);
    return Promise.reject(error.message || error);
  }

  update(member: Member): Promise<Member> {
    const url = `${this.membersUrl}/${member.id}`;
    return this.http.put(url, member, { headers: this.headers })
      .toPromise()
      .then(() => member)
      .catch(this.handleError);
  }

  create(name: string): Promise<Member> {
    return this.http.post(this.membersUrl, { name: name }, { headers: this.headers })
      .toPromise()
      .then(response => response as Member)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.membersUrl}/${id}`;
    return this.http.delete(url, { headers: this.headers })
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }
}
