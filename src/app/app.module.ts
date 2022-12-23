import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { HistoryComponent } from './history/history.component';
import { ToOperatorPipe } from 'src/pipes/to-operator.pipe';
import { FirstInputComponent } from './first-input/first-input.component';
import { SecondInputComponent } from './second-input/second-input.component';
import { OutputComponent } from './output/output.component';
import { LeftComponent } from './left/left.component';
@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    HistoryComponent,
    ToOperatorPipe,
    FirstInputComponent,
    SecondInputComponent,
    OutputComponent,
    LeftComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [HistoryComponent, OutputComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
