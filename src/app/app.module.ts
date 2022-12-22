import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { HistoryComponent } from './history/history.component';
import { ToOperatorPipe } from './pipes/to-operator.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    HistoryComponent,
    ToOperatorPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [HistoryComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
