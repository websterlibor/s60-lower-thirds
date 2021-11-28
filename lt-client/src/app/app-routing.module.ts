import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LtPublisherComponent} from "./lt-publisher/lt-publisher.component";
import {LtPreviewComponent} from "./lt-preview/lt-preview.component";
import {LtComposerComponent} from "./lt-composer/lt-composer.component";
import {LtProjectsComponent} from "./lt-projects/lt-projects.component";
import {LtProjectsRawEditComponent} from "./lt-projects-raw-edit/lt-projects-raw-edit.component";
import {LtEntryPageComponent} from "./lt-entry-page/lt-entry-page.component";
import {LtKeyComponent} from "./lt-key/lt-key.component";


const routes: Routes = [
  {
    path: '',
    component: LtEntryPageComponent
  },
  {
    path: 'projects',
    component: LtProjectsComponent
  },
  {
    path: 'public',
    component: LtPublisherComponent
  },
  {
    path: 'key',
    component: LtKeyComponent
  },
  {
    path: 'preview',
    component: LtPreviewComponent
  },
  {
    path: 'composer',
    component: LtComposerComponent
  },
  {
    path: 'edit',
    component: LtProjectsRawEditComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
