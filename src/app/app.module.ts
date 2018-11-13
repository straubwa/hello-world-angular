import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { SetListComponent } from './sets/set-list.component';
import { SetDetailComponent } from './sets/set-detail.component';
import { HomeComponent } from './home/home.component';
import { LightboxComponent } from './shared/lightbox/lightbox.component';


@NgModule({
  declarations: [
    AppComponent,
    SetListComponent,
    SetDetailComponent,
    HomeComponent,
    LightboxComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      {path: 'sets', component: SetListComponent},
      {path: 'sets/:setNumber', component: SetDetailComponent},
      {path: 'home', component: HomeComponent},
      {path: '', redirectTo:'home', pathMatch: 'full'},
      {path: '**', redirectTo:'home', pathMatch: 'full'}    ])
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    LightboxComponent
  ]
})
export class AppModule { }
