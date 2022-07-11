import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyHomeComponent } from './company-home/company-home.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ParkingAreaComponent } from './parking-area/parking-area.component';
import { RegisterComponent } from './register/register.component';
import { UserHomeComponent } from './user-home/user-home.component';

const routes: Routes = [
  {path:"",component:HomepageComponent},
  {path:"register",component:RegisterComponent},
  {path:"userHome",component:UserHomeComponent},
  {path:"companyHome",component:CompanyHomeComponent},
  {path:"parking-area",component:ParkingAreaComponent},
  {path:"**",component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
  {onSameUrlNavigation:'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
