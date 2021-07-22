import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import { EntryComponent } from './Component/entry/entry.component';
import { MatRadioModule } from '@angular/material/radio';  
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { EntryServService } from './Service/entry-serv.service';

import { MatNativeDateModule } from '@angular/material/core';
import { AutomappnumComponent } from './Component/automappnum/automappnum.component';
import { EntryDetailsComponent } from './Component/entry-details/entry-details.component';

@NgModule({
  declarations: [
    AppComponent,
    EntryComponent,
    AutomappnumComponent,
    EntryDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatInputModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
  

  ],
  providers: [MatDatepickerModule,HttpClientModule,EntryServService],
  bootstrap: [AppComponent]
})
export class AppModule { }
