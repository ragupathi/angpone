import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { User2Component } from './user2/user2.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [UserComponent, User2Component],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[UserComponent]
})
export class Module2Module { }
