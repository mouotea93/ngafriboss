import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EntrepriseEditGuard } from './entreprise-edit.guard';
import { EntrepriseAboutComponent } from './entreprise-about/entreprise-about.component';
import { EntrepriseBlogComponent } from './entreprise-blog/entreprise-blog.component';
import { EntrepriseDetailComponent } from './entreprise-detail/entreprise-detail.component';
import { EntrepriseEditComponent } from './entreprise-edit/entreprise-edit.component';
import { EntrepriseEventComponent } from './entreprise-event/entreprise-event.component';
import { EntrepriseListComponent } from './entreprise-list/entreprise-list.component';
import { EntreprisePostComponent } from './entreprise-post/entreprise-post.component';
import { EntrepriseProductComponent } from './entreprise-product/entreprise-product.component';
import { EntrepriseJobComponent } from './entreprise-job/entreprise-job.component';
import { EntrepriseAdvertComponent } from './entreprise-advert/entreprise-advert.component';
import { EntrepriseNewsComponent } from './entreprise-news/entreprise-news.component';
import { EntrepriseHomeComponent } from './entreprise-home/entreprise-home.component';
import { EntrepriseContactComponent } from './entreprise-contact/entreprise-contact.component';
import { EntrepriseTeamComponent } from './entreprise-team/entreprise-team.component';
import { EntrepriseGalerieComponent } from './entreprise-galerie/entreprise-galerie.component';
import { EntrepriseArticleEditComponent } from './entreprise-article-edit/entreprise-article-edit.component';
import { EntrepriseProfileComponent } from './entreprise-profile/entreprise-profile.component';

const routes: Routes = [
  {
    path: '',
    component: EntrepriseListComponent
  },
  {    
    path: ':id',    
    component: EntrepriseDetailComponent,
    children:[{    
        path: '',    
        component: EntrepriseHomeComponent    
      },    
      {    
          path: 'edit',    
          canDeactivate: [EntrepriseEditGuard],    
          component: EntrepriseEditComponent    
      }, 
      {    
          path: 'blog',      
          component: EntrepriseBlogComponent    
      }, 
      {    
          path: 'about',      
          component: EntrepriseAboutComponent    
      }, 
      {    
          path: 'events',      
          component: EntrepriseEventComponent    
      }, 
      {    
          path: 'posts',      
          component: EntreprisePostComponent    
      }, 
      {    
          path: 'products',      
          component: EntrepriseProductComponent    
      }, 
      {    
          path: 'jobs',      
          component: EntrepriseJobComponent    
      }, 
      {    
          path: 'adverts',      
          component: EntrepriseAdvertComponent    
      }, 
      {    
          path: 'news',      
          component: EntrepriseNewsComponent   
      }, 
      {    
          path: 'contact',      
          component: EntrepriseContactComponent   
      }, 
      {    
          path: 'team',      
          component: EntrepriseTeamComponent
      }, 
      {    
          path: 'galerie',      
          component: EntrepriseGalerieComponent
      }, 
      {
          path: 'new-article',
          component:EntrepriseArticleEditComponent
      },
      {
          path: 'profil',
          component:EntrepriseProfileComponent
      }

    ]    
  },    
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntrepriseRoutingModule { }
