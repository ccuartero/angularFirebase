import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Use RouterModule, Routes for activating routing in angular
import { RouterModule, Routes } from '@angular/router';

// Include components for in which router service to be used
import { HomeComponent } from './component/home/home.component';
import { NewsListComponent } from './component/news-list/news-list.component';
import { ArchiveListComponent } from './component/archive-list/archive-list.component';

// Routes array define component along with the path name for url
const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'news-list', component: NewsListComponent },
  { path: 'archive-list', component: ArchiveListComponent },
];

// Import RouterModule and inject routes array in it and dont forget to export the RouterModule
@NgModule({
  imports: [CommonModule,RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
