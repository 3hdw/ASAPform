import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import { EmailFormComponent } from './email-form/email-form.component';
import { ThanksPageComponent } from './thanks-page/thanks-page.component';

const routes: Routes = [
  {path: '**', component: EmailFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
