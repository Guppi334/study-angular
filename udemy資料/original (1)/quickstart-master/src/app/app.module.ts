import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { MembersComponent } from "./members.component";
import { DashbordComponent } from "./dashbord.component";
import { MemberDetailComponent } from "./member-detail.component";
import { MemberService } from "./member-service";
import { AppRoutingModule } from "./app-routing-module";

import { MemberSearchComponent } from './member-search.component';

import { InMemoryWebApiModule} from 'angular-in-memory-web-api';
import { InMemoryDataService} from './in-memory-data.service';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule, HttpClientModule, InMemoryWebApiModule.forRoot(InMemoryDataService)],
  declarations: [
    AppComponent,
    MembersComponent,
    MemberDetailComponent,
    DashbordComponent,
    MemberSearchComponent
  ],
  bootstrap: [AppComponent],
  providers: [MemberService],
})
export class AppModule {}
