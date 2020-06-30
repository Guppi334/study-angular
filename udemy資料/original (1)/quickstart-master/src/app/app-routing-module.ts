import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { MembersComponent } from "./members.component";
import { DashbordComponent } from './dashbord.component';
import { MemberDetailComponent } from "./member-detail.component";

const routes: Routes = [
    {
      path: '',
      redirectTo: '/dashbord',
      pathMatch: 'full'
    },
    {
      path: "members",
      component: MembersComponent,
    },
    {
      path:"dashbord",
      component: DashbordComponent
    },
    {
      path: "detail/:id",
      component: MemberDetailComponent
    }
  ];

  @NgModule({
      imports: [
          RouterModule.forRoot(routes)
      ],
      exports: [
          RouterModule
      ]
  })
  export class AppRoutingModule {}