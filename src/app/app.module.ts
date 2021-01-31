import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddMutantComponent } from './components/add-mutant/add-mutant.component';
import { MutantIndexComponent } from './components/mutant-index/mutant-index.component';
import { EditMutantComponent } from './components/edit-mutant/edit-mutant.component';
import { ListMutantComponent } from './components/list-mutant/list-mutant.component';
import { MutantService } from './services/mutant.service';

import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StatsComponent } from './components/stats/stats.component';

import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    AddMutantComponent,
    MutantIndexComponent,
    EditMutantComponent,
    ListMutantComponent,
    StatsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ChartsModule
  ],
  providers: [MutantService],
  bootstrap: [AppComponent]
})
export class AppModule { }
