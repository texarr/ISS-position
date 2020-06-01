import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ApiService } from './services/api-service.service';
import { AboutComponent } from './components/about/about.component';
import { MyPositionComponent } from './components/my-position/my-position.component';
import { MyMissionComponent } from './components/my-mission/my-mission.component';

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
