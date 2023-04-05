import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HeaderComponent } from './components/header/header.component';
import { MemoComponent } from './shared/components/memo/memo.component';
import { WhackAMoleComponent } from './pages/whack-a-mole/whack-a-mole.component';
import { FormsModule } from '@angular/forms';
import { FindTreasureComponent } from './pages/find-treasure/find-treasure.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
    MemoComponent,
    WhackAMoleComponent,
    FindTreasureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
