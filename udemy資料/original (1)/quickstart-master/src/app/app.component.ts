import { Component } from "@angular/core";

@Component({
  selector: 'my-app',
  template: `
    <h1>{{ title }}</h1>
    <nav>
        <a routerLink="/dashbord" routerLinkActive="active">ダッシュボード</a>
        <a routerLink="/members" routerLinkActive="active">社員一覧</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title =  '社員名簿一覧';
}
