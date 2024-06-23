import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxsModule} from '@ngxs/store';
import { NgxsLoggerPluginModule} from '@ngxs/logger-plugin';
import { NgxsReduxDevtoolsPluginModule} from '@ngxs/devtools-plugin';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgGridModule } from 'ag-grid-angular';
import { UsersComponent } from './users/users.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    NgxsModule.forRoot(),
    NgxsLoggerPluginModule.forRoot(),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    AgGridModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
