import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { MyPositionComponent } from './my-position/my-position.component';
import { MyMissionComponent } from './my-mission/my-mission.component';
import { ApiService } from './services/api-service.service';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    MyPositionComponent,
    MyMissionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
