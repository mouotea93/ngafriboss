import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';


@NgModule({
  declarations: [FooterComponent, HeaderComponent, SearchInputComponent, PageNotFoundComponent],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports:[FooterComponent, HeaderComponent, SearchInputComponent, PageNotFoundComponent]
})
export class SharedModule { }
