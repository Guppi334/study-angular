import { Component, OnInit } from '@angular/core';

import { Member } from './member';
import { MemberService } from './member-service';

@Component({
    selector: 'my-dashbord',
    templateUrl: './dashbord.component.html',
    styleUrls: ['./dashbord.component.css']
})

export class DashbordComponent {
    members: Member[];

    constructor(private memberService: MemberService) {}
    ngOnInit(){
        this.memberService.getMembers().then(members => this.members = members.slice(1, 5));
    }
}