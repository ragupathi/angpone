import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentComponent } from './content/content.component';
import { MainContentComponent } from './main-content/main-content.component';



@NgModule({
  declarations: [HeaderComponent, FooterComponent, SidebarComponent, ContentComponent, MainContentComponent],
  imports: [
    CommonModule
    
  ],
  exports:
  [
    MainContentComponent
    // ModuleFwModule
  ]
})
export class ModuleFwModule { }
