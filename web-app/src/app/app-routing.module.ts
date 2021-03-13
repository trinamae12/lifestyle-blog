import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './home/home.component';
import { ViewPostComponent } from './view-post/view-post.component';

const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "register", component: RegistrationComponent },
  { path: "home", component: HomeComponent },
  { path: "post/:postId", component: ViewPostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
