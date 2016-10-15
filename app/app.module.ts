import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './Components/index';
import { HeaderComponent } from "./Components/index";


@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, HeaderComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
