import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactListComponent } from './contact-list/contact-list.component';
import { CreatecontactComponent } from './createcontact/createcontact.component';
import { HomeComponent } from './home/home.component';
import { ViewComponent } from './view/view.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';

const routes: Routes = [
    {path:"",component:HomeComponent},
    {path:"create", component:CreatecontactComponent},
    {path:"list", component:ContactListComponent},
    {path:"view/:id",component:ViewComponent},
    {path:"edit/:id",component:EditContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
