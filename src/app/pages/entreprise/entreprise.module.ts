import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { EntrepriseRoutingModule } from './entreprise-routing.module';
import { EntrepriseListComponent } from './entreprise-list/entreprise-list.component';
import { EntrepriseDetailComponent } from './entreprise-detail/entreprise-detail.component';
import { EntrepriseEditComponent } from './entreprise-edit/entreprise-edit.component';
import { CacheInterceptor } from '../../shared/cache.interceptor'
import { SharedModule } from '../../shared/shared.module';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NbLayoutModule, NbButtonModule, NbMenuModule, NbUserModule, NbIconModule, NbSelectModule, NbActionsModule, NbThemeModule, NbToastrModule } from '@nebular/theme';
import { EntrepriseBlogComponent } from './entreprise-blog/entreprise-blog.component';
import { EntrepriseAboutComponent } from './entreprise-about/entreprise-about.component';
import { EntrepriseEventComponent } from './entreprise-event/entreprise-event.component';
import { EntrepriseJobComponent } from './entreprise-job/entreprise-job.component';
import { EntrepriseProductComponent } from './entreprise-product/entreprise-product.component';
import { EntrepriseProfileComponent } from './entreprise-profile/entreprise-profile.component';
import { EntreprisePostComponent } from './entreprise-post/entreprise-post.component';
import { EntrepriseNewsComponent } from './entreprise-news/entreprise-news.component';
import { EntrepriseAdvertComponent } from './entreprise-advert/entreprise-advert.component';
import { EntrepriseHomeComponent } from './entreprise-home/entreprise-home.component';
import { EntrepriseContactComponent } from './entreprise-contact/entreprise-contact.component';
import { EntrepriseTeamComponent } from './entreprise-team/entreprise-team.component';
import { EntrepriseGalerieComponent } from './entreprise-galerie/entreprise-galerie.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ImageDragDirective } from './entreprise-detail/image-drag.directive';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { PickerModule } from '@ctrl/ngx-emoji-mart';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxModalDraggableDirective } from './entreprise-detail/draggable.directive';
import { EntrepriseArticleEditComponent } from './entreprise-article-edit/entreprise-article-edit.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
@NgModule({
  declarations: [EntrepriseListComponent,
                 EntrepriseDetailComponent, 
                 EntrepriseEditComponent, 
                 NgxModalDraggableDirective,
                 EntrepriseBlogComponent, 
                 EntrepriseAboutComponent, 
                 EntrepriseEventComponent, 
                 EntrepriseJobComponent, 
                 EntrepriseProductComponent, 
                 EntrepriseProfileComponent, 
                 EntreprisePostComponent,
                 EntrepriseNewsComponent,
                 EntrepriseAdvertComponent,
                 EntrepriseHomeComponent,
                 EntrepriseContactComponent,
                 EntrepriseTeamComponent,
                 EntrepriseGalerieComponent,
                 ImageDragDirective,
                 EntrepriseArticleEditComponent
                ],
        imports: [
          CommonModule,
          EntrepriseRoutingModule,
          SharedModule,
          NbEvaIconsModule,
          HttpClientModule,
          NbLayoutModule,
          NbButtonModule, 
          NbMenuModule, 
          NbUserModule, 
          NbIconModule, 
          NbSelectModule,
          NbActionsModule,
          NbThemeModule, 
          NbToastrModule,
          MDBBootstrapModule,
          TooltipModule.forRoot(),
          ModalModule.forRoot(),
          NgxDropzoneModule,
          PickerModule,
          ReactiveFormsModule,
          CKEditorModule
        ],
        providers: [  
          { provide: HTTP_INTERCEPTORS, useClass: CacheInterceptor, multi: true }  
        ]
})
export class EntrepriseModule { }
