import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AmigosListComponent } from './amigos/amigos-list/amigos-list.component';
import { AmigosFormComponent } from './amigos/amigos-form/amigos-form.component';
import { AmigoListItemComponent } from './amigos/amigo-list-item/amigo-list-item.component';
import { FormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';

@NgModule({
  declarations: [
    AppComponent,
    AmigosListComponent,
    AmigosFormComponent,
    AmigoListItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgxMaskModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
