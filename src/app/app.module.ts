import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { MyPositionComponent } from './my-position/my-position.component';
import { MyMissionComponent } from './my-mission/my-mission.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    MyPositionComponent,
    MyMissionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
