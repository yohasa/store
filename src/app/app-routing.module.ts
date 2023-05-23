import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './screens/contact-us/contact-us.component';
import { ItemDetailsComponent } from './screens/item-details/item-details.component';
import { ItemListComponent } from './screens/item-list/item-list.component';

const routes: Routes = [
  {path: 'list', component: ItemListComponent},
  {path: 'item', component: ItemDetailsComponent},
  {path: 'contact', component: ContactUsComponent},
  {path: '**', component: ItemListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
