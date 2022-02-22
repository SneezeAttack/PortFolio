import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { PluginsComponent } from './plugins/plugins.component';
import { MusicComponent } from './music/music.component'
import { SubmissionComponent } from './submission/submission.component';

const routes: Routes = [


  { path: '', redirectTo: '/about', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'plugins', component: PluginsComponent },
  { path: 'music', component: MusicComponent },
  { path: 'submission', component: SubmissionComponent},
  { path: '**', component: AboutComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
