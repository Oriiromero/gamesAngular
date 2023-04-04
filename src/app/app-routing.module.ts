import { HomePageComponent } from './pages/home-page/home-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemoComponent } from './shared/components/memo/memo.component';
import { WhackAMoleComponent } from './pages/whack-a-mole/whack-a-mole.component';

const routes: Routes = [
  {
    path: "memo-game", component: HomePageComponent
  },
  {
    path: "whack-a-mole", component: WhackAMoleComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
