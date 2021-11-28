import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LtPublisherComponent } from './lt-publisher/lt-publisher.component';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { HttpClientModule } from '@angular/common/http';
import { LtPreviewComponent } from './lt-preview/lt-preview.component';
import { LtComposerComponent } from './lt-composer/lt-composer.component';
import {NgJsonEditorModule} from "ang-jsoneditor";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LtComponent } from './lt/lt.component';
import { LtProjectsComponent } from './lt-projects/lt-projects.component';

import { MatToolbarModule} from "@angular/material/toolbar";
import { MatSidenavModule} from "@angular/material/sidenav";
import { MatListModule} from '@angular/material/list';
import { MatIconModule} from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatMenuModule } from "@angular/material/menu";
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatDialogModule} from "@angular/material/dialog";
import { MatCardModule} from "@angular/material/card";
import { MatFormFieldModule} from "@angular/material/form-field";
import { MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import { MatInputModule} from "@angular/material/input";
import { MatSelectModule} from "@angular/material/select";
import { MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatPaginatorModule} from "@angular/material/paginator";
import { MatTreeModule} from "@angular/material/tree";
import { MatProgressBarModule} from "@angular/material/progress-bar";
import {ClipboardModule} from '@angular/cdk/clipboard';
import {MatSnackBarModule} from "@angular/material/snack-bar";
import { MatRadioModule} from "@angular/material/radio";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatChipsModule} from "@angular/material/chips";
import { LtProjectsRawEditComponent } from './lt-projects-raw-edit/lt-projects-raw-edit.component';
import { NgxJsonViewerModule } from 'ngx-json-viewer';
import { LtEntryPageComponent } from './lt-entry-page/lt-entry-page.component';
import {MatRippleModule} from "@angular/material/core";
import { LtComposerLineComponent } from './lt-composer-line/lt-composer-line.component';
import { CountdownModule } from 'ngx-countdown';
import { ClockComponent } from './clock/clock.component';
import { MomentModule } from 'ngx-moment';
import { DateComponent } from './date/date.component';
import { LtKeyComponent } from './lt-key/lt-key.component';
import { environment } from './../environments/environment';

const config: SocketIoConfig = { url: environment.socketUrl, options: {} };

const materialModules = [
  MatToolbarModule,
  MatSidenavModule,
  MatListModule,
  MatIconModule,
  MatButtonModule,
  MatMenuModule,
  BrowserAnimationsModule,
  DragDropModule,
  MatDialogModule,
  MatCardModule,
  MatFormFieldModule,
  MatProgressSpinnerModule,
  MatInputModule,
  MatSelectModule,
  FormsModule,
  MatTableModule,
  MatSortModule,
  MatExpansionModule,
  MatPaginatorModule,
  MatTreeModule,
  MatProgressBarModule,
  ClipboardModule,
  MatSnackBarModule,
  MatRadioModule,
  MatTooltipModule,
  MatAutocompleteModule,
  MatButtonToggleModule,
  MatSlideToggleModule,
  MatChipsModule,
  MatRippleModule


];
@NgModule({
  declarations: [
    AppComponent,
    LtPublisherComponent,
    LtPreviewComponent,
    LtComposerComponent,
    LtComponent,
    LtProjectsComponent,
    LtProjectsRawEditComponent,
    LtEntryPageComponent,
    LtComposerLineComponent,
    ClockComponent,
    DateComponent,
    LtKeyComponent,
  ],
  imports: [
    materialModules,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    SocketIoModule.forRoot(config),
    NgJsonEditorModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    NgxJsonViewerModule,
    CountdownModule,
    MomentModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class AppModule { }
