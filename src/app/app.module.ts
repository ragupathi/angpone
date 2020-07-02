import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{ModuleFwModule} from '../module-fw/module-fw.module';
import{Module2Module} from './module2/module2.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{MatButtonModule}from '@angular/material/button';
// import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModuleFwModule,
    Module2Module,
    BrowserAnimationsModule,
    MatButtonModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
