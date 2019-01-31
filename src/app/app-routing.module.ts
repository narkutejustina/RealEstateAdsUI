import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommingSoonComponent } from './shared/comming-soon/comming-soon.component';
import { SharedModule } from './shared/shared.module';
import { AdsListComponent } from './modules/ads-list/ads-list.component';

const routes: Routes = [
  { path: '', component: AdsListComponent },
  { path: '**', component: CommingSoonComponent },
];

@NgModule({
  imports: [
    SharedModule, 
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
