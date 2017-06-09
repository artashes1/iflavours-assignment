import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { UserDetailComponent } from './components/user-detail.component';
import { UserListComponent } from './components/user-list.component';
import { UserService } from './servises/user.service';
import { UserRolesResolverService } from './servises/roles-resolver.service';

const appRoutes: Routes = [
  {
    path: 'users/:id',
    component: UserDetailComponent,
    resolve: {
      allRoles: UserRolesResolverService
    }
  },
  {
    path: 'users',
    component: UserListComponent
  },
  {
    path: '',
    redirectTo: '/users',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [BrowserModule, HttpModule, ReactiveFormsModule, RouterModule.forRoot(appRoutes)],
  declarations: [AppComponent, UserDetailComponent, UserListComponent],
  providers: [UserService, UserRolesResolverService],
  bootstrap: [AppComponent]
})
export class AppModule {
}