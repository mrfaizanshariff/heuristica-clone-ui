import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './components/test-component/react-flow-test.component';
import { ReactsFlowComponent } from './components/react-flow/react-flow.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    TestComponent,
    AppRoutingModule,
    ReactsFlowComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
