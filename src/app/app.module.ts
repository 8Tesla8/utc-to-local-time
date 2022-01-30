import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UtcConverterService } from './utc-converter-service/utc-converter.service';
import { UtcToLocalTimePipe } from './utc-pipe/utc-to-local-time.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UtcToLocalTimePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [
    UtcConverterService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
